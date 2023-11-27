import ImageField from "../../../CommonUsedComponents/ImageField";
import "./index.scss";
import { TopOfferTagsImageProps } from "../../../Types";
const TopOfferTagsImage = ({ product }: TopOfferTagsImageProps) => {
  return (
    <div className="top-offer-names-container">
      <ImageField src={`http://localhost:3000/${product?.images}`}  />
      <span className="top-offer-names">{product?.name}</span>
    </div>
  );
};

export default TopOfferTagsImage;
