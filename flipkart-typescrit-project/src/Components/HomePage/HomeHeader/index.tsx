import "./index.css";
import {useState} from 'react'
import logo from "../../../Asserts/Images/flipkartLogo.svg";
import plus from "../../../Asserts/Images/flipkartPlus.svg";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import seller from "../../../Asserts/Images/filpkartSellericon.svg";
import profile from "../../../Asserts/Images/flipkartProfile.svg";
import cart from "../../../Asserts/Images/flipkartCart.svg";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { BiSearchAlt } from 'react-icons/bi';
const HomeHeader = () => {
  const [searchInput, setSearchInput] = useState<string>('')
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  } 
  return (
    <header>
      <div className="header-branding-container">
        <img src={logo} alt="FlipKart" className="img" />
        <div className="header-explore-name">
          <span className="head-explore">Explore</span>
          <span className="head-plus">Plus</span>
          <img src={plus} alt="" />
        </div>
      </div>
      <div className="head-input-container">
        <ButtonFiled content={<BiSearchAlt className='head-search-icons'/> }className={'header-serach-icons'} />
        <InputFiled className={"header-input"} placeholder={"Search for Product, Brand and More"} autoFocus={true} type="text" value={searchInput} onChange={handleSearchInput}/>
      </div>
      <div className="head-rightSide-container">
        <div className="head-nav-container">
          <img src={seller} alt=""  /> <p>Become a Seller</p>
        </div>
        <div className="head-nav-container">
          <img src={profile} alt="" /> <p>Sign in</p>
        </div>
        <div className="head-nav-container">
          <img src={cart} alt="" /> <p>Cart</p>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
