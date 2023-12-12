import './index.scss'
import { BiSolidStar } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const ReviewandRatingConatiner = () => {
  return (
    <div className="review-rating">
      <div className="top-rating-container">
        <div className="single-rating-number">
          <h5>4</h5>
          <BiSolidStar className="bsStar-icon" />
        </div>
        <h5 className="font-class">Good choice</h5>
      </div>
      <p className="review-content">
        I pre ordered this phone after launch. I was excited with the hype which
        this phone created in market and shifted from my OnePlus 7 to Nothing
        Phone 2. My observations are as under:- Pro 1. Good display and unique
        design 2. Better battery performance with wireless charging 3. Very good
        OS experience 4. Amazing performance
      </p>
      <div className="bottom-container">
        <div className='bottom-left'>
          <p> Flipkart Customer</p>
          <p>4 months ago</p>
        </div>
        <div className='bottom-right'>
          <div className='review-like-container'><BiSolidDislike /> <span>1</span></div>
          <div className='review-dislike-container'><BiSolidLike /> <span>1</span></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewandRatingConatiner;
