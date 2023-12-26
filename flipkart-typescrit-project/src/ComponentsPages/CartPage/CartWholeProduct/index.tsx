import "./index.scss";
import { CartSingleProducts } from "../../../Types";
import CartSingleProduct from "../CartSingleProduct";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getAllCartDataFunction } from "../../../API Functions/CartPageAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useNavigate } from "react-router-dom";
import { postAllcheckoutDataAPI } from "../../../API Functions/CheckoutAPI";
import { toJS } from "mobx";
const CartwholeProduct = observer(() => {
  const navigate = useNavigate();
  const {
    rootStore: { userStore, cartStore },
  } = useStore();

  const {
    data: getAllCartDatas,
    error: errorOnCartData,
    isLoading: cartDataLoading,
  } = useQuery({
    queryKey: ["getAllCartData"],
    queryFn: () => getAllCartDataFunction(userStore?.email),
  });

  useEffect(() => {
    cartStore.setAllCartProducts(getAllCartDatas);
  }, [getAllCartDatas]);

  const [data, setData] = useState<number | null>(null);

  const handleSetStateOnChange = (value: number) => {
    setData(value);
  };

  let cartItems: [] = [],
    totalCost: number = 0;
  getAllCartDatas && ({ cartItems, totalCost } = getAllCartDatas);

  const addToCheckOutMutation = useMutation({
    mutationFn: () =>
      postAllcheckoutDataAPI(cartStore.allCartProducts, userStore.email),
  });

  const handlePlaceOrder = async () => {
    await addToCheckOutMutation.mutateAsync();
    navigate("/checkout");
  };
  if (cartDataLoading) return <>Loading</>;

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
