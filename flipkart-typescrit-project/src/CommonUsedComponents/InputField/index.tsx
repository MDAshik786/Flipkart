import { forwardRef } from "react";
import { InputFiledProps } from "../../Types";
import { refImage, refInput } from "../../Types/Name&Type";

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
  ref: refInput
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
