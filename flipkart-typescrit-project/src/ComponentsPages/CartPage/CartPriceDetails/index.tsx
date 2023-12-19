import { observer } from "mobx-react-lite";
import "./index.scss";
const CartPriceDetails = () => {
  return (
    <div className="cart-price">
      <p className="cart-price-details-heading">PRICE DETAILS</p>
      <div className="cart-price-container">
        <div className="cart-price-single-detials">
          <p className="cart-price-left-heading">Price (1 item)</p>
          <p className="cart-price-right-price">₹900</p>
        </div>
        <div className="cart-price-single-detials">
          <p className="cart-price-left-heading">Discount</p>{" "}
          <p className="cart-price-right-price">-₹516</p>
        </div>
        <div className="cart-price-single-detials cart-price-single-detials-last ">
          <p className="cart-price-left-heading">Delivery Charges</p>
          <p className="cart-price-right-price">Free Delivery</p>
        </div>
      </div>
      <div className="cart-price-total-amout">
        <div className="cart-price-total">
          <h6 className="cart-price-left-heading">Total Amount</h6>
          <h6 className="cart-price-right-price">₹900</h6>
        </div>
      </div>
      <p className="cart-price-saves">You will save ₹517 on this order</p>
    </div>
  );
};

export default observer(CartPriceDetails);
