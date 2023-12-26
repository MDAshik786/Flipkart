import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { IRootStore } from "../RootStore";
import { cartStoreType, checkOutStoreType } from "../../Types/StoreType";

export class CheckoutStore {
  checkoutData: checkOutStoreType = {
    login: true,
    DeliveryAddress: false,
    newAddress: false,
    orderSummary: false,
    paymentOption: false,
  };
  checkoutVerification: checkOutStoreType = {
    login: false,
    DeliveryAddress: false,
    newAddress: false,
    orderSummary: false,
    paymentOption: false,
  };
  checkoutProduct:  cartStoreType = {} as cartStoreType;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      checkoutData: observable,
      checkoutVerification: observable,
      checkoutProduct: observable,
      verificationFunction: action,
      addANewAddress : action,
      changeLoginFunction : action,
      changeDeliveryAddressFunction : action,
      changeOrderSummary : action,
      changePaymentOption : action,
      setCheckoutData : action

    });

    makePersistable(this, {
      name: "checkoutData",
      properties: ["checkoutData", "checkoutVerification"],
      storage: window.localStorage,
    });
    this.rootStore = rootStore;
  }

  setCheckoutData = (value : cartStoreType) => {
    this.checkoutProduct = value
  }

  verificationFunction = (value: string, nextValue?: string) => {
    this.checkoutData = {
      ...this.checkoutData,
      [value]: true,
      ...(nextValue ? { [nextValue]: true } : {}),
    };
    this.checkoutVerification = {
      ...this.checkoutVerification,
      [value]: true,
    };
  };

  addANewAddress = (value : boolean) => {
    this.checkoutData = {
      ...this.checkoutData,
      newAddress : value
    }
  }

  changeLoginFunction = () => {
    this.checkoutData = {
      login: true,
      DeliveryAddress: false,
      newAddress: false,
      orderSummary: false,
      paymentOption: false,
    };

    this.checkoutVerification = {
      login: false,
      DeliveryAddress: false,
      newAddress: false,
      orderSummary: false,
      paymentOption: false,
    };
  };

  changeDeliveryAddressFunction = () => {
    this.checkoutData = {
      login: true,
      DeliveryAddress: true,
      newAddress: false,
      orderSummary: false,
      paymentOption: false,
    };

    this.checkoutVerification = {
      login: true,
      DeliveryAddress: false,
      newAddress: false,
      orderSummary: false,
      paymentOption: false,
    };
  };

  changeOrderSummary = () => {
    this.checkoutData = {
      ...this.checkoutData,
      orderSummary: true,
      paymentOption: false,
    };

    this.checkoutVerification = {
      ...this.checkoutVerification,
      orderSummary: false,
      paymentOption: false,
    };
  };

  changePaymentOption = () => {
    this.checkoutData = {
      ...this.checkoutData,
      paymentOption: true,
    };

    this.checkoutVerification = {
      ...this.checkoutVerification,
      paymentOption: false,
    };
  };
}
