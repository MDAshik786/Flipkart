import { useStore } from "../../../../ContextHooks/UseStore";
import UnVerifiedContainer from "../../UnVerifiedContainer";
import SingleAddress from "../SingleAddress";
import "./index.scss";

const verifiedContainerData = {
  number: 2,
  name: "DELIVERY ADDRESS",
  content: ["Moahmed Ashik", "9122581422"],
};

const DeliveryAddress = () => {
  const {
    rootStore: { checkoutStore },
  } = useStore();
  const { checkoutData } = checkoutStore;

  const unverifiedData = {
    number: 2,
    name: "DELIVERY ADDRESS",
  };

  return (
    <>
      {!checkoutData.DeliveryAddress ? (
        <UnVerifiedContainer  data = {unverifiedData}/>
      ) : (
        <div className="delivery-address">
          <div className="delivery-address-top">
            <p className="row-number">2</p>
            <h4>DELIVERY ADDRESS</h4>
          </div>
          <SingleAddress />
        </div>
      )}
    </>
  );
};

export default DeliveryAddress;
