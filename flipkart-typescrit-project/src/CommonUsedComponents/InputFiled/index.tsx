import { InputFiledProps } from "../../Types";

const InputFiled = ({ className, placeholder, autoFocus,type,value, onChange }: InputFiledProps) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      />
  );
};

export default InputFiled;
