import { useState } from "react";
import img from "../../../Asserts/Images/flipkart-login.png";
import { CommonLeftWarperType } from "../../../Types";
import data from "../../../Utils_/helpers/user.json";

const AccountLeftWarper = ({ value }: CommonLeftWarperType) => {
  let heading = "",
    description = "";
  const { signIn, signUp } = data;
  if (value) {
    heading = signUp.heading;
    description = signUp.description;
  } else {
    heading = signIn.heading;
    description = signIn.description;
  }

  return (
    <div className="form-left-container">
      <span className="form-heading">{heading}</span>
      <p className="form-left-content">{description}</p>
      <img src={img} alt="" className="img" />
    </div>
  );
};

export default AccountLeftWarper;
