import { action, computed, makeObservable, observable } from "mobx";

export class Store {
  scrollingImageIndex: number = 0;
  productCount: object = {}

  constructor() {
    makeObservable(this, {
      scrollingImageIndex: observable,
      productCount : observable,
      // increase: action,
      // decrease: action,
      increment: computed,
      autoIncrement: action,
    });
    this.autoIncrement();
  }
  // increase = () => {
  //   this.scrollingImageIndex++;
  // };
  // decrease = () => {
  //   return this.scrollingImageIndex--;
  // };
  get increment() {
    if (this.scrollingImageIndex === 5) return (this.scrollingImageIndex = 0);
    return this.scrollingImageIndex++;
  }
  get decrement() {
    if (this.scrollingImageIndex === 0) return (this.scrollingImageIndex = 5);
    return this.scrollingImageIndex--;
  }

  autoIncrement = () => {
    setInterval(() => {
      console.log(this.scrollingImageIndex, "index");
      if (this.scrollingImageIndex === 5) {
        this.scrollingImageIndex = 0;
      } else {
        this.scrollingImageIndex++;
      }
    }, 2500);
  };
}
export const ScrollingImage = new Store();
