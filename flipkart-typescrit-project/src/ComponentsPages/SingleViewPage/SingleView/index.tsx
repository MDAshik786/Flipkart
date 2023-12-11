import "./index.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ProductCount from "../../HomePage/ProductCount";
import fkAssured from "../../../Asserts/Images/fk-assured.png";
import RatingAndReview from "../Rating";
import { SingleProduct } from "../../../Types";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import { useStore } from "../../../ContextHooks/UseStore";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";
import { useQuery } from "@tanstack/react-query";
import { getSingleProductData } from "../../../API Functions/SinglePageAPI";
import { useEffect } from "react";
import { getSingleProductDataUrl } from "../../../Utils_/APIUrls";

const SingleView = () => {
  const location = useLocation();
  let id: number | undefined = undefined;
  useEffect(() => {
    id = location.state.id;
    console.log(id);
  }, []);

  const {
    rootStore: { productImageStore },
  } = useStore();
    
  const {
    data: getSingleData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getSingleProductData"],
    queryFn: () => getSingleProductData(id),
    enabled: id,
  });
  const product = getSingleData?.product;
  const color =
    productImageStore?.productImages[id || 0] ||
    product?.productImages[0]?.color;
  console.log(product, "product");

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
        {/* <RatingAndReview data={getSingleData} /> */}
      </div>
    </div>
  );
};

export default SingleView;
