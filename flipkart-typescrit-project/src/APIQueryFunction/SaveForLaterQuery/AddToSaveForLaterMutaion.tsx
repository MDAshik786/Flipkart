import axios from "axios";
import { postSaveForLaterUrl } from "../../Utils_/APIUrls";
import { PostSaveForLaterDataTye } from "../../Types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const postSaveForLaterAPI = async (data: PostSaveForLaterDataTye) => {
  const { email, productId, quantity, defaultValue, color } = data;
  try {
    const response = await axios.post(
      `${postSaveForLaterUrl}/${email}`,
      {
        productId,
        quantity,
        defaultValue,
        color,
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

const AddToSaveForLaterMutaion = (data: PostSaveForLaterDataTye) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postSaveForLaterAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getSaveForLaterQueryKey"],
      });
    },
  });
};

export default AddToSaveForLaterMutaion;
