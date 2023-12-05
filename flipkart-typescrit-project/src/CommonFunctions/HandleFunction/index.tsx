import { useStore } from "../../ContextHooks/UseStore";
import { inputValueProps, setStateObject, setStateType } from "../../Types";


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

export interface handleLoginVerificationType {
  response: string;
  navigate: (name: string) => void;
  InputValues: inputValueProps;
  setInputValues: setStateObject;
  user : any
}

export const handleLoginVerification = ({
  response,
  navigate,
  InputValues,
  setInputValues,
}: handleLoginVerificationType) => {
  if (response === "verified") {
    localStorage.setItem(
      "loginData",
      JSON.stringify({ email: InputValues.email, role: "user" })
    );
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
