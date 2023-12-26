import { CartSingleProductProps } from "../../../Types";
import ProductCount from "../../HomePage/ProductCount";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../../ContextHooks/UseStore";
import { useState } from "react";
import { handleUpdateChange } from "../../../CommonFunctions/HandleFunction";
import { observer } from "mobx-react-lite";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import { useNavigate } from "react-router-dom";
import DeleteCartProductMutation from "../../../APIQueryFunction/CartQuery/DeleteCartProductMutation";
import AddToSaveForLaterMutaion from "../../../APIQueryFunction/SaveForLaterQuery/AddToSaveForLaterMutaion";
import UpdateCartProductMutation from "../../../APIQueryFunction/CartQuery/UpdateCartProductMutation";

const CartSingleProduct = observer(
  ({
    products,
    index,
    data,
    handleSetStateOnChange,
  }: CartSingleProductProps) => {
    const {
      rootStore: { productCounterStore, userStore },
    } = useStore();

    const { product, color, quantity } = products;

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const [updateState, setUpdateState] = useState<boolean>(false);

    const handleSinglePage = () => {
      navigate("single", { state: product });
    };
    const { ratingCount, ratingStar, reviewCount } = product;

    const ratingData = {
      ratingStar,
      content: "New Arrival",
      ratingCount,
      reviewCount,
    };

    const imageData = {
      product,
      onclick: handleSinglePage,
      color: products.color,
    };

    const handleDragStart = (
      event: React.DragEvent<HTMLDivElement>,
      index: number
    ) => {
      console.log(index, "dragStart");
      handleSetStateOnChange(index);
    };

    const handleDraggableDrop = (
      event: React.DragEvent<HTMLDivElement>,
      index: number
    ) => {
      console.log(data, index, "draggerEnd");
    };

    const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };

    const deleteProductMutation = DeleteCartProductMutation(
      products.id,
      userStore.email
    );

    const updateAProductMutation = UpdateCartProductMutation(
      product.id,
      productCounterStore.getProductCounter[product.id]
    );

    const addToSaveForLaterData = {
      email: userStore.email,
      productId: product.id,
      quantity,
      defaultValue: 1,
      color,
    };
    const addToSaveForLaterFunction = AddToSaveForLaterMutaion(
      addToSaveForLaterData
    );

    const handleSaveForLaterFunction = () => {
      addToSaveForLaterFunction.mutateAsync();
      deleteProductMutation.mutateAsync();
    };

    return (
      <div
        className="cart-product-allData"
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleDraggableDrop(e, index)}
        onDragOver={handleOnDragOver}
      >
        <ImageConatiner imageData={imageData} />
        <div className="cart-product-details">
          <p className="cart-product-name">{product?.name}</p>
          <RatingContainer ratingData={ratingData} />

          <PriceContainer product={product} />
          <div className="cart-product-about-container">
            <h4>About :</h4> <p>{product?.description}</p>
          </div>
          <div className="single-quantity-conatiner">
            <h4>Quantity :</h4>
            {!updateState ? (
              <span>{products.quantity}</span>
            ) : (
              <ProductCount
                product={products.product}
                quantity={products.quantity}
              />
            )}
          </div>
          <div className="cart-product-action-container">
            <h4
              className="cart-product-action"
              onClick={handleSaveForLaterFunction}
            >
              SAVE FOR LATER
            </h4>
            <h4
              className="cart-product-action"
              onClick={() =>
                !updateState
                  ? handleUpdateChange(updateState, setUpdateState)
                  : (updateAProductMutation.mutateAsync(),
                    handleUpdateChange(updateState, setUpdateState))
              }
            >
              {!updateState ? "UPDATE" : "SAVE"}
            </h4>

            <h4
              className="cart-product-action"
              onClick={() =>
                updateState
                  ? handleUpdateChange(updateState, setUpdateState)
                  : deleteProductMutation.mutateAsync()
              }
            >
              {!updateState ? "DELETE" : "CANCEL"}
            </h4>
          </div>
        </div>

        <p className="cart-deliver-date">Delivery by Tue Nov 28 | Free</p>
      </div>
    );
  }
);

export default CartSingleProduct;
