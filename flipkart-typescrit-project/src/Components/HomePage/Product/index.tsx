import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ProductCount from "../ProductCount";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidStar } from "react-icons/bi";
import "./index.css";
import { Store } from "../../../MobxStore/ScrollingImageStore";
type SingleProductProps = {
  product: SingleProduct;
  store: Store
};
type SingleProduct = {
  id: number;
  image: string;
  name: string;
  priceCents: number;
  priceIndia: number;
  ratingStar: number;
  totalQuantity: number;
  ratingCount: number;
  description: string;
  keywords: keywordTypes[];
};
type keywordTypes = {
  id: number;
  keyword: string;
};
export const SingleProduct = ({ product, store }: SingleProductProps) => {
  return (
    <div className="single-product-container">
      <div className="single-img-container">
      <ImageField
        src={`http://localhost:3000/${product?.image}`}
        alt=""
        className="single-product-img"
      />
      </div>
      <p className="single-product-name">{product?.name}</p>
      <div className="rating-container">
        <div className="single-rating-number">
          {product?.ratingStar} <BiSolidStar className="bsStar-icon"/>
        </div>
        <span>{product?.ratingCount}</span>
      </div>
      <div className="single-price-container">
        <span>₹</span>
        <span>{product?.priceIndia}</span>
      </div>
      <div className="single-quantity-conatiner">
        <span>Quantity:</span>
        <ProductCount />
      </div>
      <ButtonFiled content="Add To Cart" className="single-addToCart-button" />
      <div className="single-absolute">
        <AiFillHeart className="single-wishlist-img-true" />

        {/* <AiOutlineHeart className="single-wishlist-img" /> */}
      </div>
    </div>
  );
};

export default SingleProduct;