import axios from "axios";
import { cartStoreType } from "../../Types/StoreType";
import { postAllcheckoutDataType } from "../../Types/CheckoutType";
import { CartSingleProducts } from "../../Types";
import { postAllCheckoutDataUrl } from "../../Utils_/APIUrls";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "../../ContextHooks/UseStore";

//Post Checkout API

export const postAllcheckoutDataAPI = async (
  state: cartStoreType,
  email: string
) => {
  const data: postAllcheckoutDataType[] = [];
  state.cartItems.map((cartData: CartSingleProducts, index: number) => {
    const obj = {
      prodId: cartData.product.id,
      quantity: cartData.quantity,
      email,
      color: cartData.color,
    };
    data.push(obj);
  });
  try {
    const response = await axios.post(postAllCheckoutDataUrl, data, {
      headers: {
        "content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error, "postAllcheckoutData");
  }
};

const AddACheckoutProductMutation = () => {
  const {
    rootStore: { cartStore, userStore },
  } = useStore();

  return useMutation({
    mutationFn: () =>
      postAllcheckoutDataAPI(cartStore.allCartProducts, userStore.email),
  });
};

export default AddACheckoutProductMutation;
