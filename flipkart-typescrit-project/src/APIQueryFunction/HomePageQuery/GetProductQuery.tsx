import axios from "axios";
import { getAllProductUrl } from "../../Utils_/APIUrls";
import { useQuery } from "@tanstack/react-query";

export const getAllProduct = async () => {
  try {
    const response = await axios.get(getAllProductUrl);
    return response.data;
  } catch (error) {
    console.log(error, "error on getAllTagImages");
  }
};

const GetProductQuery = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: () => getAllProduct(),
  });

  return { data, error, isLoading, refetch };
};

export default GetProductQuery;
