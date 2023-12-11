import { SingleProduct } from "../../../Types";
import ImageField from "../../ImageField";

export type ImageContainerProps = {
  imageData: ImageDataTypes;
};

export type ImageDataTypes = {
  product: SingleProduct;
  onclick ? : () => void;
  color: string;
};

const ImageConatiner = ({ imageData }: ImageContainerProps) => {
  const { product, color, onclick } = imageData;
  return (
    <div className="single-img-container" onClick={onclick }  >
      {product?.productImages.map(
        (data, index) =>
          data.color === color && (
            <ImageField
              key={index}
              src={`http://localhost:3000/${data.image}`}
              alt={product?.name}
              className="single-product-img"
            
            />
          )
      )}
    </div>
  );
};

export default ImageConatiner;
