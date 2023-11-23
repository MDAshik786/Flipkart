
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import './index.css'
import { Store } from '../../../MobxStore/Store';
import { SingleProduct } from '../../../Types';
import { useStore } from "../../../ContextHooks/UseStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";


type ProductCountProps = {
  product: SingleProduct
}
const ProductCount = ({ product }: ProductCountProps) => {
  const id: number = product.id
  const { rootStore: { productCounterStore } } = useStore()
  console.log(toJS(productCounterStore.getProductCounter), '1')


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
        value={productCounterStore.getProductCounter[id] ? productCounterStore.getProductCounter[id] : 1}
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
