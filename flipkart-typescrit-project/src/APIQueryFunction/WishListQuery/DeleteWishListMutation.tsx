import axios from "axios";
import { deleteWishListProductUrl } from "../../Utils_/APIUrls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../ContextHooks/UseStore";

export const deleteFromWishList = async (id: number, email: string) => {
  try {
    const response = await axios.delete(
      `${deleteWishListProductUrl}/${email}/${id}`
    );
    return response.data;
  } catch (e) {
    console.log(e, "deleteFromWishList Error");
  }
};

const DeleteWishListMutation = (id : number) => {

const { rootStore : {userStore} } = useStore();
const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteFromWishList(id, userStore?.email),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      }),
  })
};

export default DeleteWishListMutation;
