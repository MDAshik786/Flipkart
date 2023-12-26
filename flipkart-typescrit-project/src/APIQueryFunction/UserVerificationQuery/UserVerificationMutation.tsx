import axios from "axios";
import { loginVerificationUrl, signupApiUrl } from "../../Utils_/APIUrls";
import { inputDataOptionalType } from "../../Types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserVerificationMutationType } from "../../Types/UserVerificationType";

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

const UserVerificationMutation = (data: UserVerificationMutationType) => {
  const { isNewUser, inputData, handleLoginVerification } = data;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      const responseData = isNewUser
        ? signUpVerification(inputData)
        : loginVerification(inputData);
      responseData.then((response) => {
        handleLoginVerification(response);
      });
      return responseData;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      }),
  });
};

export default UserVerificationMutation;
