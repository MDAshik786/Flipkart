
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import './index.css'
import { ProductCountProps } from '../../../Types';
import { useStore } from "../../../ContextHooks/UseStore";

import { observer } from "mobx-react-lite";




const ProductCount = ({ product, quantity }: ProductCountProps) => {
 
  const { rootStore: { productCounterStore } } = useStore()
  


  return (
    <div className="number-container">
      <ButtonFiled
        className="symbol"
        content="-"
        onClick={() => productCounterStore?.decrementAProductCounter(product?.id)}
      />
      <InputFiled
        type="number"
        className={"number"}
        value={ productCounterStore.getProductCounter[product?.id] ? productCounterStore.getProductCounter[product?.id]  : quantity ? quantity : 1}
        onChange={(e) => productCounterStore?.addAProductCounter(product.id, Number(e.target.value))}
      />
      <ButtonFiled
        className="symbol"
        content="+"
        onClick={() => productCounterStore?.incrementAProductCounter(product?.id)}
      />
    </div>

  );
};

export default observer(ProductCount);
