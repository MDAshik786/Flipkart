import axios from "axios";
import { getAllWishListProductUrl } from "../../Utils_/APIUrls";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useStore } from "../../ContextHooks/UseStore";

export const getAllWhishListProduct = async (email: string) => {
  try {
    const response = await axios.get(`${getAllWishListProductUrl}/${email}`);
    return response.data;
  } catch (e) {
    console.log(e, "getAllWhishListProduct");
  }
};

const AllWishListQuery = (email: string) => {
  const {
    rootStore: { wishListStore },
  } = useStore();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["wishlistAllProduct"],
    queryFn: () => getAllWhishListProduct(email),
  });

  useEffect(() => {
    wishListStore.setFunctionAllWishlistProduct(data || []);
  }, [data]);
  return { data, isLoading, error, refetch };
};


export default AllWishListQuery;
