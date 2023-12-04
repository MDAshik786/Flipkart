import "./index.scss";
import img from "../../../Asserts/Images/flipkart-login.png";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useState } from "react";
import { handleLoginVerification, handleOnChange } from "../../../CommonFunctions/HandleFunction";
import { useMutation } from "@tanstack/react-query";
import { loginVerification } from "../../../API Functions/LogIn&SignInAPI";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  const [InputValues, setInputValues] = useState({
    email: "",
    password: "",
    emailError : '',
    passwordError : ''
  });

  const navigate = useNavigate();

  const loginVerificationMutation = useMutation({
    mutationFn: () => { const responseData = loginVerification(InputValues)
      responseData.then((response) => {
        handleLoginVerification({response, navigate, InputValues, setInputValues})
      });      
      return responseData
    }
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
        <form>
          <div className="login-right-container">
            <div className="login-email-div">
              <label className="login-placeholder">Enter Your Email:</label>
              <InputFiled
                type="text"
                className="login-email-container"
                name="email"
                value={InputValues.email}
                onChange={(e) => handleOnChange(e, setInputValues)}
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
              />
              <span>{InputValues.passwordError}</span>
            </div>
            <div className="agree-container">
              By continuing, you agree to Flipkart's
              <span className="blue-color">Terms of Use</span> and
              <span className="blue-color">Privacy Policy.</span>
            </div>
            <ButtonFiled className="Login-button" content="LogIn" onClick={() => loginVerificationMutation.mutate()}  type="button"/>
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
