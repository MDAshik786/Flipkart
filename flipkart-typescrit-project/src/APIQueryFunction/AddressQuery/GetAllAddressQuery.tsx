import axios from "axios";
import { useStore } from "../../ContextHooks/UseStore";
import { useQuery } from "@tanstack/react-query";
import { addressAPIUrl } from "../../Utils_/APIUrls";

export const getAllAddressAPI = async (email: string) => {
  try {
    const response = await axios.get(`${addressAPIUrl}/${email}`);
    return response.data;
  } catch (e) {
    console.log(e, "getAllAddressAPI");
  }
};

const GetAllAddressQuery = () => {
  const {
    rootStore: { userStore },
  } = useStore();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getAllDeliveryAddress"],
    queryFn: () => getAllAddressAPI(userStore?.email),
  });

  return { data, error, isLoading, refetch };
};

export default GetAllAddressQuery;
