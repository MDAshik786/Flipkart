import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getspecificWishListProductUrl } from "../../Utils_/APIUrls";
import { useEffect } from "react";
import { useStore } from "../../ContextHooks/UseStore";

export const getSpecificWhishListProduct = async (email: string) => {
  if (email) {
    try {
      const response = await axios.get(
        `${getspecificWishListProductUrl}/${email}`
      );
      return response.data;
    } catch (e) {
      console.log(e, "getSpecificWhishListProduct");
    }
  } else return [];
};

const SpecificWishListQuery = (email: string) => {

const {rootStore : {wishListStore}} = useStore()

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getSpecificIdWishListProduct"],
    queryFn: () => getSpecificWhishListProduct(email),
  });

  useEffect(() => {
    wishListStore.setFunctionSpecifcProduct(data || []);
  }, [(data || []).length ]);

  return { data, error, isLoading, refetch };
};

export default SpecificWishListQuery;
