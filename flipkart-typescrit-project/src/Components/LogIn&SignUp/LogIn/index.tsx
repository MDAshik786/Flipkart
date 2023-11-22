import { HomeProps } from "../../../Types"
import './index.css'
import img from '../../../Asserts/Images/flipkart-login.png'
import InputFiled from "../../../CommonUsedComponents/InputFiled"
import ButtonFiled from "../../../CommonUsedComponents/ButtonField"
const LogIn = ({ store }: HomeProps) => {
  return (
    <div className="main-div">
      <div className="login-main-container">
        <div className="login-left-container">
          <span className="login-heading">
            Login
          </span>
          <p className="login-left-content">Get access to your Orders, Wishlist and Recommendations</p>
          <img src={img} alt="" className="img" />
        </div>
        <div className="login-right-container">
          <div className="login-email-div">
          <label className="login-placeholder">Enter Your Email:</label>
          <InputFiled type="text" className="login-email-container" />
          </div>
          <div className="login-password-div">
          <label className="login-placeholder">Enter Your Password:</label>
          <InputFiled type="text" className="login-password-container" />

          </div>
          <div className="agree-container">By continuing, you agree to Flipkart's <span className="blue-color">Terms of Use</span> and <span className="blue-color">
            Privacy Policy.</span></div>
          <ButtonFiled className="Login-button" content={"LogIn"} />
        <p className="create-new-account">
        New to Flipkart? Create an account
        </p>
        </div>
      </div>

    </div>
  )
}

export default LogIn