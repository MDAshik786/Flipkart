import "./index.scss";
import CartHeader from "../../CartPage/CartHeader";
import CartPriceDetails from "../../CartPage/CartPriceDetails";
import LoginContainer from "../LoginContainer";
import NewAddress from "../NewAddress";
import OrderSummary from "../OrderSummary";

const Checkout = () => {
  return (
    <>
      <CartHeader />
      <div className="checkout">
        <div className="checkout-left">
          <LoginContainer />
          <NewAddress />
          <OrderSummary />
        </div>
        <CartPriceDetails />
      </div>
    </>
  );
};

export default Checkout;
