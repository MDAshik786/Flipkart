import {
  handleLoginVerificationsType,
  setStateObject,
  setStateType,
} from "../../Types";

export const handleUpdateChange = (
  updateState: boolean,
  setUpdateState: setStateType
) => {
  setUpdateState((preState) => !preState);
};

export const handleOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: setStateObject
) => {
  const { name, value } = e.target;

  setState((state) => ({
    ...state,
    [name]: value,
  }));
};

export const handleLoginVerifications = ({
  response,
  navigate,
  InputValues,
  setInputValues,
  user,
  email,
  password,
}: handleLoginVerificationsType ) => {
  console.log(response, email, password, "sep fun", user);
  if (response === "verified") {
    user({ emailInput: email, passwordInput: password });
    navigate("/");
  } else if (response === "Invalid Email")
    setInputValues((state) => ({
      ...state,
      emailError: response,
    }));
  else
    setInputValues((state) => ({
      ...state,
      passwordError: response,
    }));
};
