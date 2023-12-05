import { forwardRef } from "react";
import { InputFiledProps } from "../../Types";

const InputFiled = forwardRef(function InputFiled(
  {
    className,
    placeholder,
    autoFocus,
    type,
    name,
    value,
    onChange,
    autoComplete,
  }: InputFiledProps,
  ref: any
) {
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
      ref={ref}
    />
  );
});

export default InputFiled;
