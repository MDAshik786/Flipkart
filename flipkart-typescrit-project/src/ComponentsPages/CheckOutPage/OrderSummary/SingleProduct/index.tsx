import "./index.scss";
import { useNavigate } from "react-router-dom";
import ImageConatiner from "../../../../CommonUsedComponents/Product/ImageContainer";
import { orderSummaryMapType } from "../../../../Types";
import RatingContainer from "../../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../../CommonUsedComponents/Product/PriceContainer";
import ProductCount from "../../../HomePage/ProductCount";

const SingleProduct = ({ data }: orderSummaryMapType) => {
  const { product, color } = data;
  const navigate = useNavigate();

  const handleSinglePage = () => {
    navigate("/single");
  };

  const imageData = {
    product,
    onclick: handleSinglePage,
    color: color,
  };
  const ratingData = {
    ratingStar: product.ratingStar,
    content: "New Arrival",
    ratingCount: product.ratingCount,
    reviewCount: product.reviewCount,
  };

  return (
    <div className="product">
      <div className="img-container">
        <ImageConatiner imageData={imageData} />
        <ProductCount product={product} />
      </div>

      <div className="product-details">
        <p>{product.name}</p>
        <RatingContainer ratingData={ratingData} />
        <PriceContainer product={product} />
        <div className="cart-product-about-container">
          <h4>About :</h4> <p>{product?.description}</p>
        </div>
      </div>
      <p className="delivery-date">Delivery by Sun Dec 17 | Free</p>
    </div>
  );
};

export default SingleProduct;
