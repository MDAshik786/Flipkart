import { action, computed, makeObservable, observable, toJS } from "mobx";
import { IRootStore } from "../RootStore";

export class WishListStore {
  allWishListProduct: [] = [];
  specificWishListProduct: [] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      allWishListProduct: observable,
      specificWishListProduct: observable,
      setFunctionSpecifcProduct: action,
      setFunctionAllWishlistProduct : action, 
      getSpecificWishList: computed,
      getAllWishlistProduct : computed
    });

    this.rootStore = rootStore;
  }

  setFunctionSpecifcProduct = (value: []) => {
    this.specificWishListProduct = value;
  };

  setFunctionAllWishlistProduct = (value: []) => {
    this.allWishListProduct = value;
  };

  get getSpecificWishList() {
    return this.specificWishListProduct;
  }

  get getAllWishlistProduct() {
    return this.allWishListProduct;
  }
}
