import "./index.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../ContextHooks/UseStore";
import AccountLeftWarper from "../AccountLeftWarper";
import AccountRightWrapper from "../AccountRightWrapper";
import { handleLoginVerificationType } from "../../../Types";

const AccountForm = () => {
  const [InputErrorValues, setInputErrorValues] = useState({
    emailError: "",
    passwordError: "",
    nameError: "",
    phoneError: "",
  });

  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const {
    rootStore: { userStore },
  } = useStore();

  const navigate = useNavigate();

  const setStateFunction = () => {
    setIsNewUser(() => !isNewUser);
  };

  const handleLoginVerification = ({
    response,
    email,
    password,
  }: handleLoginVerificationType) => {
    if (response === "verified") {
      userStore.setLoginUserData({
        emailInput: email,
        passwordInput: password,
      });
      navigate("/");
    } else if (response === "Invalid Email")
      setInputErrorValues((state) => ({
        ...state,
        emailError: response,
      }));
    else
      setInputErrorValues((state) => ({
        ...state,
        passwordError: response,
      }));
  };

  const handleSetStateOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((state) => ({
      ...state,
      [name]: value,
    }));
    // const dataName = `${name}Error`;
    // if (InputErrorValues[dataName] !== "") {
    setInputErrorValues((state) => ({
      ...state,
      [`${name}Error`]: "",
    }));
    // }
  };

  const handleSetStateErrorOnChange = (name: string, value: string) => {
    setInputErrorValues((state) => ({
      ...state,
      [`${name}Error`]: value,
    }));
  };

  return (
    <div className="main-div">
      <div className="form-main-container">
        <AccountLeftWarper value={isNewUser} />

        <AccountRightWrapper
          InputErrorValues={InputErrorValues}
          handleLoginVerification={handleLoginVerification}
          setStateFunction={setStateFunction}
          isNewUser={isNewUser}
          inputData={inputData}
          handleSetStateOnChange={handleSetStateOnChange}
          handleSetStateErrorOnChange={handleSetStateErrorOnChange}
        />
      </div>
    </div>
  );
};

export default AccountForm;
