import axios from "axios";
import {
  addAProductToCartUrl,
  getAllProductUrl,
  getAllScrollingIamgesUrl,
  getAllTopRelatedTagsUrl,
} from "../../Utils_/APIUrls";

export const getAllTagImages = async () => {
  try {
    const response = await axios.get(getAllTopRelatedTagsUrl);
    return response.data;
  } catch (error) {
    console.log(error, "error on getAllTagImages");
  }
};

export const getAllScrollingImages = async () => {

  try {
    const response = await axios.get(getAllScrollingIamgesUrl);
    return response.data;
  } catch (error) {
    console.log(error, "error on getAllTagImages");
  }
};

export const getAllProduct = async () => {
  try {
    const response = await axios.get(getAllProductUrl);
    return response.data;
  } catch (error) {
    console.log(error, "error on getAllTagImages");
  }
};

export const addAProductToCart = async (
  productId: number,
  productQuantity: number | undefined,
  color : string,
  email : string
) => {
  let quantity = 1;
  if (productQuantity) quantity = productQuantity;
  try {
    const response = await axios.post(
      `${addAProductToCartUrl}/${email}`,
      { productId, quantity, color },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error, "addAProductToCart");
  }
};
