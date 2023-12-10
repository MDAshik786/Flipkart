export type userDataType = {
  userData: singleUserDataType[];
};

export type singleUserDataType = {
  divClassName: string;
  labelClassName: string;
  labelContent: string;
  inputClassName: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  spanClassName: string;
  errorMessage: string;
};
