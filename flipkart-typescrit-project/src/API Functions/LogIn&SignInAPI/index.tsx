import axios from "axios";
import { loginVerificationUrl, signupApiUrl } from "../../Utils_/APIUrls";
import { inputDataOptionalType } from "../../Types";

export const loginVerification = async (state: inputDataOptionalType) => {
  try {
    const response = await axios.post(
      loginVerificationUrl,
      {
        email: state.email,
        password: state.password,
      },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e, "loginVerification");
  }
};

export const signUpVerification = async (state: inputDataOptionalType) => {
  try {
    const response = await axios.post(
      signupApiUrl,
      {
        email: state.email,
        password: state.password,
        name: state?.name,
        phone: state?.phone,
      },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e, "signUpVerification ");
  }
};
