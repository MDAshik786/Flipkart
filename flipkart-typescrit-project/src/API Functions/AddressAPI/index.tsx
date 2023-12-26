import axios from "axios";
import { addressAPIUrl } from "../../Utils_/APIUrls";
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

export const getAllAddressAPI = async (email: string) => {
  try {
    const response = await axios.get(`${addressAPIUrl}/${email}`);
    // console.log(response.data, "getAllAddressAPI");
    return response.data;
  } catch (e) {
    console.log(e, "getAllAddressAPI");
  }
};
