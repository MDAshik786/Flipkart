import "./index.scss";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ProductCount from "../ProductCount";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { SingleProductProps } from "../../../Types";
import { useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../../ContextHooks/UseStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import AddACartProductMutation from "../../../APIQueryFunction/CartQuery/AddACartProductMutation";
import DeleteWishListMutation from "../../../APIQueryFunction/WishListQuery/DeleteWishListMutation";
import AddAProductWishListMutation from "../../../APIQueryFunction/WishListQuery/AddAProductWishListMutation";

export const HomeSingleProduct = observer(({ product }: SingleProductProps) => {
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
  const { getSpecificWishList } = wishListStore;

  const color =
    productImageStore.getProductImages[product.id] ||
    product.productImages[0].color;

  const addToCartMutation = AddACartProductMutation(
    product.id,
    productCounterStore.getProductCounter[product?.id],
    color,
    userStore.email
  );

  const addTowishList = AddAProductWishListMutation(product, color);

  const deleteFromWishListMutation = DeleteWishListMutation(product.id);

  const handleSinglePage = () => {
    navigate("single", { state: { id: product.id } });
  };

  const handleWishList = () => {
    const isWishlist: boolean = getSpecificWishList.includes(product.id);
    isWishlist ? deleteFromWishListMutation.mutate() : addTowishList.mutate();
  };

  const isWishlist: boolean = wishListStore.getSpecificWishList.includes(
    product.id
  );

  const handleLoginVerification = (mutationFunction: () => void) => {
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
        content={addToCartMutation.isPending ? "Added" : "Add To Cart"}
        className={
          addToCartMutation.isPending
            ? "added-color-button"
            : "single-addToCart-button"
        }
        onClick={() => handleLoginVerification(addToCartMutation.mutateAsync)}
        disabled={addToCartMutation.isPending}
      />
      <div
        className="single-absolute"
        onClick={() => handleLoginVerification(handleWishList)}
      >
        {isWishlist ? (
          <AiFillHeart className="single-wishlist-img-true" />
        ) : (
          <AiOutlineHeart className="single-wishlist-img" />
        )}
      </div>
    </div>
  );
});

export default HomeSingleProduct;
