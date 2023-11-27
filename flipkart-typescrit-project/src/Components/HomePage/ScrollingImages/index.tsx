import { useQuery } from "@tanstack/react-query";
import { getAllScrollingImages } from "../../../API Functions/HomePageAPI";
import TopOfferTagsImage from "../TopOfferTagsImage";
import { Product } from "../../../Types";
import { useStore } from "../../../ContextHooks/UseStore";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import ImageField from "../../../CommonUsedComponents/ImageField";

const ScrollingIamges = observer(() => {
  const {
    rootStore: { counterStore },
  } = useStore();
  const {
    data: scrollingImagesData,
    error: scrollingImagesError,
    isLoading: scrollingImagesLoading,
  } = useQuery({
    queryKey: ["getAllScrollingImages"],
    queryFn: () => getAllScrollingImages(),
  });

  return (
    <div className="scrolling-offer-image-container">
      {scrollingImagesData?.map(
        (product: Product, index: number) =>
          index === counterStore?.getCounterValue && (
            <ImageField
              src={`http://localhost:3000/ScrollingOfferImages/${product?.images}`}
              key={index}
            />
          )
      )}
      <ButtonFiled
        content={<BiSolidLeftArrow className={"arrow-icons"} />}
        className="left-arrow-button"
        onClick={counterStore?.decrement}
      />
      <ButtonFiled
        content={<BiSolidRightArrow className={"arrow-icons"} />}
        className="right-arrow-button"
        onClick={counterStore?.increment}
      />
    </div>
  );
});
export default ScrollingIamges;
