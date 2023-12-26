import axios from "axios";
import { getAllScrollingIamgesUrl } from "../../Utils_/APIUrls";
import { useQuery } from "@tanstack/react-query";

export const getAllScrollingImages = async () => {
  try {
    const response = await axios.get(getAllScrollingIamgesUrl);
    return response.data;
  } catch (error) {
    console.log(error, "error on getAllTagImages");
  }
};

const ScrollingImagesQuery = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getAllScrollingImages"],
    queryFn: () => getAllScrollingImages(),
  });
  return { data, error, isLoading, refetch };
};

export default ScrollingImagesQuery;
