import {useState} from 'react'
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import './index.css'
import { Store } from '../../../MobxStore/ScrollingImageStore';
import { SingleProduct } from '../../../Types';

type ProductCountProps = {
  store : Store,
  product: SingleProduct
}
const ProductCount = ({store, product} : ProductCountProps ) => {
const id = product?.id
 console.log(store?.productCounts, store.scrollingImageIndex)
  return (
    <div className="number-container">
  <ButtonFiled
    className="symbol"
    content="-"
    onClick={() => store?.productCountDecrement(id)}
  />
  <InputFiled
    type="number"
    className={"number"}
    value={store?.productCounts[product?.id ?? 1] || 1}
    // onChange={(e) => store?.handleChangeProductCounts(e.target.value, product.id)}
    />
  <ButtonFiled
  className="symbol"
  content="-"
  onClick={() => store?.productCountIncrement(id)}
/>
</div>
 
  );
};

export default ProductCount;
