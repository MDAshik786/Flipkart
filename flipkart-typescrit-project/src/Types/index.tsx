import { Store } from "../MobxStore/ScrollingImageStore";


export type InputFiledProps = {
  type: string;
  className: string;
  placeholder?: string;
  value?: string | number | undefined;
  autoFocus?: boolean;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};
export type ButtonFieldProps = {
  className: string;
  content: string | React.ReactNode;
  onClick?: () => void 
};

export type Product = {
  name:string,
  id: number;
  images: string;
  date: string;
};

export type TopOfferTagsImageProps = {
  product: Product;
};
export type ImageFiledProps = {
  src: string,
  alt?: string,
  className? : string,
}
export type HomeProps = {
  store:Store
} 