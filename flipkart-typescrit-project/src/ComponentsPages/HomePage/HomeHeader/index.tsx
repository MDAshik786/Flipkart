import "./index.scss";
import { useState } from "react";
import logo from "../../../Asserts/Images/flipkartLogo.svg";
import plus from "../../../Asserts/Images/flipkartPlus.svg";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import seller from "../../../Asserts/Images/filpkartSellericon.svg";
import profile from "../../../Asserts/Images/flipkartProfile.svg";
import cart from "../../../Asserts/Images/flipkartCart.svg";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { BiSearchAlt } from "react-icons/bi";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { handleNavigate } from "../../../CommonFunctions/Navigate";
import { useNavigate } from "react-router-dom";
import { checkEmailVerification } from "../../../CommonFunctions/LoginVerification";

export type homeHeaderType = {
  searchInput : string,
  handleSetFunction : (value : string) => void
}
const HomeHeader = ({searchInput, handleSetFunction} : homeHeaderType) => {
 
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState<boolean>(
    checkEmailVerification()
  );

  const isLoginOrNot = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!checkEmailVerification()) handleNavigate(e, navigate, "login");
    else {
      localStorage.removeItem("loginData");
      setLoginState(false);
    } 
  };

  return (
    <header className="header">
      <div className="header--branding-container">
        <img src={logo} alt="FlipKart" className="img" />
        <div className="header-explore-name">
          <span className="head-explore">Explore</span>
          <span className="head-plus">Plus</span>
          <img src={plus} alt="" />
        </div>
      </div>
      <div className="head-input-container">
        <ButtonFiled
          content={<BiSearchAlt className="head-search-icons" />}
          className={"header-serach-icons"}
        />
        <InputFiled
          className={"header-input"}
          placeholder={"Search for Product, Brand and More"}
          autoFocus={true}
          type="text"
          value={searchInput}
          onChange={(e) => handleSetFunction(e.target.value)}
        />
      </div>
      <div className="head-rightSide-container">
        <div className="head-nav-container">
          <ImageField src={seller} alt="" /> <p>Become a Seller</p>
        </div>
        <div className="head-nav-container" onClick={isLoginOrNot}>
          <ImageField src={profile} alt="" />{" "}
          <p>{checkEmailVerification() ? "Sign Out" : "Sign In"}</p>
        </div>
        <div
          className="head-nav-container"
          onClick={(e) => handleNavigate(e, navigate, "cart")}
        >
          <ImageField src={cart} alt="" /> <p>Cart</p>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
