import "./index.scss";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ProductCount from "../../HomePage/ProductCount";
import fkAssured from "../../../Asserts/Images/fk-assured.png";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import { useStore } from "../../../ContextHooks/UseStore";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";
import { RatingObjectProps } from "../../../Types";

export type singleViewProductType = {
  children: React.ReactNode;
  data: RatingObjectProps;
};
const SingleViewProductDetails = ({
  children,
  data,
}: singleViewProductType) => {
  const {
    rootStore: { productImageStore },
  } = useStore();

  const { product } = data;
  const color =
    productImageStore?.productImages[product.id || 0] ||
    product?.productImages[0]?.color;

  const imageData = {
    product,
    color,
  };

  const ratingData = {
    ratingStar: product?.ratingStar,
    content: "New Arrival",
    ratingCount: product?.ratingCount,
    reviewCount: product?.reviewCount,
  };

  return (
    <div className="singleview">
      <div className="singleview-left">
        <ImageConatiner imageData={imageData} />
        <div className="button-container">
          <ButtonFiled content="add to cart" className="addtocart-button" />
          <ButtonFiled content="buy now" className="buynow-button" />
        </div>
      </div>
      <div className="singleview-right">
        <p className="single-product-namee">{product?.name}</p>
        <RatingContainer ratingData={ratingData} />
        <div>
          <ImageField
            src={fkAssured}
            alt="flipKart Assured"
            className="assured-img"
          />
        </div>
        <PriceContainer product={product} />
        <div className="ruppee-meassage">Convert into US dollar.</div>
        <div className="single-quantity-conatiner">
          <h4>Quantity:</h4>
          <ProductCount product={product} />
        </div>
        <div className="single-product-about">
          <h4 className="about">About:</h4>
          <p>{product?.description}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SingleViewProductDetails;
