import { singleUserDataType, userDataType } from "../../Types/UserAccontType";
import InputFiled from "../InputField";

const FormInputField = ({ userData }: userDataType) => {
  return (
    <>
      {userData &&
        userData.map((data: singleUserDataType, index: number) => (
          <div className={data.divClassName} key={index}>
            <label className={data.labelClassName}>{data.labelContent}</label>
            <InputFiled
              type={data.type}
              className={data.inputClassName}
              name={data.name}
              value={data.value}
              onChange={data.onChange}
              autoComplete={data.autoComplete}
            />
            <span className={data.spanClassName}>{data.errorMessage}</span>
          </div>
        ))}
    </>
  );
};

export default FormInputField;
