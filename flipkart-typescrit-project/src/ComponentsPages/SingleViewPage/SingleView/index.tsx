import "./index.scss";
import { useLocation } from "react-router-dom";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ProductCount from "../../HomePage/ProductCount";
import { BiSolidStar } from "react-icons/bi";
const SingleView = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="singleview">
      <div className="singleview-left">
        <ImageField
          src={`http://localhost:3000/${product?.image}`}
          alt={product?.name}
        />
        <div className="button-container">
          <ButtonFiled content="add to cart" className="addtocart-button" />
          <ButtonFiled content="buy now" className="buynow-button" />
        </div>
      </div>
      <div className="singleview-right">
        <p className="single-product-name">
          {product?.name}
        </p>
        <div className="rating-container">
          <div className="single-rating-number">
            <h5>{product?.ratingStar}</h5>{" "}
            <BiSolidStar className="bsStar-icon" />
          </div>
          <div className="rating-counts">
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
      </div>
    </div>
  );
};

export default SingleView;
