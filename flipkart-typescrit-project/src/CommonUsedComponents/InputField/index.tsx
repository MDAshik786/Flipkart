import { forwardRef } from "react";
import { InputFiledProps } from "../../Types";
import { refInput } from "../../Types/Name&Type";

const InputFiled = forwardRef(function InputFiled(
  {
    className,
    placeholder,
    id,
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
      onChange={type === "radio" ? (e) => onChange(e, id) : onChange}
      autoComplete={autoComplete}
      defaultChecked={value === id}
      ref={ref}
    />
  );
});

export default InputFiled;
