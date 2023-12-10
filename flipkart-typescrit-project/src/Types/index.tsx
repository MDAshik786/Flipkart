import React, { LegacyRef } from "react";

export type InputFiledProps = {
  type: "text" | "number" | "email" | "password";
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



export type priceDataType = {
  product: SingleProduct;
};
export type SingleProductProps = {
  product: SingleProduct;
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

export type SingleWishListProductType = {
  data: productTypeData;
};

export type productTypeData = {
  productDTO: SingleProduct;
  color: string;
};

export type SingleProductProps2 = {
  product: SingleProduct;
  getSpecificWishListData: any;
};

export type CartSingleProducts = {
  id: number;
  quantity: number;
  defaultValue: number;
  color: string;
  product: SingleProduct;
};

export type CartSingleProductProps = {
  products: CartSingleProducts;
};

export type SingleProduct = {
  id: number;
  image: string;
  name?: string;
  priceCents: number;
  priceIndia: number;
  ratingStar: number;
  totalQuantity: number;
  ratingCount: number;
  reviewCount: number;
  discountPercentage: number;
  discountPrice: number;
  description?: string;
  keywords?: keywordTypes[];
  size?: string;
  productImages: productImagesType[];
  reviews: reviewType[];
};

export type productImagesType = {
  id: number;
  image: string;
  color: string;
};

export type reviewType = {
  id: number;
  ratings: number;
  review: string;
  users: usersType;
};

export type usersType = {
  userId: number;
  email: string;
  password: string;
  phone: string;
  createdDate: Date;
  currDate: Date;
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

export type homeHeaderType = {
  searchInput: string;
  handleSetFunction: (value: string) => void;
};

export type ratingContainerProps = {
  ratingData: ratingDataType;
};

export type ratingDataType = {
  ratingStar: number;
  content: String;
  ratingCount: number;
  reviewCount: number;
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

export type inputErrorValueProps = {
  [key: string]: string;
};


//inputErrorValueProps
export type formRightWrapperType = {
  InputErrorValues: inputErrorValueProps;
  handleLoginVerification: (response: string) => void;
  setStateFunction: () => void;
  isNewUser: boolean;
  inputData: inputDataType;
  handleSetStateOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetStateErrorOnChange: (name: string, value: string) => void;
};

export type usersDataVericationType = {
  inputData: inputDataKeyValuePairType;
  handleSetStateErrorOnChange: (name: string, value: string) => void;
  isNewUser: boolean;
};

export type inputDataKeyValuePairType = {
  [key : string]: string;
}

export type inputDataType = {
  email: string;
  password: string;
  name: string;
  phone: string;
};
export type inputDataOptionalType = {
  email: string;
  password: string;
  name?: string;
  phone?: string;
};

export interface loginUserStoreType {
  emailInput: string;
  passwordInput: string;
}

export type CommonRightWrapperType = {
  emailInput: React.RefObject<HTMLInputElement>;
  passwordInput: React.RefObject<HTMLInputElement>;
  InputErrorValues: inputErrorValueProps;
};
