import { useQuery } from "@tanstack/react-query";
import { getAllScrollingImages } from "../../../API Functions/HomePageAPI";
import TopOfferTagsImage from "../TopOfferTagsImage";
import { Product } from "../../../Types";
import { useStore } from "../../../ContextHooks/UseStore";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const ScrollingIamges = observer(() => {
    const { rootStore: { counterStore } } = useStore()
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
            {[]?.map(
                (product: Product, index: number) =>
                    index === counterStore?.getCounterValue && (
                        <TopOfferTagsImage product={product} key={product.id} />
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
    )
}
)
export default ScrollingIamges