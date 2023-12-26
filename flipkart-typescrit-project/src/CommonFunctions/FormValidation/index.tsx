import { usersDataVericationType } from "../../Types";
import { emailRegex } from "../../Utils_/Regex";

export const userDataVerication = ({
  inputData,
  handleSetStateErrorOnChange,
  isNewUser,
}: usersDataVericationType) => {
  const signUpDatas = ["email", "password", "name", "phone"];
  const loginDatas = ["email", "password"];
  const datas = isNewUser ? signUpDatas : loginDatas;
  let isVerified = true;

  datas.map((data: string, index: number) => {
    const value = inputData[data];

    if (data === "email") {
      if (!emailRegex.test(value)) {
        handleSetStateErrorOnChange(data, `${data} is Required`);
        isVerified = false;
      }
    } else if (data === "password") {
      if (value.length <= 4) {
        handleSetStateErrorOnChange(data, `Minimum 5 character Required`);
        isVerified = false;
      }
    } else if (data === "phone") {
      if (value.length != 10) {
        handleSetStateErrorOnChange(data, `Incorrect Phone Number`);
        isVerified = false;
      }
    } else {
      if (value === "") {
        handleSetStateErrorOnChange(data, `${data} is Required`);
        isVerified = false;
      }
    }
  });
  return isVerified;
};
