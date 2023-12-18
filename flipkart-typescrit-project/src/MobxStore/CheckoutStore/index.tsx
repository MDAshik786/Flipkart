import { makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { IRootStore } from "../RootStore";
import { checkOutStoreType } from "../../Types/StoreType";

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
  checkoutProduct: [] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      checkoutData: observable,
    });

    makePersistable(this, {
      name: "checkoutData",
      properties: ["checkoutData"],
      storage: window.localStorage,
    });
    this.rootStore = rootStore;
  }
}
