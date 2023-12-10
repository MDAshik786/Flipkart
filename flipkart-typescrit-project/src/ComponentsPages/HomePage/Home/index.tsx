import "./index.scss";
import HomeHeader from "../HomeHeader";
import {
  getAllProduct,
  getAllTagImages,
} from "../../../API Functions/HomePageAPI";
import { useQuery } from "@tanstack/react-query";
import { Product, SingleProduct, keywordTypes } from "../../../Types";
import TopOfferTagsImage from "../TopOfferTagsImage";
import offerCard from "../../../Asserts/Images/offerCard.jpg";
import ImageField from "../../../CommonUsedComponents/ImageField";
import { HomeSingleProduct } from "../Product";
import { useStore } from "../../../ContextHooks/UseStore";
import ScrollingIamges from "../ScrollingImages";
import { getSpecificWhishListProduct } from "../../../API Functions/WishListAPI";
import { useEffect, useState } from "react";

const Home = () => {
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

  // const {
  //   data: getAllProductData,
  //   error: getAllProductError,
  //   isLoading: getAllProductLoading,
  // } = getAllProductQuery();

  // import { useQuery } from "@tanstack/react-query";
  // import { getAllProduct } from "../../API Functions/HomePageAPI";

  // export const getAllProductQuery = () => {
  //      const {
  //         data,
  //         error,
  //         isLoading,
  //       } = useQuery({
  //         queryKey: ["getAllProduct"],
  //         queryFn: () => getAllProduct(),

  //     });
  //         return {data, error, isLoading}
  // }

  const {
    data: getSpecificWishListData,
    error: wishListProductError,
    isLoading: wishListProductLoading,
  } = useQuery({
    queryKey: ["getSpecificIdWishListProduct"],
    queryFn: () => getSpecificWhishListProduct(userStore.email),
  });
  useEffect(() => {
    wishListStore.setFunctionSpecifcProduct(getSpecificWishListData || []);
  }, [getSpecificWishListData]);

  const filterData =
    searchInput !== ""
      ? getAllProductData.filter((product: SingleProduct) =>
          product.keywords?.some((keywords: keywordTypes) =>
            keywords.keyword.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : getAllProductData;

  if (tagImagesLoading || getAllProductLoading) return <p>Loading...</p>;
  if (tagImagesError && getAllProductError)
    return (
      <p>Error: {tagImagesError?.message || getAllProductError?.message}</p>
    );

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
          <HomeSingleProduct
            product={product}
            key={index}
            getSpecificWishListData={getSpecificWishListData}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
