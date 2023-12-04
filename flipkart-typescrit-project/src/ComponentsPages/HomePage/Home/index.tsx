import "./index.scss";
import HomeHeader from "../HomeHeader";
import {
  getAllProduct,
  getAllScrollingImages,
  getAllTagImages,
} from "../../../API Functions/HomePageAPI";
import { useQuery } from "@tanstack/react-query";
import { Product, SingleProduct } from "../../../Types";
import TopOfferTagsImage from "../TopOfferTagsImage";
import { observer } from "mobx-react";
import offerCard from "../../../Asserts/Images/offerCard.jpg";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { HomeSingleProduct } from "../Product";
import { useStore } from "../../../ContextHooks/UseStore";
import ScrollingIamges from "../ScrollingImages";
import {
  getAllWhishListProduct,
  getSpecificWhishListProduct,
} from "../../../API Functions/WishListAPI";

const Home = observer(() => {
  const {
    rootStore: { wishListStore },
  } = useStore();

  const {
    data: tagImagesData,
    error: tagImagesError,
    isLoading: tagImagesLoading,
  } = useQuery({
    queryKey: ["getAllTagImages"],
    queryFn: () => getAllTagImages(),
  });

  const {
    data: getAllProductData,
    error: getAllProductError,
    isLoading: getAllProductLoading,
  } = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: () => getAllProduct(),
  });

  const {
    data: getSpecificWishListData,
    error: wishListProductError,
    isLoading: wishListProductLoading,
  } = useQuery({
    queryKey: ["getSpecificIdWishListProduct"],
    queryFn: () => getSpecificWhishListProduct(),
  });

  wishListStore.setFunctionSpecifcProduct(getSpecificWishListData);

  if (tagImagesLoading || getAllProductLoading) return <p>Loading...</p>;
  if (tagImagesError && getAllProductError)
    return (
      <p>Error: {tagImagesError?.message || getAllProductError?.message}</p>
    );
  return (
    <>
      <HomeHeader />
      <div className="top-offer-tags-images-container">
        {tagImagesData?.map((product: Product) => (
          <TopOfferTagsImage product={product} key={product.id} />
        ))}
      </div>
      <ScrollingIamges />
      <ImageField src={offerCard} alt="card Offer" className="offer-card-img" />
      <div className="product-container">
        {getAllProductData?.map((product: SingleProduct, index: number) => (
          <HomeSingleProduct product={product} key={index} />
        ))}
      </div>
    </>
  );
});

export default Home;
