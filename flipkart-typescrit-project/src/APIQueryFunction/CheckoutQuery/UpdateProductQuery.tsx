import axios from "axios";
import { updateCheckoutDataUrl } from "../../Utils_/APIUrls";
import { useStore } from "../../ContextHooks/UseStore";
import { updateCheckoutMutationType } from "../../Types/CheckoutType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//Update Checkout API

export const updateCheckoutAPI = async (
  email: string,
  id: number,
  quantity: number
) => {
  try {
    const response = await axios.put(
      `${updateCheckoutDataUrl}/${email}/${id}/${quantity}`
    );
  } catch (error) {
    console.log(error, "updateCheckoutAPI");
  }
};

const UpdateProductQuery = () => {
  const {
    rootStore: { userStore },
  } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, quantity }: updateCheckoutMutationType) =>
      updateCheckoutAPI(userStore.email, id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCheckoutData"],
      });
    },
    onError: () => console.log("getAllCheckoutData error"),
  });
};

export default UpdateProductQuery;
