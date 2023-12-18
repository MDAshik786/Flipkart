import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useStore } from "../../../ContextHooks/UseStore";
import UnVerifiedContainer from "../UnVerifiedContainer";
import "./index.scss";

const OrderSummary = () => {
  const {
    rootStore: { checkoutStore },
  } = useStore();
  const { checkoutData } = checkoutStore;

  const unVerifiedData = {
    number: 3,
    name: "ORDER SUMMARY",
  };

  return (
    <>
      {!checkoutData.orderSummary && (
      <UnVerifiedContainer data={unVerifiedData}/>
      )}

      {checkoutData.orderSummary && (
        <div className="main-checkout-product">
          <div className="heading-product">
            <p>
              You can continue to place order with following avaliable items.
            </p>
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
            <ButtonFiled
              content="CONTINUE"
              className="cancel-checkout-button"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default OrderSummary;
