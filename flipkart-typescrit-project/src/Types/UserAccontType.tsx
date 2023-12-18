export type userDataType = {
  userData: singleUserDataType[];
};

export type singleUserDataType = {
  divClassName?: string;
  id? : string | boolean | undefined;
  labelClassName?: string;
  placeholderName?: string;
  labelContent?: string;
  inputClassName: string;
  type: "text" | "number" | "email" | "password" | "radio" | "checkbox";
  name: string;
  value: string | boolean;
  onChange?: any
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  spanClassName?: string;
  errorMessage?: string;
  radioContent?: string;
};

export type checkboxDataType = {
  name: string;
  id? : string | boolean,
  placeholderName?: string;
  inputClassName: string;
  type: "text" | "number" | "email" | "password" | "radio" | "checkbox";
  spanClassName?: string;
  errorMessage?: string;
  value: string | boolean;
  onChange?:any
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  labelContent?: string;
  divClassName?: string;
  radioContent?: string;
};
