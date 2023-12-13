import "./index.scss";
import { GoVerified } from "react-icons/go";
import { FaTruck } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";

const LoginContainer = () => {
  return (
    <>
      <div className="login">
        <div className="login-verifed-container">
          <p className="row-number">1</p>
          <div className="login-name-details">
            <div className="login-name-container">
              <p className="login-heading">LOGIN</p>
              <GoVerified className="verified" />
            </div>
            <p className="login-name">Moahmed Ashik</p>
          </div>
        </div>
        <ButtonFiled content={"Change"} className="change-button" />
      </div>

      <div className="login-changes">
        <div className="login-top">
          <p className="row-number">1</p>
          <h4>LOGIN</h4>
        </div>
        <div className="login-changes-details">
          <div className="login-changes-details-left">
            <div className="flex-row">
              <span>Name</span>
              <span>Mohamed Ashik</span>
            </div>
            <div className="flex-row">
              <span>Email</span>
              <span>rioashik786@gmail.com</span>
            </div>
            <h5>Logout & Sign in to another account</h5>
            <ButtonFiled
              content={"CONTINUE CHECKOUT"}
              className="continue-checkout-button"
            />
          </div>
          <div className="login-changes-details-right">
            <p>Advantage Of our secure Login </p>
            <div className="flex-row">
              <FaTruck />
              <p>Easily Track Orders, Hassle free Returns</p>
            </div>
            <div className="flex-row">
              <FaBell />
              <p>Get Relevant Alerts and Recommendation</p>
            </div>
            <div className="flex-row">
              <IoStar />
              <p>Wishlist, Reviews, Ratings and more.</p>
            </div>
          </div>
        </div>
        <p className="bottom-content">
          Please note that upon clicking "Logout" you will lose all items in
          cart and will be redirected to Flipkart home page.
        </p>
      </div>
    </>
  );
};

export default LoginContainer;
