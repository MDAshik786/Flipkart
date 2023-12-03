import './index.scss'
import ImageField from "../../../CommonUsedComponents/ImageField";
import fileImage from "../../../Asserts/Images/file.svg";
import { SlArrowRight } from "react-icons/sl";

const MyOrderHeader = () => {
  return (
    <div className="myorder">
      <div className="myorder-file-names" >
        <ImageField src={fileImage} alt="" />
        <h4>MY ORDERS</h4>
      </div>
      <SlArrowRight className="right-arraow" />
    </div>
  );
};

export default MyOrderHeader;
