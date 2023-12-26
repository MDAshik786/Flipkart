import "./index.scss";
import { observer } from "mobx-react-lite";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { useStore } from "../../../ContextHooks/UseStore";
import UnVerifiedContainer from "../UnVerifiedContainer";
import VerifiedContainer from "../VerifiedContainer";
import SingleProduct from "./SingleProduct";
import { CartSingleProducts } from "../../../Types";
import { useQuery } from "@tanstack/react-query";
import { getAllCheckoutDataAPI } from "../../../API Functions/CheckoutAPI";
import { useEffect } from "react";

const OrderSummary = observer(() => {
  const {
    rootStore: { checkoutStore, userStore },
  } = useStore();
  const {
    checkoutData,
    checkoutVerification,
    checkoutProduct,
    setCheckoutData,
    verificationFunction,
    changeOrderSummary,
  } = checkoutStore;

  const {
    data: allChechoutData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["getAllCheckoutData"],
    queryFn: () => getAllCheckoutDataAPI(userStore?.email),
  });

  useEffect(() => {
    setCheckoutData(allChechoutData);
    refetch();
  }, [allChechoutData]);

  const unVerifiedData = {
    number: 3,
    name: "ORDER SUMMARY",
  };
  const verifiedContainerData = {
    number: 3,
    name: "ORDER SUMMARY",
    content: [`${checkoutProduct?.cartItems?.length || "0"} items`],
    onclick: changeOrderSummary,
  };

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      {checkoutVerification.orderSummary ? (
        <VerifiedContainer data={verifiedContainerData} />
      ) : !checkoutData.orderSummary ? (
        <UnVerifiedContainer data={unVerifiedData} />
      ) : (
        checkoutData.orderSummary &&
        !checkoutVerification.orderSummary && (
          <div className="main-checkout-product">
            <div className="heading-product">
              <p>
                You can continue to place order with following avaliable items.
              </p>
              {checkoutProduct?.cartItems?.map(
                (data: CartSingleProducts, index: number) => (
                  <SingleProduct key={index} data={data} />
                )
              )}
            </div>
            <div className="email-container">
              <p className="email-details">
                Order confirmation email will be sent to
                <span className="email">rioashik786@gmail.com</span>
              </p>
              <ButtonFiled
                content="CONTINUE"
                className="cancel-checkout-button"
                onClick={() =>
                  verificationFunction("orderSummary", "paymentOption")
                }
              />
            </div>
          </div>
        )
      )}
    </>
  );
});
export default OrderSummary;
