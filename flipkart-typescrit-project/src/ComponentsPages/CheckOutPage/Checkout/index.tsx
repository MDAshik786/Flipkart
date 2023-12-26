import "./index.scss";
import CartHeader from "../../CartPage/CartHeader";
import CartPriceDetails from "../../CartPage/CartPriceDetails";
import LoginContainer from "../LoginContainer";
import NewAddress from "../Address/NewAddress";
import OrderSummary from "../OrderSummary";
import Payment from "../Payment";
import DeliveryAddress from "../Address/DeliveryAddress";
import { observer } from "mobx-react-lite";

const Checkout = observer(() => {
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
       <div className="right-checkout">
       <CartPriceDetails />
       </div>
      </div>
    </>
  );
});

export default Checkout;
