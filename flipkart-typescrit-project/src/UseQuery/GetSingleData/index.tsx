import { useQuery } from "@tanstack/react-query";
import { getSingleProductData } from "../../API Functions/SinglePageAPI";

type GetSingleDataQueryPropsType = {
  id: number;
};

const GetSingleDataQuery = ({id} : GetSingleDataQueryPropsType) => {
 console.log(id,"iiii")
  const {
    data,
    error,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["getSingleProductData", id],
    queryFn: () => getSingleProductData(id),
    enabled: id != null,
  });

  return {data, error, isLoading, refetch}
};

export default GetSingleDataQuery;
