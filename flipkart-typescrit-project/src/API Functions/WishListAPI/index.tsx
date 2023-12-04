import {SingleProduct } from "../../Types";
import {
  addToWishListUrl,
  deleteWishListProductUrl,
  getAllWishListProductUrl,
  getspecificWishListProductUrl,
} from "../../Utils_/APIUrls";
import { email } from "../CartPageAPI";
import axios from "axios";

export const getSpecificWhishListProduct = async () => {
  try {
    const response = await axios.get(
      `${getspecificWishListProductUrl}/${email}`
    );
    return response.data;
  } catch (e) {
    console.log(e, "getSpecificWhishListProduct");
  }
};

export const getAllWhishListProduct = async () => {
  try {
    const response = await axios.get(`${getAllWishListProductUrl}/${email}`);
    //  console.log(response.data, "getAllWhishListProduct")
    return response.data;
  } catch (e) {
    console.log(e, "getAllWhishListProduct");
  }
};

export const AddToWishList = async (product: SingleProduct) => {
  const {
    id,
    name,
    image,
    priceCents,
    priceIndia,
    totalQuantity,
    ratingStar,
    ratingCount,
    description,
    size,
  } = product;
  try {
    const response = await axios.post(
      `${addToWishListUrl}/${email}/${id}`,
      {
        id,
        name,
        image,
        priceCents,
        priceIndia,
        totalQuantity,
        ratingStar,
        ratingCount,
        description,
        size,
      },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e, "AddToWishList");
  }
};

export const deleteFromWishList = async (id: number) => {
  try {
    const response = await axios.delete(
      `${deleteWishListProductUrl}/${email}/${id}`
    );
  } catch (e) {
    console.log(e, "deleteFromWishList Error");
  }
};
