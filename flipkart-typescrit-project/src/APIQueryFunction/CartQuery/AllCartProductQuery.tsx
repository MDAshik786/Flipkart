import axios from "axios";
import { getAllCartProductUrl } from "../../Utils_/APIUrls";
import { useEffect } from "react";
import { useStore } from "../../ContextHooks/UseStore";
import { useQuery } from "@tanstack/react-query";

export const getAllCartDataFunction = async (email: string) => {
  if (email) {
    try {
      const response = await axios.get(`${getAllCartProductUrl}/${email}`);
      return response.data;
    } catch (error) {
      console.log(error, "getAllCartData");
    }
  }
  return [];
};

const AllCartProductQuery = () => {
  const {
    rootStore: { userStore, cartStore },
  } = useStore();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getAllCartData"],
    queryFn: () => getAllCartDataFunction(userStore?.email),
  });

  useEffect(() => {
    cartStore.setAllCartProducts(data);
  }, [data]);

  return { data, isLoading, error, refetch };
};

export default AllCartProductQuery;
