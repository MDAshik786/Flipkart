import axios from "axios";
import {
  deleteAProductUrl,
  getAllCartProductUrl,
  updateAProductUrl,
} from "../../Utils_/APIUrls";

export const getAllCartData = async (email: string) => {
 if(email){
  try {
    const response = await axios.get(`${getAllCartProductUrl}/${email}`);
    return response.data;
  } catch (error) {
    console.log(error, "getAllCartData");
  }
 }
 return []
};

export const updateAProduct = async (
  id: number,
  quantity: number,
  email: string
) => {
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

export const deleteAProduct = async (productId: number, email: string) => {
  try {
    const response = await axios.delete(
      `${deleteAProductUrl}/${productId}/${email}`
    );
  } catch (e) {
    console.log(e);
  }
};
