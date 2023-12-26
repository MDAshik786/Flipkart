import { useState, useEffect, useRef } from "react";
import ButtonField from "../../../CommonUsedComponents/ButtonField";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import ImageField from "../../../CommonUsedComponents/ImageField";
import ScrollingImagesQuery from "../../../APIQueryFunction/HomePageQuery/ScrollingImagesQuery";

const ScrollingImages = observer(() => {
  const [scrollingCounter, setScrollingCounter] = useState(0);

  const imageRef = useRef<any>([]);

  const handleUpAndDown = (value: number) => {
    if (value === 1 && scrollingCounter === 6) {
      setScrollingCounter(0);
    } else if (value === -1 && scrollingCounter === 0) {
      setScrollingCounter(() => 6);
    } else {
      setScrollingCounter((prevCounter) => prevCounter + value);
    }
    imageRef.current.src = `http://localhost:3000/ScrollingOfferImages/${scrollingImagesData[scrollingCounter].images}`;
  };

  const handleAutoIncrement = () => {
    return setInterval(() => {
      if (scrollingCounter === 6) {
        setScrollingCounter(0);
      } else {
        setScrollingCounter((prevCounter) => prevCounter + 1);
      }
    }, 2000);
  };

  useEffect(() => {
    const intervalId = handleAutoIncrement();
    return () => clearInterval(intervalId);
  }, [scrollingCounter]);

  const {
    data: scrollingImagesData,
    error: scrollingImagesError,
    isLoading: scrollingImagesLoading,
    refetch: scrollingImagesRefetch,
  } = ScrollingImagesQuery();

  return (
    <div className="scrolling-offer-image-container">
      {scrollingImagesData && (
        <ImageField
          ref={imageRef}
          src={`http://localhost:3000/ScrollingOfferImages/${scrollingImagesData[scrollingCounter]?.images}`}
        />
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
  );
});

export default ScrollingImages;
