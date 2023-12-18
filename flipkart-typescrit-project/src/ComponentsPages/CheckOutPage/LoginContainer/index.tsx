import "./index.scss";
import { FaTruck } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useStore } from "../../../ContextHooks/UseStore";
import { useNavigate } from "react-router-dom";


const verifiedContainerData = {
  number: 1,
  name: "LOGIN",
  content: ["Moahmed Ashik", "9122581422"],
};

const LoginContainer = () => {
  const {
    rootStore: { checkoutStore },
  } = useStore();
  const { checkoutData } = checkoutStore;


  const {
    rootStore: { userStore },
  } = useStore();
  const navigate = useNavigate();

  const handleSignOutFunction = () => {
    userStore.clearUserData();
    navigate("/");
  };

  return (
    <>
      {checkoutData.login && (
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
              <p className="blue" onClick={handleSignOutFunction}>
                Logout & Sign in to another account
              </p>
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
      )}
    </>
  );
};

export default LoginContainer;
