import "./index.scss";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import ImageField from "../../../CommonUsedComponents/ImageField";
import InputFiled from "../../../CommonUsedComponents/InputField";
import upiGif from "../../../Asserts/Images/UPI.gif";
import { useState } from "react";
import { useStore } from "../../../ContextHooks/UseStore";
import UnVerifiedContainer from "../UnVerifiedContainer";
import VerifiedContainer from "../VerifiedContainer";
import { observer } from "mobx-react-lite";

const Payment = observer(() => {
  const [paymentSelection, setPaymentSelection] = useState<string>("");
  const [upiId, setUpiId] = useState<string>("");

  const handleOnChangeRadio = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(value);
  };

  const {
    rootStore: { checkoutStore },
  } = useStore();
  const { checkoutData, checkoutVerification, changePaymentOption } =
    checkoutStore;

  const unverifiedData = {
    number: 4,
    name: "PAYMENT OPTION",
  };
  const verifiedContainerData = {
    number: 1,
    name: "PAYMENT OPTION",
    content: ["Moahmed Ashik", "9122581422"],
    onclick: changePaymentOption,
  };

  return (
    <>
      {checkoutVerification.paymentOption ? (
        <VerifiedContainer data={verifiedContainerData} />
      ) : !checkoutData.paymentOption ? (
        <UnVerifiedContainer data={unverifiedData} />
      ) : (
        <div className="payment">
          <div className="top-heading-conatainer">
            <p className="row-number">4</p>
            <h4 className="payment-heading">PAYMENT OPTIONS</h4>
          </div>
          <div className="radio-container">
            <InputFiled
              type="radio"
              name="paymentSelection"
              className="upi-radio"
              id="upi"
              value={paymentSelection}
              onChange={() => handleOnChangeRadio("upi", setPaymentSelection)}
            />
            <ImageField src={upiGif} alt="UPI" className="upi-img" />
            <div className="upi-container">
              <p>UPI</p>
              {paymentSelection === "upi" && <p>Choose an option</p>}
              {paymentSelection === "upi" && (
                <div className="ur-upi-container">
                  <InputFiled
                    type="radio"
                    name="yourupi"
                    className="upi-radio"
                  />
                  <div className="ur-upi-id">
                    <p>Your UPI ID</p>
                    <div className="upi-id-container">
                      <InputFiled
                        type="text"
                        className="upi-id"
                        value={upiId}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleOnChangeRadio(e.target.value, setUpiId)
                        }
                      />
                      <ButtonFiled
                        content={"pay 34,334"}
                        className="payment-ruppess"
                      />
                    </div>
                    <span>Pay by any UPI app</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="cash-on-delivery">
            <InputFiled
              type="radio"
              className="upi-radio"
              name="paymentSelection"
              id="cod"
              value={paymentSelection}
              onChange={() => handleOnChangeRadio("cod", setPaymentSelection)}
            />
            <p>Cash on Delivery</p>
          </div>
        </div>
      )}
    </>
  );
});

export default Payment;
