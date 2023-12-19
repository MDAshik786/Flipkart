import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";
import { SingleProductCountersClassType } from "../../Types/ClassType";

export class SingleProductCounters {
  productCounters: SingleProductCountersClassType = {};
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      productCounters: observable,
      addAProductCounter: action,
      incrementAProductCounter: action,
      decrementAProductCounter: action,
      addQuantityFunction: action,
      getProductCounter: computed,
    });
    this.rootStore = rootStore;
  }

  addAProductCounter(id: number, value: number) {
    this.productCounters = { ...this.productCounters, [id]: value };
  }

  incrementAProductCounter = (id: number) => {
    this.productCounters = {
      ...this.productCounters,
      [id]: this.productCounters[id] ? this.productCounters[id] + 1 : 2,
    };
  };

  decrementAProductCounter = (id: number) => {
    this.productCounters = {
      ...this.productCounters,
      [id]: this.productCounters[id] ? this.productCounters[id] - 1 : 1,
    };
  };
  addQuantityFunction = (id: number, quantity: number) => {
    this.productCounters = {
      ...this.productCounters,
      [id]: quantity,
    };
  };
  get getProductCounter() {
    return this.productCounters;
  }
}
