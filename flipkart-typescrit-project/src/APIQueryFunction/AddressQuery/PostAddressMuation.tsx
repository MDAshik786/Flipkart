import axios from "axios";
import { addressAPIUrl } from "../../Utils_/APIUrls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../ContextHooks/UseStore";
import { checkoutStateDataType } from "../../Types";

//Address POST API

export const postAddressAPI = async (
  inputData: checkoutStateDataType,
  email: string
) => {
  console.log(inputData, email);
  const {
    name,
    phone,
    pincode,
    landmark,
    address,
    locality,
    cityDistrict,
    chooseAddress,
    state,
    defaultAddress,
  } = inputData;
  try {
    const response = await axios.post(
      `${addressAPIUrl}/${email}`,
      {
        country: "india",
        name,
        phone,
        pincode,
        flat: address,
        area: locality,
        landmark,
        city: cityDistrict,
        state,
        defaultValue: defaultAddress,
      },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    console.log(response.data, "postAddressAPI");
  } catch (e) {
    console.log(e, "postAddressAPI");
  }
};

const PostAddressMuation = (inputData: checkoutStateDataType) => {
  const {
    rootStore: { userStore },
  } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postAddressAPI(inputData, userStore?.email),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getAllDeliveryAddress"],
      }),
  });
};

export default PostAddressMuation;
