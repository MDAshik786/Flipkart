import "./index.scss";
import img from "../../../Asserts/Images/flipkart-login.png";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import React, { useRef, useState } from "react";
import {
  handleLoginVerification,
  handleOnChange,
} from "../../../CommonFunctions/HandleFunction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginVerification } from "../../../API Functions/LogIn&SignInAPI";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../ContextHooks/UseStore";

const LogIn = () => {
  const [InputValues, setInputValues] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });

  const {
    rootStore: { userStore },
  } = useStore();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const submitLoginVerification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailInput?.current?.value, "eeeee");
    console.log(passwordInput?.current?.value);

    userStore.setLoginUserData({
      email: emailInput?.current?.value || "",
      password: passwordInput?.current?.value || "",
    });
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const loginVerificationMutation = useMutation({
    mutationFn: () => {
      const responseData = loginVerification(InputValues);
      responseData.then((response) => {
        handleLoginVerification({
          response,
          navigate,
          InputValues,
          setInputValues,
          user : userStore.setLoginUserData,
        });
      });
      return responseData;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getSpecificIdWishListProduct"],
      }),
  });

  return (
    <div className="main-div">
      <div className="login-main-container">
        <div className="login-left-container">
          <span className="login-heading">Login</span>
          <p className="login-left-content">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img src={img} alt="" className="img" />
        </div>
        <form onSubmit={submitLoginVerification}>
          <div className="login-right-container">
            <div className="login-email-div">
              <label className="login-placeholder">Enter Your Email:</label>
              <InputFiled
                type="text"
                className="login-email-container"
                name="email"
                value={InputValues.email}
                onChange={(e) => handleOnChange(e, setInputValues)}
                ref={emailInput}
              />
              <span>{InputValues.emailError}</span>
            </div>
            <div className="login-password-div">
              <label className="login-placeholder">Enter Your Password:</label>
              <InputFiled
                type="password"
                className="login-password-container"
                name="password"
                value={InputValues.password}
                onChange={(e) => handleOnChange(e, setInputValues)}
                autoComplete="off"
                ref={passwordInput}
              />
              <span>{InputValues.passwordError}</span>
            </div>
            <div className="agree-container">
              By continuing, you agree to Flipkart's
              <span className="blue-color">Terms of Use</span> and
              <span className="blue-color">Privacy Policy.</span>
            </div>
            <ButtonFiled className="Login-button" content="LogIn" />
            <p className="create-new-account">
              New to Flipkart? Create an account
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
