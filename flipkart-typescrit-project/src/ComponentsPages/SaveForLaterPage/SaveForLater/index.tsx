import "./index.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllSaveLaterAPI } from "../../../API Functions/SaveForLaterAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import Product from "./SingleProduct";
import { CartSingleProducts } from "../../../Types";

const SaveForLater = () => {
  const {
    rootStore: { userStore },
  } = useStore();

  const { data, error, isLoading } = useQuery({
    queryKey: ["getSaveForLaterQueryKey"],
    queryFn: () => getAllSaveLaterAPI(userStore.email),
  });

  if(isLoading) {
    return <>Loading</>
  }
  console.log(data)
  return (
    <div className="saveforlater-container">
      <h4 className="heading">Saved For Later (4)</h4>
      {data &&
        data.saveLaterItemDTOS.map((product: CartSingleProducts, index: number) => (
          <Product data={product}  key={index}/>
        ))}
    </div>
  );
};

export default SaveForLater;
