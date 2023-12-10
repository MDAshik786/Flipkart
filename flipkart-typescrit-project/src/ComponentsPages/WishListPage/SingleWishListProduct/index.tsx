import "./index.scss";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { SingleWishListProductType } from "../../../Types";
import { IoTrashBin } from "react-icons/io5";
import fkAssured from "../../../Asserts/Images/fk-assured.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromWishList } from "../../../API Functions/WishListAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import { useNavigate } from "react-router-dom";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";

const SingleWishListProduct = ({ data }: SingleWishListProductType) => {
  const queryClient = useQueryClient();
  const { color } = data;
  const product = data.productDTO;

  const {
    rootStore: { userStore },
  } = useStore();

  const navigate = useNavigate();

  const deleteFromWishListMutation = useMutation({
    mutationFn: () => deleteFromWishList(product?.id, userStore?.email),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["wishlistAllProduct"] }),
  });

  const handleSinglePage = () => {
    navigate("single", { state: product });
  };

  const imageData = {
    product,
    onclick: handleSinglePage,
    color,
  };
  const ratingData = {
    ratingStar: product.ratingStar,
    content: "New Arrival",
    ratingCount: product.ratingCount,
    reviewCount: product.reviewCount,
  };

  return (
    <div className="wishlist-product">
      <ImageConatiner imageData={imageData} />
      <div className="product-details">
        <p className="name">{product?.name}</p>
        <RatingContainer ratingData={ratingData} />
        <PriceContainer product={product} />

        <ImageField src={fkAssured} className="assured-img" />

        <div className="description">
          <h4>Description: </h4>
          <p className="description-content">{product?.description}</p>
        </div>
      </div>
      <IoTrashBin
        className="trash-icons"
        onClick={() => deleteFromWishListMutation.mutate()}
      />
    </div>
  );
};

export default SingleWishListProduct;
