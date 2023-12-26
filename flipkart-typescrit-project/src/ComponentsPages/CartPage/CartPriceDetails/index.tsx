import { observer } from "mobx-react-lite";
import "./index.scss";
import { useStore } from "../../../ContextHooks/UseStore";
import { toJS } from "mobx";
import { useLocation } from "react-router-dom";
import { formatNumberWithComma } from "../../../CommonFunctions/Amount";
import { cartStoreType } from "../../../Types/StoreType";
const CartPriceDetails = observer(() => {
  const {
    rootStore: { cartStore, checkoutStore },
  } = useStore();
  const location = useLocation();
  const dataObj: cartStoreType =
    location.pathname === "/cart"
      ? cartStore.allCartProducts
      : checkoutStore.checkoutProduct;

  if (!dataObj) return <>Loading</>;

  return (
    <div className="cart-price">
      <p className="cart-price-details-heading">PRICE DETAILS</p>
      <div className="cart-price-container">
        <div className="cart-price-single-detials">
          <p className="cart-price-left-heading">Price ( item)</p>
          <p className="cart-price-right-price">
            ₹{formatNumberWithComma(dataObj?.totalCost)}
          </p>
        </div>
        <div className="cart-price-single-detials">
          <p className="cart-price-left-heading">Discount</p>{" "}
          <p className="cart-price-right-price">
            -₹{formatNumberWithComma(dataObj?.discountCost )}
          </p>
        </div>
        <div className="cart-price-single-detials cart-price-single-detials-last ">
          <p className="cart-price-left-heading">Delivery Charges</p>
          <p className="cart-price-right-price">Free Delivery</p>
        </div>
      </div>
      <div className="cart-price-total-amout">
        <div className="cart-price-total">
          <h6 className="cart-price-left-heading">Total Amount</h6>
          <h6 className="cart-price-right-price">
            ₹{formatNumberWithComma(dataObj?.totalDiscountPrice )}
          </h6>
        </div>
      </div>
      <p className="cart-price-saves">
        You will save ₹{formatNumberWithComma(dataObj?.discountCost)} on this
        order
      </p>
    </div>
  );
});

export default CartPriceDetails;
