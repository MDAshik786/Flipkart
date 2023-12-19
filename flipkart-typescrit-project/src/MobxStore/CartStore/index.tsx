import { makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";

export class CartStore {
  allCartProducts: [] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      allCartProducts: observable,
    });

    this.rootStore = rootStore;
  }

 
  
}
