import { InputFiledProps } from "../../Types";

const InputFiled = ({ className, placeholder, autoFocus, type, name, value, onChange, autoComplete }: InputFiledProps) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      autoFocus={autoFocus}
      value={value}
      name={name}
      onChange={onChange}
      autoComplete={autoComplete}
     
      />
  );
};

export default InputFiled;
