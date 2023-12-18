import { GoVerified } from "react-icons/go";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";


const VerifiedContainer = () => {
  return (
    <div className="login">
    <div className="login-verifed-container">
      <p className="row-number">1</p>
      <div className="login-name-details">
        <div className="login-name-container">
          <h4 className="heading">LOGIN</h4>
          <GoVerified className="verified" />
        </div>
        <p className="login-name">Moahmed Ashik</p>
      </div>
    </div>
    <ButtonFiled content={"Change"} className="change-button" />
  </div>
  )
}

export default VerifiedContainer