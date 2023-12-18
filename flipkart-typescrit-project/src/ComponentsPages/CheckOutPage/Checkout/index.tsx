import "./index.scss";
import CartHeader from "../../CartPage/CartHeader";
import CartPriceDetails from "../../CartPage/CartPriceDetails";
import LoginContainer from "../LoginContainer";
import NewAddress from "../Address/NewAddress";
import OrderSummary from "../OrderSummary";
import Payment from "../Payment";
import DeliveryAddress from "../Address/DeliveryAddress";

const Checkout = () => {
  return (
    <>
      <CartHeader />
      <div className="checkout">
        <div className="checkout-left">
          <LoginContainer />
          <DeliveryAddress />
          <NewAddress />
          <OrderSummary />
          <Payment />
        </div>
        <CartPriceDetails />
      </div>
    </>
  );
};

export default Checkout;
