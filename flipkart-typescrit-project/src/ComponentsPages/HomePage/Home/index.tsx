import "./index.scss";
import HomeHeader from "../HomeHeader";
import { useQuery } from "@tanstack/react-query";
import { Product, SingleProduct, keywordTypes } from "../../../Types";
import TopOfferTagsImage from "../TopOfferTagsImage";
import offerCard from "../../../Asserts/Images/offerCard.jpg";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { HomeSingleProduct } from "../Product";
import { useStore } from "../../../ContextHooks/UseStore";
import ScrollingIamges from "../ScrollingImages";
import { useState } from "react";
import TagImagesQuery from "../../../APIQueryFunction/HomePageQuery/TagImagesQuery";
import SpecificWishListQuery from "../../../APIQueryFunction/WishListQuery/SpecificWishListQuery";
import ProductQuery from "../../../APIQueryFunction/HomePageQuery/GetProductQuery";
import { observer } from "mobx-react-lite";

const Home = observer(() => {
  const [searchInput, setSearchInput] = useState<string>("");
  const handleSetFunction = (value: string) => {
    setSearchInput(value);
  };
  const {
    rootStore: { wishListStore, userStore },
  } = useStore();

  const {
    data: tagImagesData,
    error: tagImagesError,
    isLoading: tagImagesLoading,
    refetch: tagImagesRefetch,
  } = TagImagesQuery();

  const {
    data: getAllProductData,
    error: productError,
    isLoading: getAllProductLoading,
    refetch: getAllProductRefetch,
  } = ProductQuery();

  const { data, error, isLoading } = SpecificWishListQuery(userStore.email);

  const filterData =
    searchInput !== ""
      ? getAllProductData.filter((product: SingleProduct) =>
          product.keywords?.some((keywords: keywordTypes) =>
            keywords.keyword.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : getAllProductData;

  if (tagImagesLoading || getAllProductLoading) return <p>Loading...</p>;
  if (tagImagesError && productError)
    return <p>Error: {tagImagesError?.message || productError?.message}</p>;

  return (
    <>
      <HomeHeader
        searchInput={searchInput}
        handleSetFunction={handleSetFunction}
      />
      <div className="top-offer-tags-images-container">
        {tagImagesData?.map((product: Product) => (
          <TopOfferTagsImage product={product} key={product.id} />
        ))}
      </div>
      <ScrollingIamges />
      <ImageField src={offerCard} alt="card Offer" className="offer-card-img" />
      <div className="product-container">
        {filterData?.map((product: SingleProduct, index: number) => (
          <HomeSingleProduct product={product} key={index} />
        ))}
      </div>
    </>
  );
});

export default Home;
