import "./index.scss";
import { CartSingleProducts } from "../../../Types";
import CartSingleProduct from "../CartSingleProduct";
import { useQuery } from "@tanstack/react-query";
import { getAllCartData } from "../../../API Functions/CartPageAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
const CartwholeProduct = () => {
  const {
    rootStore: { userStore },
  } = useStore();

  const [data, setData] = useState<number | null>(null);

  const handleSetStateOnChange = (value : number) => {
    setData(value)
  }

  const {
    data: getAllCartDatas,
    error: errorOfCartData,
    isLoading: errorOnCartData,
  } = useQuery({
    queryKey: ["getAllCartData"],
    queryFn: () => getAllCartData(userStore?.email),
  });

  let cartItems: [] = [],
    totalCost: number = 0;
  getAllCartDatas && ({ cartItems, totalCost } = getAllCartDatas);

  return (
    <div className="cart-product">
      {cartItems &&
        cartItems.map((product: CartSingleProducts, index: number) => {
          return (
            <CartSingleProduct products={product} key={index} index={index} data={data} handleSetStateOnChange={handleSetStateOnChange}/>
          );
        })}
    </div>
  );
};

export default observer(CartwholeProduct);
