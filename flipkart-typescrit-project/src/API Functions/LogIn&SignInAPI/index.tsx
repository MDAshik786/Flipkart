import axios from "axios";
import { loginVerificationUrl } from "../../Utils_/APIUrls";

type loginState = {
    email : string,
    password : string
}
export const loginVerification = async (state: loginState ) => {
    console.log(state,"aaa")
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
    return response.data
  } catch (e) {
    console.log(e, "loginVerification");
  }
};
