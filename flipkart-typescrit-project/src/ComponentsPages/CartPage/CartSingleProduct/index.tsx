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

const CartSingleProduct = ({ products }: CartSingleProductProps) => {
  const {
    rootStore: { productCounterStore },
  } = useStore();

  const { product } = products;

  const queryClient = useQueryClient();

  const [updateState, setUpdateState] = useState<boolean>(false);

  const updateMutation = useMutation({
    mutationFn: (quantity: number) => updateAProduct(product.id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCartData"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteAProduct(products?.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCartData"],
      });
    },
  });

  return (
    <div className="cart-product-allData">
      <div className="cart-product-img-container">
        <ImageField
          src={`http://localhost:3000/${product?.image}`}
          className="cart-product-img"
          alt=""
        />
      </div>
      <div className="cart-product-details">
        <p className="cart-product-name">{product?.name}</p>
        <div className="rating-container">
          <div className="single-rating-number">
            {product?.ratingStar} <BiSolidStar className="bsStar-icon" />
          </div>
          <span>{product?.ratingCount} rating</span>
        </div>

        <div className="single-price-container">
          <span className="₹">₹</span>
          <h4>{product?.priceIndia}</h4>
        </div>
        <div className="cart-product-about-container">
          <h4>About:</h4> <p>{product?.description}</p>
        </div>
        <div className="single-quantity-conatiner">
          <h4>Quantity:</h4>
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
};

export default CartSingleProduct;
