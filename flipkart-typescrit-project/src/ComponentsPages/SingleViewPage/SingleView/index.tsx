import "./index.scss";
import { useLocation } from "react-router-dom";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ProductCount from "../../HomePage/ProductCount";
import { BiSolidStar } from "react-icons/bi";
import fkAssured from "../../../Asserts/Images/fk-assured.png";
import RatingAndReview from "../Rating";
import { SingleProduct } from "../../../Types";

const SingleView = () => {
  const location = useLocation();
  const product : SingleProduct = location.state;

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
        <p className="single-product-namee">{product?.name}</p>
        <div className="rating-container">
          <div className="single-rating-number">
            <h5>{product?.ratingStar}</h5>{" "}
            <BiSolidStar className="bsStar-icon" />
          </div>
          <div className="rating-counts">
            <h5>{product?.ratingCount} Reating Count</h5>
            <h5>{product?.reviewCount} Review Count</h5>
          </div>
        </div>
        <div>
          <ImageField
            src={fkAssured}
            alt="flipKart Assured"
            className="assured-img"
          />
        </div>
        <div className="single-price-container">
          <span className="₹">₹</span>
          <h5>{product?.priceIndia}</h5>
        </div>
        <div className="ruppee-meassage">Convert into US dollar.</div>
        <div className="single-quantity-conatiner">
          <h4>Quantity:</h4>
          <ProductCount product={product} />
        </div>
        <div className="single-product-about">
          <h4 className="about">About:</h4>
          <p>{product?.description}</p>
        </div>
        <RatingAndReview product={product} />
        
      </div>
    </div>
  );
};

export default SingleView;
