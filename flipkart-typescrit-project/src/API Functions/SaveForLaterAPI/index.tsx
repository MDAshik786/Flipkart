import axios from "axios";
import {
  getAllSaveForLaterDataUrl,
  postSaveForLaterUrl,
} from "../../Utils_/APIUrls";

//Post SaveForLater
export type PostSaveForLaterDataTye = {
  email: string;
  productId: number;
  qunatity: number;
  defaultValue: number;
};

export const postSaveForLaterAPI = async (data: PostSaveForLaterDataTye) => {
  const { email, productId, qunatity, defaultValue } = data;
  try {
    const response = await axios.post(
      `${postSaveForLaterUrl}/${email}`,
      {
        productId,
        qunatity,
        defaultValue,
      },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error, "postSaveForLaterAPIError");
  }
};

//Get SaveForLater

export const getAllSaveLaterAPI = async (email : string) => {
  try {
    const response = await axios.get(`${getAllSaveForLaterDataUrl}/${email}`);
    return response.data;
  } catch (error) {
    console.log(error, "getAllSaveLaterAPIError");
  }
};
