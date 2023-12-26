import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { formRightWrapperType } from "../../../Types";
import FormInputField from "../../../CommonUsedComponents/FormInputField";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { userDataVerication } from "../../../CommonFunctions/FormValidation";
import { observer } from "mobx-react-lite";
import formContent from "../../../Utils_/helpers/user.json";
import { singleUserDataType } from "../../../Types/UserAccontType";
import UserVerificationMutation from "../../../APIQueryFunction/UserVerificationQuery/UserVerificationMutation";

const AccountRightWrapper = ({
  InputErrorValues,
  handleLoginVerification,
  setStateFunction,
  isNewUser,
  inputData,
  handleSetStateOnChange,
  handleSetStateErrorOnChange,
}: formRightWrapperType) => {
  const { signUp, agreeStatement, labelAndInputNames } = formContent;
  const { newUser } = signUp;
  const { content, firstPoint, andContent, secondPoint } = agreeStatement;
  const {
    emailInputName,
    emailLabelName,
    passwordInputName,
    passwordLabelName,
    nameInputName,
    nameLabelName,
    phoneInputName,
    phoneLabelName,
  } = labelAndInputNames;

  const loginData: singleUserDataType[] = [
    {
      divClassName: "form-email-div",
      labelClassName: "form-placeholder",
      labelContent: emailLabelName,
      inputClassName: "form-email-container",
      type: "text",
      name: emailInputName,
      value: inputData.email,
      onChange: handleSetStateOnChange,
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.emailError,
    },
    {
      divClassName: "form-password-div",
      labelClassName: "form-placeholder",
      labelContent: passwordLabelName,
      type: "password",
      inputClassName: "form-password-container",
      name: passwordInputName,
      value: inputData.password,
      onChange: handleSetStateOnChange,
      autoComplete: "off",
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.passwordError,
    },
  ];

  const signupData: singleUserDataType[] = [
    {
      divClassName: "form-name-div",
      labelClassName: "form-placeholder",
      labelContent: nameLabelName,
      inputClassName: "form-name-container",
      type: "text",
      name: nameInputName,
      value: inputData.name,
      onChange: handleSetStateOnChange,
      spanClassName: "error-msg",
      errorMessage: InputErrorValues.nameError,
    },
    {
      divClassName: "form-phone-div",
      labelClassName: "form-placeholder",
      labelContent: phoneLabelName,
      type: "number",
      inputClassName: "form-phone-container",
      name: phoneInputName,
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

  const loginVerificationMutationData = {
    isNewUser,
    inputData,
    handleLoginVerification,
  };

  const loginVerificationMutation = UserVerificationMutation(
    loginVerificationMutationData
  );

  return (
    <form onSubmit={submitLoginVerification} className="user-form">
      <div className="all-input-container">
        <FormInputField
          userData={isNewUser ? [...loginData, ...signupData] : loginData}
        />
        <div className="agree-container">
          {content}
          <span className="blue-color">{firstPoint} </span> {andContent}
          <span className="blue-color">{secondPoint} </span>
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
          {newUser}
        </h4>
      )}
    </form>
  );
};

export default observer(AccountRightWrapper);
