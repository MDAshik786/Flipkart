import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginVerification } from "../../../API Functions/LogIn&SignInAPI";
import { formRightWrapperType } from "../../../Types";
import FormInputField from "../../../CommonUsedComponents/FormInputField";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { userDataVerication } from "../../../CommonFunctions/FormValidation";
import { observer } from "mobx-react-lite";

const AccountRightWrapper = ({
  InputErrorValues,
  handleLoginVerification,
  setStateFunction,
  isNewUser,
  inputData,
  handleSetStateOnChange,
  handleSetStateErrorOnChange,
}: formRightWrapperType) => {
  const loginData = [
    {
      divClassName: "form-email-div",
      labelClassName: "form-placeholder",
      labelContent: "Enter Your Email:",
      inputClassName: "form-email-container",
      type: "type",
      name: "email",
      value: inputData.email,
      onChange: handleSetStateOnChange,
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.emailError,
    },
    {
      divClassName: "form-password-div",
      labelClassName: "form-placeholder",
      labelContent: "Enter Your Password:",
      type: "password",
      inputClassName: "form-password-container",
      name: "password",
      value: inputData.password,
      onChange: handleSetStateOnChange,
      autoComplete: "off",
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.passwordError,
    },
  ];

  const signupData = [
    {
      divClassName: "form-name-div",
      labelClassName: "form-placeholder",
      labelContent: "Enter Your Name:",
      inputClassName: "form-name-container",
      type: "type",
      name: "name",
      value: inputData.name,
      onChange: handleSetStateOnChange,
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.nameError,
    },
    {
      divClassName: "form-phone-div",
      labelClassName: "form-placeholder",
      labelContent: "Enter Your Mobile Number:",
      type: "phone",
      inputClassName: "form-phone-container",
      name: "phone",
      value: inputData.phone,
      onChange: handleSetStateOnChange,
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.phoneError,
    },
  ];

  const queryClient = useQueryClient();

  const submitLoginVerification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isVerified = userDataVerication({
      inputData,
      handleSetStateErrorOnChange,
      isNewUser,
    });
    isVerified && loginVerificationMutation.mutate();
  };

  const loginVerificationMutation = useMutation({
    mutationFn: () => {
      const responseData = loginVerification({
        email: inputData.email,
        password: inputData.password,
      });
      responseData.then((response) => {
        handleLoginVerification({
          response,
          email: inputData.email,
          password: inputData.password,
        });
        // handleLoginVerifications({
        //   response,
        //   navigate,
        //   InputValues,
        //   setInputValues,
        //   user: userStore.setLoginUserData,
        //   email: emailInput.current?.value || "",
        //   password: passwordInput.current?.value || "",
        // });
      });
      return responseData;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      }),
  });
  
  return (
    <form onSubmit={submitLoginVerification} className="user-form">
      <div className="all-input-container">
        <FormInputField
          userData={isNewUser ? [...loginData, ...signupData] : loginData}
        />
        <div className="agree-container">
          By continuing, you agree to Flipkart's
          <span className="blue-color">Terms of Use </span> and
          <span className="blue-color">Privacy Policy. </span>
        </div>
        <ButtonFiled className="signup-button" content="SignUp" />
        {isNewUser && (
          <ButtonFiled
            className="newuser-button"
            content="Existing User? Log in"
            onClick={setStateFunction}
          />
        )}
      </div>
      {!isNewUser && (
        <h4 className="create-new-account" onClick={setStateFunction}>
          New to Flipkart? Create an account
        </h4>
      )}
    </form>
  );
};

export default observer(AccountRightWrapper)
