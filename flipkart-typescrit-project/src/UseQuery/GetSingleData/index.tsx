import { useQuery } from "@tanstack/react-query";
import { getSingleProductData } from "../../APIQueryFunction/SingleViewPageQuery/SingleProductQuery";

type GetSingleDataQueryPropsType = {
  id: number;
};

const GetSingleDataQuery = ({ id }: GetSingleDataQueryPropsType) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getSingleProductData", id],
    queryFn: () => getSingleProductData(id),
    enabled: id != null,
  });

  return { data, error, isLoading, refetch };
};

export default GetSingleDataQuery;
