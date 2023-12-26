import "./index.scss";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../../ContextHooks/UseStore";
import Product from "./SingleProduct";
import { CartSingleProducts } from "../../../Types";
import SaveForLaterQuery from "../../../APIQueryFunction/SaveForLaterQuery/SaveForLaterQuery";

const SaveForLater = () => {
  const {
    rootStore: { userStore },
  } = useStore();

  const { data, error, isLoading } = SaveForLaterQuery();

  if (isLoading) {
    return <div className="saveforlater-container">Loading</div>;
  }

  return (
    <div className="saveforlater-container">
      <h4 className="heading">
        Saved For Later ({data?.saveLaterItemDTOS?.length || 0})
      </h4>
      {data &&
        data.saveLaterItemDTOS.map(
          (product: CartSingleProducts, index: number) => (
            <Product data={product} key={index} />
          )
        )}
    </div>
  );
};

export default SaveForLater;
