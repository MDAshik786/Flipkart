import "./index.scss";
import { BiSolidStar } from "react-icons/bi";
import { RatingProps } from "../../../Types";

const Rating = ({ data }: RatingProps) => {
  
  const {product} = data

  const dataArray = [1, 2, 3, 4, 5]

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
       {dataArray.reverse().map((value : number, index : number) => {
        return(
          <div className="starts-counts" key={index}>
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
