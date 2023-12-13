import "./index.scss";
import ImageField from "../../../CommonUsedComponents/ImageField";
import plusImage from "../../../Asserts/Images/plus.svg";
import InputFiled from "../../../CommonUsedComponents/InputField";
import { ChangeEventHandler, useState } from "react";
import FormInputField from "../../../CommonUsedComponents/FormInputField";
import { checkboxDataType } from "../../../Types/UserAccontType";
import { statesData } from "../../../Datas/States";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
const NewAddress = () => {
  type checkoutStateDataType = {
    [key: string]: string;
  };

  const [inputData, setInputData] = useState<checkoutStateDataType>({
    name: "",
    phone: "",
    pincode: "",
    locality: "",
    address: "",
    cityDistrict: "",
    landmark: "",
    alternativePhone: "",
    chooseAddress: "",
  });

  const [errorData, setErrorData] = useState<checkoutStateDataType>({
    name: "",
    phone: "",
    pincode: "",
    locality: "",
    address: "",
    cityDistrict: "",
    landmark: "",
    alternativePhone: "",
    chooseAddress: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setInputData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const checkoutFormData: checkboxDataType[] = [
    {
      name: "name",
      divClassName: "item0 checkbox-input-container",
      placeholderName: "Name",
      inputClassName: "input-type-name ",
      type: "text",
      spanClassName: "error-msg",
      errorMessage: errorData.name,
      value: inputData.name,
      onChange: handleOnChange,
    },
    {
      name: "phone",
      divClassName: "item1 checkbox-input-container",
      placeholderName: "10-digit mobile number",
      inputClassName: "input-type-name item1",
      type: "number",
      spanClassName: "error-msg",
      errorMessage: errorData.phone,
      value: inputData.phone,
      onChange: handleOnChange,
    },
    {
      name: "pincode",
      divClassName: "item2 checkbox-input-container",
      placeholderName: "Pincode",
      inputClassName: "input-type-name item2",
      type: "number",
      spanClassName: "error-msg",
      errorMessage: errorData.pincode,
      value: inputData.pincode,
      onChange: handleOnChange,
    },
    {
      name: "locality",
      divClassName: "item3 checkbox-input-container",
      placeholderName: "Locality",
      inputClassName: "input-type-name item3",
      type: "text",
      spanClassName: "error-msg",
      errorMessage: errorData.locality,
      value: inputData.locality,
      onChange: handleOnChange,
    },

    {
      name: "cityDistrict",
      divClassName: "item5 checkbox-input-container",
      placeholderName: "City And District",
      inputClassName: "input-type-name item5",
      type: "text",
      spanClassName: "error-msg",
      errorMessage: errorData.cityDistrict,
      value: inputData.cityDistrict,
      onChange: handleOnChange,
    },
    {
      name: "landmark",
      divClassName: "item7 checkbox-input-container",
      placeholderName: "Landmark ( Optional )",
      inputClassName: "input-type-name item7",
      type: "text",
      spanClassName: "error-msg",
      errorMessage: errorData.landmark,
      value: inputData.landmark,
      onChange: handleOnChange,
    },
    {
      name: "alternativePhone",
      divClassName: "item8 checkbox-input-container",
      placeholderName: "Alternative Phone (Optional)",
      inputClassName: "input-type-name item8",
      type: "text",
      spanClassName: "error-msg",
      errorMessage: errorData.alternativePhone,
      value: inputData.alternativePhone,
      onChange: handleOnChange,
    },
    {
      name: "chooseAddress",
      labelClassName: "address-type-name",
      divClassName: "item9 checkbox-radio-container",
      labelContent: "AddressType",
      inputClassName: "radio-type",
      type: "radio",
      value: "home",
      onClick: handleOnChange,
      radioContent: "Home ( All day delivery )",
    },
    {
      name: "chooseAddress",
      divClassName: "item10 checkbox-radio-container",
      inputClassName: "radio-type item10",
      type: "radio",
      value: "work",
      onClick: handleOnChange,
      radioContent: "Work ( Delivery Between 10AM - 5PM )",
    },
  ];

  return (
    <>
      <div className="add-new-address">
        <div>
          <ImageField src={plusImage} alt="add" className="add-new-img" />
        </div>
        <p className="add-new-name">Add a new address</p>
      </div>


      
      <form className="checkbox-form">
        <div className="add-new-address-radio radio-content">
          <InputFiled className="radio-type" type="radio" />
          <p className="add-new-name">ADD A NEW ADDRESS</p>
        </div>
        <div className="checkout-form grid-container">
          <FormInputField userData={checkoutFormData} />
          <textarea
            name="address"
            className="item4 input-type-name"
            placeholder="Address ( Area and Street)"
            value={inputData.address}
            onChange={handleOnChange}
          />

          <select
            name="pets"
            id="select-state"
            className="selected-field item6"
            value={inputData.state}
            onChange={handleOnChange}
          >
            <option value="Select State" disabled>
              Select State
            </option>
            {statesData.map((state: string, index: number) => (
              <option value={state} key={index}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <ButtonFiled content="SAVE AND DELIVER HERE" className="save-address" />
        <span className="calcel-text">CANCEL</span>
      </form>
    </>
  );
};

export default NewAddress;
