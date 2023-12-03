import "./index.scss";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { SingleProductProps } from "../../../Types";
import { BiSolidStar } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";
import fkAssured from "../../../Asserts/Images/fk-assured.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromWishList } from "../../../API Functions/WishListAPI";

const SingleWishListProduct = ({ product }: SingleProductProps) => {
  const queryClient = useQueryClient();

  const deleteFromWishListMutation = useMutation({
    mutationFn: () => deleteFromWishList(product?.id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["wishlistAllProduct"] }),
  });

  return (
    <div className="wishlist-product">
      <div className="img-container">
        <ImageField
          src={`http://localhost:3000/${product?.image}`}
          alt={product?.name}
        />
      </div>
      <div className="product-details">
        <p className="name">{product?.name}</p>
        <div className="rating_counts">
          <div className="single-rating-number">
            <h4>{product?.ratingStar}</h4>
            <BiSolidStar className="bsStar-icon" />
          </div>
          <div className="rating-count">
            <h4>{product?.ratingCount}</h4> Rating Count
          </div>
          <div>
            <ImageField
              src={fkAssured}
              alt="flipKart Assured"
              className="assured-img"
            />
          </div>
        </div>
        <div className="price-container">
          <span className="₹">₹</span>
          <h4>{product?.priceIndia}</h4>
        </div>
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
