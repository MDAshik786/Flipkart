import "./index.scss";
import logo from "../../../Asserts/Images/flipkartLogo.svg";
import plus from "../../../Asserts/Images/flipkartPlus.svg";
import InputFiled from "../../../CommonUsedComponents/InputField";
import seller from "../../../Asserts/Images/filpkartSellericon.svg";
import profile from "../../../Asserts/Images/flipkartProfile.svg";
import cart from "../../../Asserts/Images/flipkartCart.svg";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { BiSearchAlt } from "react-icons/bi";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { handleNavigate } from "../../../CommonFunctions/Navigate";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import { homeHeaderType } from "../../../Types";
import AllCartProductQuery from "../../../APIQueryFunction/CartQuery/AllCartProductQuery";

const HomeHeader = observer(
  ({ searchInput, handleSetFunction }: homeHeaderType) => {
    const navigate = useNavigate();

    const {
      rootStore: { userStore, wishListStore, cartStore },
    } = useStore();
    const { allCartProducts } = cartStore;
    const { data: getAllCartDatas, error, isLoading } = AllCartProductQuery();

    const isLoginOrNot = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!userStore.isUserLoginOrNot) handleNavigate(e, navigate, "login");
      else {
        wishListStore.clearAllWishListData();
        userStore.clearUserData();
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
            onChange={(
              e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
              >
            ) => handleSetFunction(e.target.value)}
          />
        </div>
        <div className="head-rightSide-container">
          <div className="head-nav-container">
            <ImageField src={seller} alt="" /> <p>Become a Seller</p>
          </div>

          <div className="head-nav-container" onClick={isLoginOrNot}>
            <ImageField src={profile} alt="" />
            <p>{userStore.isUserLoginOrNot ? "Sign Out" : "Sign In"}</p>
          </div>
          <div
            className="head-nav-container cart-home-header"
            onClick={(e) => handleNavigate(e, navigate, "cart")}
          >
            <ImageField src={cart} alt="" /> <p>Cart</p>
            <span className="quantity-count">
              {allCartProducts?.cartItems?.length || 0}
            </span>
          </div>
        </div>
      </header>
    );
  }
);

export default HomeHeader;
