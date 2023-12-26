import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAllSaveForLaterDataUrl } from "../../Utils_/APIUrls";
import { useStore } from "../../ContextHooks/UseStore";

//Get SaveForLater

export const getAllSaveLaterAPI = async (email: string) => {
  try {
    const response = await axios.get(`${getAllSaveForLaterDataUrl}/${email}`);
    return response.data;
  } catch (error) {
    console.log(error, "getAllSaveLaterAPIError");
  }
};

const SaveForLaterQuery = () => {
  const {
    rootStore: { userStore },
  } = useStore();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getSaveForLaterQueryKey"],
    queryFn: () => getAllSaveLaterAPI(userStore.email),
  });

  return { data, isLoading, error, refetch };
};

export default SaveForLaterQuery;
