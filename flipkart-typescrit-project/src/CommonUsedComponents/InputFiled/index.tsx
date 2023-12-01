import { InputFiledProps } from "../../Types";

const InputFiled = ({ className, placeholder, autoFocus, type, name, value, onChange }: InputFiledProps) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      autoFocus={autoFocus}
      value={value}
      name={name}
      onChange={onChange}
     
      />
  );
};

export default InputFiled;
