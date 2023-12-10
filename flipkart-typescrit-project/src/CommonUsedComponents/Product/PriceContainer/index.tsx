import { priceDataType } from "../../../Types";

const PriceContainer = ({ product }: priceDataType) => {
  return (
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
  );
};

export default PriceContainer;
