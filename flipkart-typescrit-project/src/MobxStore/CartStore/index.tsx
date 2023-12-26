import { action, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";
import { cartStoreType } from "../../Types/StoreType";



export class CartStore {
  allCartProducts : cartStoreType = {} as cartStoreType;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      allCartProducts: observable,
      setAllCartProducts : action
    });

    this.rootStore = rootStore;
  }

 setAllCartProducts = (value : cartStoreType) => {
  this.allCartProducts = value
 }
  
}
