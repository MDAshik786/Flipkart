import axios from "axios";
import { displayEmail } from "../../CommonFunctions/LoginVerification";
import {
  deleteAProductUrl,
  getAllCartProductUrl,
  updateAProductUrl,
} from "../../Utils_/APIUrls";

const email = displayEmail();

export const getAllCartData = async () => {
  try {
    const response = await axios.get(`${getAllCartProductUrl}/${email}`);
    return response.data;
  } catch (error) {
    console.log(error, "getAllCartData");
  }
};

export const updateAProduct = async (id: number, quantity: number) => {
  try {
    const response = await axios.put(
      `${updateAProductUrl}/${email}`,
      { productId: id, quantity },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e, "addToCart Error");
  }
};

export const deleteAProduct = async (productId: number) => {
  try {
    const response = await axios.delete(
      `${deleteAProductUrl}/${productId}/${email}`
    );
  } catch (e) {
    console.log(e);
  }
};
