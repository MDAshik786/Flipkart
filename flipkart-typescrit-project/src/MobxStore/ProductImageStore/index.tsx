import { action, computed, makeObservable, observable, toJS } from "mobx";
import { IRootStore } from "../RootStore";

export type productImageStoreType = {
  [key: number]: string;
};
export class ProductImageStore {
  productImages: productImageStoreType = {};
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      productImages: observable,
      setColorFunction: action,
      getProductImages: computed,
    });
    this.rootStore = rootStore;
  }
  setColorFunction = (id: number, value: string) => {
    this.productImages = {
      ...this.productImages,
      [id]: value,
    };
  };

  get getProductImages() {
    return this.productImages;
  }
}
