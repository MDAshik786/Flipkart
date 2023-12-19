import "./index.scss";
import { CartSingleProducts } from "../../../Types";
import CartSingleProduct from "../CartSingleProduct";
import { useQuery } from "@tanstack/react-query";
import { getAllCartDataFunction } from "../../../API Functions/CartPageAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useNavigate } from "react-router-dom";
const CartwholeProduct = observer(() => {
  const {
    rootStore: { userStore, checkoutStore, cartStore },
  } = useStore();

  const navigate = useNavigate();
  const [data, setData] = useState<number | null>(null);

  const handleSetStateOnChange = (value: number) => {
    setData(value);
  };

  const {
    data: getAllCartDatas,
    error: errorOfCartData,
    isLoading: errorOnCartData,
  } = useQuery({
    queryKey: ["getAllCartData"],
    queryFn: () => getAllCartDataFunction(userStore?.email),
  });
  useEffect(() => {
    cartStore.allCartProducts = getAllCartDatas;
  }, [getAllCartDatas]);

  let cartItems: [] = [],
    totalCost: number = 0;
  getAllCartDatas && ({ cartItems, totalCost } = getAllCartDatas);

  const handlePlaceOrder = () => {
    checkoutStore.checkoutProduct = cartItems;
    navigate("/checkout");
  };

  return (
    <div>
      <div className="cart-product">
        {cartItems &&
          cartItems.map((product: CartSingleProducts, index: number) => {
            return (
              <CartSingleProduct
                products={product}
                key={index}
                index={index}
                data={data}
                handleSetStateOnChange={handleSetStateOnChange}
              />
            );
          })}
      </div>
      <div className="place-order-container">
        <ButtonFiled
          content="PLACE ORDER"
          className="Place-order-button"
          onClick={handlePlaceOrder}
        />
      </div>
    </div>
  );
});

export default CartwholeProduct;
