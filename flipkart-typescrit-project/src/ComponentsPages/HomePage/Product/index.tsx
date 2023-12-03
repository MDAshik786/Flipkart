import "./index.scss";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ProductCount from "../ProductCount";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidStar } from "react-icons/bi";
import { SingleProductProps } from "../../../Types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAProductToCart } from "../../../API Functions/HomePageAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { handleNavigate } from "../../../CommonFunctions/Navigate";
import { useNavigate } from "react-router-dom";


export const SingleProduct = ({ product }: SingleProductProps) => {
  const {
    rootStore: { productCounterStore, wishListStore },
  } = useStore();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: (quantity: number) => addAProductToCart(product.id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POST"] });
    },
  });

  const handleSinglePage = () => {
    navigate("single", {state : product})
  }
 
  const id = product?.id
  const temp = wishListStore?.getSpecificWishList.map(prod => prod)

  // console.log(typeof(toJS(wishListStore?.getSpecificWishList)), toJS(wishListStore?.getSpecificWishList), 'id')
  // console.log(typeof(temp), 'temp ')
  // const isProductInWishList: boolean = toJS(wishListStore?.getSpecificWishList).some(t => t === id);

// const array = [1,2,3]
// console.log(array.includes(1))
  return (
    <div className="single-product-container">
      <div className="single-img-container" onClick={handleSinglePage} >
        <ImageField
          src={`http://localhost:3000/${product?.image}`}
          alt={product?.name}
          className="single-product-img"
        />
      </div>
      <p className="single-product-name" onClick={handleSinglePage}>{product?.name}</p>
      <div className="rating-container">
        <div className="single-rating-number">
          <h5>{product?.ratingStar}</h5> <BiSolidStar className="bsStar-icon" />
        </div>
       <div className="rating-counts"> <h5>{product?.ratingCount}</h5>Count</div>
      </div>
      <div className="single-price-container">
        <span className="₹">₹</span>
        <h5>{product?.priceIndia}</h5>
      </div>
      <div className="single-quantity-conatiner">
        <span>Quantity:</span>
        <ProductCount product={product} />
      </div>
      <ButtonFiled
        content="Add To Cart"
        className="single-addToCart-button"
        onClick={() =>
          addToCartMutation.mutate(
            productCounterStore.getProductCounter[product.id]
          )
        }
        disabled={addToCartMutation.isPending}
      />
      <div className="single-absolute">
        {/* {toJS(wishListStore.getSpecificWishList).includes(id)} */}
        <AiFillHeart className="single-wishlist-img-true" />

        {/* <AiOutlineHeart className="single-wishlist-img" /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
