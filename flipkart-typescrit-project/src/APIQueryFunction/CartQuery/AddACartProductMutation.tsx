import axios from "axios";
import { addAProductToCartUrl } from "../../Utils_/APIUrls";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const addAProductToCart = async (
  productId: number,
  productQuantity: number | undefined,
  color: string,
  email: string
) => {
  let quantity = 1;
  if (productQuantity) quantity = productQuantity;
  try {
    await axios.post(
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

const AddACartProductMutation = (
  id: number,
  quantity: number,
  color: string,
  email: string
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await addAProductToCart(id, quantity, color, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCartData"],
      });
    },
  });
};

export default AddACartProductMutation;
