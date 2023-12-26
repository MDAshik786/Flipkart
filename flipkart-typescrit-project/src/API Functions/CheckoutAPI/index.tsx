import axios from "axios";
import {
  deleteCheckoutDataUrl,
  getAllCheckoutDataUrl,
  postAllCheckoutDataUrl,
  updateCheckoutDataUrl,
} from "../../Utils_/APIUrls";
import { toJS } from "mobx";
import { cartStoreType } from "../../Types/StoreType";
import { CartSingleProducts, SingleProduct } from "../../Types";
import { postAllcheckoutDataType } from "../../Types/CheckoutType";

//Get Checkout API

export const getAllCheckoutDataAPI = async (email: string) => {
  try {
    const response = await axios.get(`${getAllCheckoutDataUrl}/${email}`);
    console.log(response.data, "getAllCheckoutDataAPI Functions");
    return response.data;
  } catch (e) {
    console.log(e, "getAllCheckoutData");
  }
};

//Post Checkout API

export const postAllcheckoutDataAPI = async (
  state: cartStoreType,
  email: string
) => {
  const data: postAllcheckoutDataType[] = [];
  state.cartItems.map((cartData: CartSingleProducts, index: number) => {
    const obj = {
      prodId: cartData.product.id,
      quantity: cartData.quantity,
      email,
      color: cartData.color,
    };
    data.push(obj);
  });

  try {
    const response = await axios.post(postAllCheckoutDataUrl, data, {
      headers: {
        "content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error, "postAllcheckoutData");
  }
};

//Update Checkout API

export const updateCheckoutAPI = async (
  email: string,
  id: number,
  quantity: number
) => {
  console.log(id, quantity,  `${updateCheckoutDataUrl}/${email}/${id}/${quantity}`);
  try {
    const response = await axios.put(
      `${updateCheckoutDataUrl}/${email}/${id}/${quantity}`
    );
  } catch (error) {
    console.log(error, "updateCheckoutAPI");
  }
};

//Delete Checkout API

export const deleteCheckoutAPI = async (email: string, id: number) => {
  try {
    const response = await axios.delete(
      `${deleteCheckoutDataUrl}/${email}/${id}`
    );
  } catch (error) {
    console.log(error, "deleteCheckoutAPI");
  }
};
