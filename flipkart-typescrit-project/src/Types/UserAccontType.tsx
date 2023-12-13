export type userDataType = {
  userData: singleUserDataType[];
};

export type singleUserDataType = {
  divClassName?: string;
  labelClassName?: string;
  placeholderName?: string;
  labelContent?: string;
  inputClassName: string;
  type: "text" | "number" | "email" | "password" | "radio" | "checkbox";
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  spanClassName?: string;
  errorMessage?: string;
  radioContent?: string;
};

export type checkboxDataType = {
  name: string;
  placeholderName?: string;
  inputClassName: string;
  type: "text" | "number" | "email" | "password" | "radio" | "checkbox";
  spanClassName?: string;
  errorMessage?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  labelContent?: string;
  divClassName?: string;
  radioContent?: string;
};
