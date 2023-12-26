import axios from "axios";
import { useStore } from "../../ContextHooks/UseStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getAllCheckoutDataUrl } from "../../Utils_/APIUrls";

//Get Checkout API

export const getAllCheckoutDataAPI = async (email: string) => {
  try {
    const response = await axios.get(`${getAllCheckoutDataUrl}/${email}`);
    console.log(response.data, "getAllCheckoutDataAPI Functions");
    return response.data;
  } catch (e) {
    console.log(e, "getAllCheckoutData");
  }
};

const AllProductQuery = () => {
  const {
    rootStore: { userStore, checkoutStore },
  } = useStore();
  const { setCheckoutData } = checkoutStore;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getAllCheckoutData"],
    queryFn: () => getAllCheckoutDataAPI(userStore?.email),
  });

  useEffect(() => {
    setCheckoutData(data);
  }, [data]);

  return { data, error, isLoading, refetch };
};

export default AllProductQuery;
