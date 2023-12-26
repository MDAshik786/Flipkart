import "./index.scss";
import { CartSingleProducts } from "../../../Types";
import CartSingleProduct from "../CartSingleProduct";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useStore } from "../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useNavigate } from "react-router-dom";
import AllCartProductQuery from "../../../APIQueryFunction/CartQuery/AllCartProductQuery";
import AddACheckoutProductMutation from "../../../APIQueryFunction/CheckoutQuery/AddACheckoutProductMutation";
const CartwholeProduct = observer(() => {
  const navigate = useNavigate();

  const { data: getAllCartDatas, error, isLoading } = AllCartProductQuery();

  const [data, setData] = useState<number | null>(null);

  const handleSetStateOnChange = (value: number) => {
    setData(value);
  };

  let cartItems: [] = [],
    totalCost: number = 0;
  getAllCartDatas && ({ cartItems, totalCost } = getAllCartDatas);

  const addToCheckOutMutation = AddACheckoutProductMutation();

  const handlePlaceOrder = async () => {
    await addToCheckOutMutation.mutateAsync();
    navigate("/checkout");
  };
  if (isLoading) return <>Loading</>;

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
