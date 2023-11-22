import { HomeProps } from "../../../Types"
import './index.css'
import img from '../../../Asserts/Images/flipkart-login.png'
import InputFiled from "../../../CommonUsedComponents/InputFiled"
import ButtonFiled from "../../../CommonUsedComponents/ButtonField"
const LogIn = ({store} : HomeProps) => {
  return (
    <div className="login-main-container">
       <div className="login-left-container">
        <span className="login-heading">
            Login
        </span>
        <p className="login-left-content">Get access to your Orders, Wishlist and Recommendations</p>
        <img src={img} alt="" className="img" />
       </div>
       <div className="login-right-container">
       <p>Enter Email/Mobile number</p>
       <InputFiled type="text" className="login-email-container" />
       <InputFiled type="text" className="login-password-container" />
       <div>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>
       Privacy Policy.</span>.</div>
       <ButtonFiled className="Login-button" content={"LogIn"}/>
       </div>
    </div>
  )
}

export default LogIn