import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAProductUrl } from "../../Utils_/APIUrls";
import axios from 'axios'

export const deleteAProduct = async (productId: number, email: string) => {
  try {
    const response = await axios.delete(
      `${deleteAProductUrl}/${productId}/${email}`
    );
    console.log(response.data, "deleteAProduct")
  } catch (e) {
    console.log(e);
  }
};

const DeleteCartProductMutation = (id: number, email: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteAProduct(id, email),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCartData"],
      });
    },
  });
};

export default DeleteCartProductMutation;
