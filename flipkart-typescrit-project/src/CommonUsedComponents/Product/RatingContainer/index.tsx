import { ratingContainerProps } from "../../../Types";
import { BiSolidStar } from "react-icons/bi";
import ButtonFiled from "../../ButtonField";

const RatingContainer = ({ ratingData }: ratingContainerProps) => {
  return ratingData?.ratingStar === 0 ? (
    <ButtonFiled content={ratingData.content} className="new-arrival-button" />
  ) : (
    <div className="rating-container">
      <div className="single-rating-number">
        <h5>{ratingData.ratingStar}</h5>
        <BiSolidStar className="bsStar-icon" />
      </div>
      <div className="rating-counts">
        <p>{ratingData.ratingCount} Rating </p> &
        <p>{ratingData?.reviewCount} Review </p>
      </div>
    </div>
  );
};

export default RatingContainer;
