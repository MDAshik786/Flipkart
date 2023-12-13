import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import "./index.scss";

const OrderSummary = () => {
  return (
    <>
      <div className="order-summary-heading">
        <p className="row-number">3</p>
        <h4 className="heading">ORDER SUMMARY</h4>
      </div>

      <div className="main-checkout-product">
        <div className="heading-product">
          <p>You can continue to place order with following avaliable items.</p>
          <div className="product">
            <div className=""></div>

            <div className="product-details">
              <p>name</p>
            </div>
            <p className="delivery-date">Delivery by Sun Dec 17 | Free</p>
          </div>
        </div>
        <div className="email-container">
          <p className="email-details">
            Order confirmation email will be sent to
            <span className="email">rioashik786@gmail.com</span>
          </p>
          <ButtonFiled content="CONTINUE" className="cancel-checkout-button" />
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
