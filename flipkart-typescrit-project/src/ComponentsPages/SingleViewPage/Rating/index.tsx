import "./index.scss";
import { BiSolidStar } from "react-icons/bi";
import { RatingProps } from "../../../Types";

const Rating = ({ data }: RatingProps) => {
  const { product, rating, oneStar, twoStar, threeStar, fourStar, fiveStar } =
    data;

  const dataArray = [
    {
      id: 1,
      count: oneStar,
    },
    {
      id: 2,
      count: twoStar,
    },
    {
      id: 3,
      count: threeStar,
    },
    {
      id: 4,
      count: fourStar,
    },
    {
      id: 5,
      count: fiveStar,
    },
  ];

  type arrayDataType = {
    id : number,
    count : number
  }
  return (
    <div className="rating-review">
      <div className="left">
        <div className="rating">
          <h5>{product?.ratingStar}</h5>
          <BiSolidStar className="bsStar-icons" />
        </div>
        <div className="rating-review-content">
          <span className="c-rating">{product.ratingCount} Rating </span>&{" "}
          <span className="c-review">{product.reviewCount} Review </span>
        </div>
      </div>
      <div className="right">
        {dataArray.reverse().map((data: arrayDataType, index: number) => {
          return (
            <div className="starts-counts" key={index}>
              <div className="starts">
                <h5>{data.id}</h5>
                <BiSolidStar className="bsStar-icons" />
              </div>
              <div className="values">
                <span  className="width" style={{ width: rating[data.id] }}></span>
              </div>
              <p className="stars-percentage">{data.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
