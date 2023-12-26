import "./index.scss";
import { useNavigate } from "react-router-dom";
import ImageConatiner from "../../../../CommonUsedComponents/Product/ImageContainer";
import { orderSummaryMapType } from "../../../../Types";
import RatingContainer from "../../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../../CommonUsedComponents/Product/PriceContainer";
import ProductCount from "../../../HomePage/ProductCount";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import UpdateProductQuery from "../../../../APIQueryFunction/CheckoutQuery/UpdateProductQuery";
import DeleteProductQuery from "../../../../APIQueryFunction/CheckoutQuery/DeleteProductQuery";

const SingleProduct = observer(({ data }: orderSummaryMapType) => {
  const { product, color } = data;
  const {
    rootStore: { userStore },
  } = useStore();
  const navigate = useNavigate();

  const handleSinglePage = () => {
    navigate("/single");
  };



  const updateCheckoutMutation = UpdateProductQuery()

  const deleteCheckoutMutation = DeleteProductQuery()

  const imageData = {
    product,
    onclick: handleSinglePage,
    color: color,
  };
  const ratingData = {
    ratingStar: product.ratingStar,
    content: "New Arrival",
    ratingCount: product.ratingCount,
    reviewCount: product.reviewCount,
  };

  return (
    <div className="product">
      <div className="img-container">
        <ImageConatiner imageData={imageData} />
        <ProductCount
          product={product}
          quantity={data.quantity}
          quantityApiFunction={updateCheckoutMutation}
          id={data.id}
        />
      </div>
      <div className="product-details">
        <p>{product.name}</p>
        <RatingContainer ratingData={ratingData} />
        <PriceContainer product={product} />
        <div className="cart-product-about-container">
          <h4>About :</h4> <p>{product?.description}</p>
        </div>
      </div>
      <p className="delivery-date">Delivery by Sun Dec 17 | Free</p>
    </div>
  );
});

export default SingleProduct;
