import axios from "axios";
import {
  deleteAProductUrl,
  getAllCartProductUrl,
  updateAProductUrl,
} from "../../Utils_/APIUrls";

export const email = "rioashik786@gmail.com";

export const getAllCartData = async () => {
  try {
    const response = await axios.get(getAllCartProductUrl);
    return response.data;
  } catch (error) {
    console.log(error, "getAllCartData");
  }
};

export const updateAProduct = async (id: number, quantity: number) => {
  
  try {
    const response = await axios.put(
      updateAProductUrl,
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
