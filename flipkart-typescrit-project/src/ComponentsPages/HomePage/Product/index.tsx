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
import { useNavigate } from "react-router-dom";
import { toJS } from "mobx";
import {
  AddToWishList,
  deleteFromWishList,
} from "../../../API Functions/WishListAPI";
import { checkEmailVerification } from "../../../CommonFunctions/LoginVerification";

export const HomeSingleProduct = ({ product }: SingleProductProps) => {
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

  const addTowishList = useMutation({
    mutationFn: () => AddToWishList(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      });
    },
  });

  const deleteFromWishListMutation = useMutation({
    mutationFn: () => deleteFromWishList(product?.id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      }),
  });

  const handleSinglePage = () => {
    navigate("single", { state: product });
  };

  const handleWishList = () => {
    const isWishlist: boolean = wishListStore.getSpecificWishList.includes(
      product.id
    );
    isWishlist ? deleteFromWishListMutation.mutate() : addTowishList.mutate();
  };

  const isWishlist: boolean = wishListStore.getSpecificWishList.includes(
    product.id
  );

  const handleLoginVerification = (
    navigate: (name: string) => void,
    mutationFunction: () => void
  ) => {
    !checkEmailVerification() ? navigate("/login") : mutationFunction();
  };

  return (
    <div className="single-product-container">
      <div className="single-img-container" onClick={handleSinglePage}>
        <ImageField
          src={`http://localhost:3000/${product?.image}`}
          alt={product?.name}
          className="single-product-img"
        />
      </div>
      <p className="single-product-name" onClick={handleSinglePage}>
        {product?.name}
      </p>
      <div className="rating-container">
        <div className="single-rating-number">
          <h5>{product?.ratingStar}</h5> <BiSolidStar className="bsStar-icon" />
        </div>
        <div className="rating-counts">
          {" "}
          <h5>{product?.ratingCount}</h5>Count
        </div>
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
      <div className="single-absolute" onClick={handleWishList}>
        {isWishlist ? (
          <AiFillHeart className="single-wishlist-img-true" />
        ) : (
          <AiOutlineHeart className="single-wishlist-img" />
        )}
      </div>
    </div>
  );
};

export default HomeSingleProduct;
