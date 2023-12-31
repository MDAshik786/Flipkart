import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";

export class CounterStore {
  imageCounter: number = 0;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      imageCounter: observable,
      increment: action,
      decrement: action,
      getCounterValue: computed,
    });
    this.rootStore = rootStore;
  }

  increment = () => {
    this.imageCounter === 5 ? (this.imageCounter = 0) : this.imageCounter++;
  };
  decrement = () => {
    this.imageCounter === 0 ? (this.imageCounter = 5) : this.imageCounter--;
  };
  autoIncrement = () => {
    setInterval(() => {
      if (this.imageCounter === 5) {
        this.imageCounter = 0;
      } else {
        this.imageCounter++;
      }
    }, 3500);
  };
  get getCounterValue() {
    return this.imageCounter;
  }
}
