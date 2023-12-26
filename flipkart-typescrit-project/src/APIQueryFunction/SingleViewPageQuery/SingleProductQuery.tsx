import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSingleProductDataUrl } from "../../Utils_/APIUrls";

export const getSingleProductData = async (id: number | undefined) => {
  if (id) {
    try {
      const response = await axios.get(`${getSingleProductDataUrl}/${id}`);
      //   console.log(response.data, id, "aaaaa")
      return response.data;
    } catch (e) {
      console.log(e, "getSingleProductData");
    }
  }
};

const SingleProductQuery = (id: number | undefined) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getSingleProductData", id],
    queryFn: () => getSingleProductData(id),
    enabled: id !== undefined,
  });

  return { data, isLoading, error, refetch };
};

export default SingleProductQuery;
