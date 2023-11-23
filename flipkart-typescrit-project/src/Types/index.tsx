
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
  onClick?:any;
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
export type SingleProduct = {
  id: number ;
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
