import axios from "axios";
import { updateAProductUrl } from "../../Utils_/APIUrls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../ContextHooks/UseStore";

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

const UpdateCartProductMutation = (id: number, quantity: number) => {
  const {
    rootStore: { userStore },
  } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => updateAProduct(id, quantity, userStore.email),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCartData"],
      });
    },
  });
};

export default UpdateCartProductMutation;
