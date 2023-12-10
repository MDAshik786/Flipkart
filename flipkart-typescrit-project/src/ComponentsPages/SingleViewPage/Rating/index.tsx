import "./index.scss";
import { BiSolidStar } from "react-icons/bi";
import { SingleProduct, SingleProductProps } from "../../../Types";

const Rating = ({ product }: SingleProductProps) => {

  const data = [1, 2, 3, 4, 5]

  return (
    <div className="rating-review">
      <div className="left">
        <div className="rating">
          <h5>{product?.ratingStar}</h5>
          <BiSolidStar className="bsStar-icons" />
        </div>
        <div className="rating-review-content">
          <span className="c-rating">17 Ratings</span> & <span className="c-review">1 Reviews</span>
        </div>
      </div>
      <div className="right">
       {data.reverse().map((value : number, index : number) => {
        return(
          <div className="starts-counts">
          <div className="starts">
            <h5>{value}</h5>
            <BiSolidStar className="bsStar-icons" />
          </div>
          <div className="values">
            <span></span>
          </div>
          <p className="stars-percentage">12</p>
        </div>
        )
       }
       
       )}
      </div>
    </div>
  );
};

export default Rating;
