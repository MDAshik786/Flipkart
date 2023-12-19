import ImageField from "../../../CommonUsedComponents/ImageField";
import { CartSingleProductProps } from "../../../Types";
import { BiSolidStar } from "react-icons/bi";
import ProductCount from "../../HomePage/ProductCount";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteAProduct,
  updateAProduct,
} from "../../../API Functions/CartPageAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { useState } from "react";
import { handleUpdateChange } from "../../../CommonFunctions/HandleFunction";
import { observer } from "mobx-react-lite";
import RatingContainer from "../../../CommonUsedComponents/Product/RatingContainer";
import PriceContainer from "../../../CommonUsedComponents/Product/PriceContainer";
import ImageConatiner from "../../../CommonUsedComponents/Product/ImageContainer";
import { useNavigate } from "react-router-dom";

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

    const { product } = products;

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const [updateState, setUpdateState] = useState<boolean>(false);

    const updateMutation = useMutation({
      mutationFn: (quantity: number) =>
        updateAProduct(product.id, quantity, userStore?.email),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getAllCartData"],
        });
      },
    });

    const deleteMutation = useMutation({
      mutationFn: () => deleteAProduct(products?.id, userStore.email),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getAllCartData"],
        });
      },
    });

    const handleSinglePage = () => {
      navigate("single", { state: product });
    };

    const ratingData = {
      ratingStar: product.ratingStar,
      content: "New Arrival",
      ratingCount: product.ratingCount,
      reviewCount: product.reviewCount,
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
              onClick={() =>
                !updateState
                  ? handleUpdateChange(updateState, setUpdateState)
                  : (updateMutation.mutate(
                      productCounterStore.getProductCounter[product?.id]
                    ),
                    handleUpdateChange(updateState, setUpdateState))
              }
            >
              {!updateState ? "Update" : "Save"}
            </h4>

            <h4
              className="cart-product-action"
              onClick={() =>
                updateState
                  ? handleUpdateChange(updateState, setUpdateState)
                  : deleteMutation.mutate()
              }
            >
              {!updateState ? "Delete" : "Cancel"}
            </h4>
          </div>
        </div>

        <p className="cart-deliver-date">Delivery by Tue Nov 28 | Free</p>
      </div>
    );
  }
);

export default CartSingleProduct;
