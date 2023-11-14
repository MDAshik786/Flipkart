import {useState} from 'react'
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import InputFiled from "../../../CommonUsedComponents/InputFiled";
import './index.css'
const ProductCount = () => {
const handleProductCount = (e: React.ChangeEvent<HTMLInputElement>) => {
  setProductQuantity(e.target.value);
}

  const [productQuantity , setProductQuantity] = useState<string>('');
  return (
    <div className="number-container">
      <ButtonFiled className="symbol" content="-" />
      <InputFiled type="number" className={"number"} value={productQuantity} onChange={handleProductCount}/>
      <ButtonFiled className="symbol" content="+" />
 </div> 
  );
};

export default ProductCount;
