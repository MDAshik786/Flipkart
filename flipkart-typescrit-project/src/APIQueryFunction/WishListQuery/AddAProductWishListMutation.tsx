import axios from "axios";
import { addToWishListUrl } from "../../Utils_/APIUrls";
import { SingleProduct } from "../../Types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../ContextHooks/UseStore";

export const AddToWishList = async (
  product: SingleProduct,
  email: string,
  color: string
) => {
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
    productImages,
  } = product;
  try {
    const response = await axios.post(
      `${addToWishListUrl}`,
      {
        productDTO: {
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
          productImages,
        },
        email,
        productId: id,
        color,
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

const AddAProductWishListMutation = (product: SingleProduct, color: string) => {
  const {
    rootStore: { userStore },
  } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => AddToWishList(product, userStore.email, color),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      });
    },
  });
};

export default AddAProductWishListMutation;
