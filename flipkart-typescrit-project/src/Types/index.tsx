import React, { LegacyRef } from "react";

export type InputFiledProps = {
  type: string;
  className: string;
  name? : string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  autoComplete? : string;
  ref? : LegacyRef<HTMLInputElement>;
};

export type ButtonFieldProps = {
  className: string;
  content: string | React.ReactNode;
  onClick?: any;
  disabled?: boolean;
  type? : "button" | "reset" | "submit" | undefined ;
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
  ref?: any
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

export type setStateType =  React.Dispatch<React.SetStateAction<boolean>>;

export type inputValueProps = {
  email : string,
  password : string,
  emailError : string,
  passwordError : string
}

export type setStateObject = React.Dispatch<React.SetStateAction<inputValueProps>>;