import "./index.css";
import HomeHeader from "../HomeHeader";
import {
  getAllProduct,
  getAllScrollingImages,
  getAllTagImages,
} from "../../../API Functions/HomePageAPI";
import { useQuery } from "@tanstack/react-query";
import { HomeProps, Product } from "../../../Types";
import TopOfferTagsImage from "../TopOfferTagsImage";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { observer } from "mobx-react";
import offerCard from "../../../Asserts/Images/offerCard.jpg";
import ImageField from "../../../CommonUsedComponents/ImageField";
import SingleProduct from "../Product";

const Home = observer(({ store }: HomeProps) => {
  const {
    data: tagImagesData,
    error: tagImagesError,
    isLoading: tagImagesLoading,
  } = useQuery({
    queryKey: ["getAllTagImages"],
    queryFn: () => getAllTagImages(),
  });

  const {
    data: scrollingImagesData,
    error: scrollingImagesError,
    isLoading: scrollingImagesLoading,
  } = useQuery({
    queryKey: ["getAllScrollingImages"],
    queryFn: () => getAllScrollingImages(),
  });
  const {
    data: getAllProductData,
    error: getAllProductError,
    isLoading: getAllProductLoading,
  } = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: () => getAllProduct(),
  });

  if (tagImagesLoading || scrollingImagesLoading || getAllProductLoading)
    return <p>Loading...</p>;
  if (tagImagesError || scrollingImagesError || getAllProductError)
    return (
      <p>
        Error:{" "}
        {tagImagesError?.message ||
          scrollingImagesError?.message ||
          getAllProductError?.message}
      </p>
    );
  return (
    <>
      <HomeHeader />
      <div className="top-offer-tags-images-container">
        {tagImagesData?.map((product: Product) => (
          <TopOfferTagsImage product={product} key={product.id} />
        ))}
      </div>
      {store?.scrollingImageIndex}
      <div className="scrolling-offer-image-container">
        {scrollingImagesData?.map(
          (product: Product, index: number) =>
            index === store?.scrollingImageIndex && (
              <TopOfferTagsImage product={product} key={product.id} />
            )
        )}
        <ButtonFiled
          content={<BiSolidLeftArrow className={"arrow-icons"} />}
          className="left-arrow-button"
          onClick={() => store?.decrement}
        />
        <ButtonFiled
          content={<BiSolidRightArrow className={"arrow-icons"} />}
          className="right-arrow-button"
          onClick={() => store?.increment}
        />
      </div>
      <ImageField src={offerCard} alt="card Offer" className="offer-card-img" />
      <div className="product-container">
        {getAllProductData?.map((product: Product, index: number) => (
          <SingleProduct product={product} key={index} store={store?.productCount} />
        ))}
      </div>
    </>
  );
});

export default Home;
