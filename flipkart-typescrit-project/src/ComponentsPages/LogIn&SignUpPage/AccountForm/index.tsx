import "./index.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../ContextHooks/UseStore";
import AccountLeftWarper from "../AccountLeftWarper";
import AccountRightWrapper from "../AccountRightWrapper";
import { inputErrorValueProps } from "../../../Types";

const AccountForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [InputErrorValues, setInputErrorValues] =
    useState<inputErrorValueProps>({
      emailError: "",
      passwordError: "",
      nameError: "",
      phoneError: "",
    });

  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const {
    rootStore: { userStore },
  } = useStore();

  const navigate = useNavigate();

  const setStateFunction = () => {
    setIsNewUser(() => !isNewUser);
  };

  const handleLoginVerification = (response: string) => {
    if (response === "verified") {
      userStore.setLoginUserData({
        emailInput: inputData.email,
        passwordInput: inputData.password,
      });
      navigate("/");
    } else if (response === "Added" && isNewUser) {
      userStore.setNewUserData(inputData);
      navigate("/");
    } else if (response === "Invalid Email" || response === "User not Exist")
      setInputErrorValues((state) => ({
        ...state,
        emailError: response,
      }));
    else if (response === "Incorrect Password")
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
    const dataName = `${name}Error`;
    if (InputErrorValues[dataName] !== "") {
      setInputErrorValues((state) => ({
        ...state,
        [`${name}Error`]: "",
      }));
    }
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
