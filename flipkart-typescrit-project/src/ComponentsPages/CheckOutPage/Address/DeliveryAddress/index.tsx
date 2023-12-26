import "./index.scss";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../ContextHooks/UseStore";
import UnVerifiedContainer from "../../UnVerifiedContainer";
import VerifiedContainer from "../../VerifiedContainer";
import SingleAddress from "../SingleAddress";
import GetAllAddressQuery from "../../../../APIQueryFunction/AddressQuery/GetAllAddressQuery";



const DeliveryAddress = observer(() => {
  const {
    rootStore: { checkoutStore, userStore },
  } = useStore();
  const { checkoutData, checkoutVerification, changeDeliveryAddressFunction } =
    checkoutStore;

  const unverifiedData = {
    number: 2,
    name: "DELIVERY ADDRESS",
  };
  const verifiedContainerData = {
    number: 1,
    name: "DELIVERY ADDRESS",
    content: ["16", "Pallivasal Strret", "Periyakalayam Puthur", "Palani"],
    onclick: changeDeliveryAddressFunction,
  };

  const { data, error, isLoading, refetch } = GetAllAddressQuery();

  return (
    <>
      {checkoutVerification.DeliveryAddress ? (
        <VerifiedContainer data={verifiedContainerData} />
      ) : !checkoutData.DeliveryAddress ? (
        <UnVerifiedContainer data={unverifiedData} />
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
});

export default DeliveryAddress;
