import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ProductCount from "../ProductCount";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidStar } from "react-icons/bi";
import "./index.css";
import { SingleProductProps } from "../../../Types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAProductToCart } from "../../../API Functions/HomePageAPI";
import { useStore } from "../../../ContextHooks/UseStore";


export const SingleProduct = ({ product }: SingleProductProps) => {
  const { rootStore: { productCounterStore } } = useStore()
  const queryClient = useQueryClient()
  const addToCartMutation = useMutation({
    mutationFn: (quantity: number) => addAProductToCart(product.id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POST"] });

    },
  });

  const handleAddToCart = async (quantity: number) => {
    try {
      await addToCartMutation.mutateAsync(quantity)
    }
    catch (error: any) {
      console.log(error.message)
    }
  }


  return (
    <div className="single-product-container">
      <div className="single-img-container">
        <ImageField
          src={`http://localhost:3000/${product?.image}`}
          alt=""
          className="single-product-img"
        />
      </div>
      <p className="single-product-name">{product?.name}</p>
      <div className="rating-container">
        <div className="single-rating-number">
          {product?.ratingStar} <BiSolidStar className="bsStar-icon" />
        </div>
        <span>{product?.ratingCount}</span>
      </div>
      <div className="single-price-container">
        <span>₹</span>
        <span>{product?.priceIndia}</span>
      </div>
      <div className="single-quantity-conatiner">
        <span>Quantity:</span>
        <ProductCount product={product} />
      </div>
      <ButtonFiled content="Add To Cart" className="single-addToCart-button" onClick={() => handleAddToCart(productCounterStore.getProductCounter[product.id])} disabled={addToCartMutation.isPending}/>
      <div className="single-absolute">
        <AiFillHeart className="single-wishlist-img-true" />
    
        {/* <AiOutlineHeart className="single-wishlist-img" /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
