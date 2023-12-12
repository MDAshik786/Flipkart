import { priceDataType } from "../../../Types";
import './index.scss'
const PriceContainer = ({ product }: priceDataType) => {
  return (
    <div className="special-price-container">
      <p className="offer-name">
        {product.discountPercentage >= 70
          ? "Special Price"
          : product.discountPercentage >= 50
          ? "Offer Price"
          : ''}
      </p>
      <div className="single-price-container">
        <div className="discount-price-container">
          <span className="₹">₹</span>
          <h4>{product?.discountPrice}</h4>
        </div>
        <div className="original-price-container">
          <span className="₹">₹</span>
          <p>{product?.priceIndia}</p>
        </div>
        <span className="discount-percentage">
          {product?.discountPercentage}% off
        </span>
      </div>
    </div>
  );
};

export default PriceContainer;
