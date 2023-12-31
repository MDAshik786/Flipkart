import { action, computed, makeObservable, observable, toJS } from "mobx";
import { IRootStore } from "../RootStore";

export class WishListStore {
  allWishListProduct: [] = [];
  specificWishListProduct: number[] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      allWishListProduct: observable,
      specificWishListProduct: observable,
      setFunctionSpecifcProduct: action,
      setFunctionAllWishlistProduct: action,
      clearAllWishListData: action,
      getSpecificWishList: computed,
      getAllWishlistProduct: computed,
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
  clearAllWishListData = () => {
    this.allWishListProduct = [];
    this.specificWishListProduct = [];
  };
}
