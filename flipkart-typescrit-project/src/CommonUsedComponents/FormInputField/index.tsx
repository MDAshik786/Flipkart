import { singleUserDataType, userDataType } from "../../Types/UserAccontType";
import InputFiled from "../InputField";

const FormInputField = ({ userData }: userDataType) => {
 
  return (
    <>
      {userData &&
        userData.map((data: singleUserDataType, index: number) =>
          data.type !== "radio" && data.type !== "checkbox"  ? (
            <div className={data.divClassName} key={index}>
              {data.labelContent && (
                <label className={data.labelClassName}>
                  {data.labelContent}
                </label>
              )}
              <InputFiled
                type={data.type}
                className={data.inputClassName}
                name={data.name}
                value={data.value}
                onChange={data.onChange}
                autoComplete={data.autoComplete}
                onClick={data.onClick}
                placeholder={data.placeholderName}
              />
              <span className={data.spanClassName}>{data.errorMessage}</span>
            </div>
          ) : (
            <div className={data.divClassName} key={index}>
              {data.labelContent && (
                <label className={data.labelClassName}>
                  {data.labelContent}
                </label>
              )}
              <div className="radio-content">
                <InputFiled
                  type={data.type}
                  className={data.inputClassName}
                  name={data.name}
                  id={data.id}
                  value={data.value}
                  onChange={data.onChange}
                  autoComplete={data.autoComplete}
                  placeholder={data.placeholderName}
                  key={index}
                />
                <p className="rodio-content">{data.radioContent}</p>
              </div>
            </div>
          )
        )}
    </>
  );
};

export default FormInputField;
