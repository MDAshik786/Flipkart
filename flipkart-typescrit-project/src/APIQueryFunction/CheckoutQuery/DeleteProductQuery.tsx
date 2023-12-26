import axios from "axios";
import { deleteCheckoutDataUrl } from "../../Utils_/APIUrls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../ContextHooks/UseStore";

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

const DeleteProductQuery = () => {
  const {
    rootStore: { userStore },
  } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteCheckoutAPI(userStore.email, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCheckoutData"],
      });
    },
  });
};

export default DeleteProductQuery;
