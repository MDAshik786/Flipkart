import "./index.scss";
import { CartSingleProducts } from "../../../Types";
import CartSingleProduct from "../CartSingleProduct";
import { useQuery } from "@tanstack/react-query";
import { getAllCartData } from "../../../API Functions/CartPageAPI";
//"react-query": "^3.39.3",
const CartwholeProduct = () => {
  const {
    data: getAllCartDatas,
    error: errorOfCartData,
    isLoading: errorOnCartData,
  } = useQuery({
    queryKey: ["getAllCartData"],
    queryFn: () => getAllCartData(),
  });

  let cartItems: [] = [],
    totalCost: number = 0;
  getAllCartDatas && ({ cartItems, totalCost } = getAllCartDatas);

  return (
    <div className="cart-product">
      {cartItems &&
        cartItems.map((product: CartSingleProducts, index: number) => {
          return <CartSingleProduct products={product} key={index} />;
        })}
    </div>
  );
};

export default CartwholeProduct;
