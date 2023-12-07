import React, { LegacyRef } from "react";

export type InputFiledProps = {
  type: string;
  className: string;
  name?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  autoComplete?: string;
};

export type ButtonFieldProps = {
  className: string;
  content: string | React.ReactNode;
  onClick?: any;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
};

export type Product = {
  name: string;
  id: number;
  images: string;
  date: string;
};

export type TopOfferTagsImageProps = {
  product: Product;
};
export type ImageFiledProps = {
  src: string;
  alt?: string;
  className?: string;
};

export type SingleProductProps = {
  product: SingleProduct;
};

export type CartSingleProducts = {
  id: number;
  quantity: number;
  defaultValue: number;
  product: SingleProduct;
};

export type CartSingleProductProps = {
  products: CartSingleProducts;
};

export type SingleProduct = {
  id: number;
  image: string;
  name?: string;
  priceCents?: number;
  priceIndia?: number;
  ratingStar?: number;
  totalQuantity?: number;
  ratingCount?: number;
  description?: string;
  keywords?: keywordTypes[];
  size?: string;
};

export type keywordTypes = {
  id: number;
  keyword: string;
};

export type ProductCountProps = {
  product: SingleProduct;
  quantity?: number;
};

export type setStateType = React.Dispatch<React.SetStateAction<boolean>>;

export type inputErrorValueProps = {
  emailError: string;
  passwordError: string;
  nameError: string;
  phoneError: string;
};

export type homeHeaderType = {
  searchInput: string;
  handleSetFunction: (value: string) => void;
};

export type setStateObject = React.Dispatch<
  React.SetStateAction<inputErrorValueProps>
>;

export interface handleLoginVerificationsType {
  response: string;
  navigate: (name: string) => void;
  InputValues: inputErrorValueProps;
  setInputValues: setStateObject;
  user: any;
  email: string;
  password: string;
}

export type HanglenavigateType = {
  event: React.MouseEvent<HTMLDivElement>;
  navigate: (name: string) => void;
};

export type CommonLeftWarperType = {
  value: boolean;
};

export type formRightWrapperType = {
  InputErrorValues: inputErrorValueProps;
  handleLoginVerification: ({
    response,
    email,
    password,
  }: handleLoginVerificationType) => void;
  setStateFunction: () => void;
  isNewUser: boolean;
  inputData: inputDataType;
  handleSetStateOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetStateErrorOnChange: (name: string, value: string) => void;
};

export type usersDataVericationType = {
  inputData: any;
  handleSetStateErrorOnChange: (name: string, value: string) => void;
  isNewUser: boolean;
};

export type inputDataType = {
  email: string;
  password: string;
  name: string;
  phone: string;
};

export type handleLoginVerificationType = {
  response: string;
  email: string;
  password: string;
};

export type CommonRightWrapperType = {
  emailInput: React.RefObject<HTMLInputElement>;
  passwordInput: React.RefObject<HTMLInputElement>;
  InputErrorValues: inputErrorValueProps;
};
