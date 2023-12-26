import "./index.scss";
import ImageConatiner, {
  ImageDataTypes,
} from "../../../../CommonUsedComponents/Product/ImageContainer";
import ProductCount from "../../../HomePage/ProductCount";
import RatingContainer from "../../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../../CommonUsedComponents/Product/PriceContainer";
import { orderSummaryMapType } from "../../../../Types";
import { useNavigate } from "react-router-dom";

const Product = ({ data }: orderSummaryMapType) => {
  const navigate = useNavigate();
  const handleSinglePage = () => {
    navigate("single", { state: { id: product.id } });
  };

  const { color, product } = data;
  const { ratingCount, ratingStar, reviewCount } = product;

  const imageData: ImageDataTypes = {
    product,
    onclick: handleSinglePage,
    color,
  };
  const ratingData = {
    ratingStar,
    content: "New Arrival",
    ratingCount,
    reviewCount,
  };
  

  return (
    <div className="saveforlater">
      <div className="saveforlater-product">
        <div className="left">
          <ImageConatiner imageData={imageData} />
        </div>
        <div className="right">
          <p className="name">{product.name}</p>
          <RatingContainer ratingData={ratingData} />
          <PriceContainer product={product} />
          <div className="about-container">
            <h4>About</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="quantity-container">
          <ProductCount product={product} />
        </div>
        <span className="action-button">MOVE TO CART</span>
        <span className="action-button">Remove</span>
      </div>
    </div>
  );
};

export default Product;
