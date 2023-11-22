import { ButtonHTMLAttributes } from "react";
import { Store } from "../MobxStore/ScrollingImageStore";

export type InputFiledProps = {
  type: string;
  className: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};

export type ButtonFieldProps = {
  className: string;
  content: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
export type HomeProps = {
  store: Store;
};
export type SingleProductProps = {
  product: SingleProduct;
  store: Store;
};
export type SingleProduct = {
  id?: number;
  image?: string;
  name?: string;
  priceCents?: number;
  priceIndia?: number;
  ratingStar?: number;
  totalQuantity?: number;
  ratingCount?: number;
  description?: string;
  keywords?: keywordTypes[];
};
export type keywordTypes = {
  id: number;
  keyword: string;
};
