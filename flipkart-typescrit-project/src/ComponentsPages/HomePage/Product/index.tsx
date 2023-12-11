import "./index.scss";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ProductCount from "../ProductCount";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { SingleProduct, SingleProductProps2 } from "../../../Types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addAProductToCart } from "../../../API Functions/HomePageAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { useNavigate } from "react-router-dom";
import {
  AddToWishList,
  deleteFromWishList,
} from "../../../API Functions/WishListAPI";
import { observer } from "mobx-react-lite";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import GetSingleDataQuery from "../../../UseQuery/GetSingleData";
import { getSingleProductData } from "../../../API Functions/SinglePageAPI";

export const HomeSingleProduct = observer(
  ({ product, getSpecificWishListData }: SingleProductProps2) => {
    const {
      rootStore: {
        productCounterStore,
        wishListStore,
        userStore,
        productImageStore,
      },
    } = useStore();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const addToCartMutation = useMutation({
      mutationFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        addAProductToCart(
          product.id,
          productCounterStore.getProductCounter[product?.id],
          color,
          userStore.email
        );
      },
    });

    const addTowishList = useMutation({
      mutationFn: () => AddToWishList(product, userStore.email, color),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getSpecificIdWishListProduct"],
        });
      },
    });

    const deleteFromWishListMutation = useMutation({
      mutationFn: () => deleteFromWishList(product?.id, userStore?.email),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: ["getSpecificIdWishListProduct"],
        }),
    });

    const singleQueryOnHover = () => {
      queryClient.prefetchQuery({
        queryKey: ["getSingleProductData", product.id],
        queryFn: () => getSingleProductData(product.id),
      });
    };

    const handleSinglePage = () => {
      navigate("single", { state: { id: product.id } });
    };

    const handleWishList = () => {
      const isWishlist: boolean = getSpecificWishListData.includes(product.id);
      isWishlist ? deleteFromWishListMutation.mutate() : addTowishList.mutate();
    };

    const isWishlist: boolean = wishListStore.getSpecificWishList.includes(
      product.id
    );

    const color =
      productImageStore.getProductImages[product.id] ||
      product.productImages[0].color;

    const handleLoginVerification = (
      navigate: (name: string) => void,
      mutationFunction: () => void
    ) => {
      !userStore.isUserLoginOrNot ? navigate("/login") : mutationFunction();
    };

    const ratingData = {
      ratingStar: product.ratingStar,
      content: "New Arrival",
      ratingCount: product.ratingCount,
      reviewCount: product.reviewCount,
    };

    const imageData = {
      product,
      onclick: handleSinglePage,
      color,
    };

    return (
      <div className="single-product-container">
        <ImageConatiner imageData={imageData} />
        <p className="single-product-name" onClick={handleSinglePage}>
          {product?.name}
        </p>
        <RatingContainer ratingData={ratingData} />

        <PriceContainer product={product} />

        <div className="product-color-button-container">
          {product.productImages.map((data, index) => (
            <ButtonFiled
              key={index}
              content={data.color}
              className={
                color === data.color ? "choosen-button" : "product-color-button"
              }
              onClick={() =>
                productImageStore.setColorFunction(product.id, data.color)
              }
            />
          ))}
        </div>
        <div className="single-quantity-conatiner">
          <span>Quantity:</span>
          <ProductCount product={product} />
        </div>
        <ButtonFiled
          content="Add To Cart"
          className="single-addToCart-button"
          onClick={() =>
            handleLoginVerification(navigate, () => addToCartMutation.mutate())
          }
          disabled={addToCartMutation.isPending}
        />
        <div
          className="single-absolute"
          onClick={() =>
            handleLoginVerification(navigate, () => handleWishList())
          }
        >
          {isWishlist ? (
            <AiFillHeart className="single-wishlist-img-true" />
          ) : (
            <AiOutlineHeart className="single-wishlist-img" />
          )}
        </div>
      </div>
    );
  }
);

export default HomeSingleProduct;
