import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAllTopRelatedTagsUrl } from "../../Utils_/APIUrls";

export const getAllTagImages = async () => {
  try {
    const response = await axios.get(getAllTopRelatedTagsUrl);
    return response.data;
  } catch (error) {
    console.log(error, "error on getAllTagImages");
  }
};

const TagImagesQuery = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getAllTagImages"],
    queryFn: () => getAllTagImages(),
  });
  return { data, error, isLoading, refetch };
};

export default TagImagesQuery;
