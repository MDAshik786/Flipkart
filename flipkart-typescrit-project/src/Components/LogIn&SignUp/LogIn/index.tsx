import "./index.scss";
import img from "../../../Asserts/Images/flipkart-login.png";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useRef, useState } from "react";
import { handleOnChange } from "../../../CommonFunctions/HandleFunction";

const LogIn = () => {
  const [InputValues, setInputValues] = useState({
    email: "",
    password: "",
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
              <InputFiled type="text" className="login-email-container" name="email"  value={InputValues.email} onChange={(e) => handleOnChange(e, setInputValues)}/>
            </div>
            <div className="login-password-div">
              <label className="login-placeholder">Enter Your Password:</label>
              <InputFiled
                type="password"
                className="login-password-container"
                name="password"
                value={InputValues.password}
                onChange={(e) => handleOnChange(e, setInputValues)}
              />
            </div>
            <div className="agree-container">
              By continuing, you agree to Flipkart's{" "}
              <span className="blue-color">Terms of Use</span> and{" "}
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
