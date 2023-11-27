import "./index.css";
import HomeHeader from "../HomeHeader";
import {
  getAllProduct,
  getAllScrollingImages,
  getAllTagImages,
} from "../../../API Functions/HomePageAPI";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../../Types";
import TopOfferTagsImage from "../TopOfferTagsImage";
import { observer } from "mobx-react";
import offerCard from "../../../Asserts/Images/offerCard.jpg";
import ImageField from "../../../CommonUsedComponents/ImageField";
import SingleProduct from "../Product";
import { useStore } from "../../../ContextHooks/UseStore";
import ScrollingIamges from "../ScrollingImages";

const Home = observer(() => {
  const { rootStore: { counterStore } } = useStore()
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

  if (tagImagesLoading || getAllProductLoading)
    return <p>Loading...</p>;
  if (tagImagesError && getAllProductError)
    return (
      <p>
        Error:{" "}
        {tagImagesError?.message ||
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
      {counterStore?.getCounterValue}
      <ScrollingIamges />
      <ImageField src={offerCard} alt="card Offer" className="offer-card-img" />
      <div className="product-container">
        {getAllProductData?.map((product: Product, index: number) => (
          <SingleProduct product={product} key={index} />
        ))}
      </div>

    </>
  );
});

export default Home;
