import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllScrollingImages } from "../../../API Functions/HomePageAPI";
import { Product } from "../../../Types";
import ButtonField from "../../../CommonUsedComponents/ButtonField";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import ImageField from "../../../CommonUsedComponents/ImageField";

const ScrollingImages = observer(() => {
  const [scrollingCounter, setScrollingCounter] = useState(0);
  const imageRef = useRef<string | null>(null);

  const handleUpAndDown = (value: number) => {
    setScrollingCounter((prevCounter) => prevCounter + value);
    // imageRef.current.src = scrollingImagesData[0].images;
  };

  const handleAutoIncrement = () => {
    const intervalId = setTimeout(() => {
      setScrollingCounter((prevCounter) => prevCounter + 1);
    }, 3000);
    // return () => clearInterval(intervalId);
  };

  useEffect(() => {
    const cleanupInterval = handleAutoIncrement();
    //   return () => cleanupInterval();
  }, []);

  const {
    data: scrollingImagesData,
    error: scrollingImagesError,
    isLoading: scrollingImagesLoading,
  } = useQuery({
    queryKey: ["getAllScrollingImages"],
    queryFn: () => getAllScrollingImages(),
  });

  return (
    <>
      {scrollingCounter}
      <div className="scrolling-offer-image-container">
        {scrollingImagesData?.map(
          (product: Product, index: number) =>
            index === scrollingCounter && (
              <ImageField
                src={`http://localhost:3000/ScrollingOfferImages/${product?.images}`}
                key={index}
                ref={imageRef}
              />
            )
        )}
        <ButtonField
          content={<BiSolidLeftArrow className={"arrow-icons"} />}
          className="left-arrow-button"
          onClick={() => handleUpAndDown(-1)}
        />
        <ButtonField
          content={<BiSolidRightArrow className={"arrow-icons"} />}
          className="right-arrow-button"
          onClick={() => handleUpAndDown(1)}
        />
      </div>
    </>
  );
});

export default ScrollingImages;
// import React, { useRef, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getAllScrollingImages } from "../../../API Functions/HomePageAPI";
// import { Product } from "../../../Types";
// import ButtonField from "../../../CommonUsedComponents/ButtonField";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
// import { observer } from "mobx-react-lite";
// import ImageField from "../../../CommonUsedComponents/ImageField";

// const ScrollingImages = observer(() => {
//   const scrollingCounter = useRef(0);

//   const handleUpAndDown = (value: number) => {
//     scrollingCounter.current = scrollingCounter.current + value;
//   };

//   const handleAutoIncrement = () => {
//     const intervalId = setInterval(() => {
//       console.log("first", scrollingCounter.current)
//       scrollingCounter.current++;
//     }, 1000);
//     return () => clearInterval(intervalId);
//   };

//   useEffect(() => {
//     const cleanupInterval = handleAutoIncrement();
//     return () => cleanupInterval();
//   }, []);

//   const {
//     data: scrollingImagesData,
//     error: scrollingImagesError,
//     isLoading: scrollingImagesLoading,
//   } = useQuery({
//     queryKey: ["getAllScrollingImages"],
//     queryFn: () => getAllScrollingImages(),
//   });

//   return (
//     <>
//       {scrollingCounter.current}
//       <div className="scrolling-offer-image-container">
//         {scrollingImagesData?.map((product: Product, index: number) => (
//           index === scrollingCounter.current && (
//             <ImageField
//               src={`http://localhost:3000/ScrollingOfferImages/${product?.images}`}
//               key={index}
//             />
//           )
//         ))}
//         <ButtonField
//           content={<BiSolidLeftArrow className={"arrow-icons"} />}
//           className="left-arrow-button"
//           onClick={() => handleUpAndDown(-1)}
//         />
//         <ButtonField
//           content={<BiSolidRightArrow className={"arrow-icons"} />}
//           className="right-arrow-button"
//           onClick={() => handleUpAndDown(1)}
//         />
//       </div>
//     </>
//   );
// });

// export default ScrollingImages;
