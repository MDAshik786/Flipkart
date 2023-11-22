import { action, computed, makeObservable, observable } from "mobx";

export class Store {
  scrollingImageIndex: number = 0;
  productCounts: Record<number, number> = {};
  value: string = '';

  constructor() {
    makeObservable(this, {
      scrollingImageIndex: observable,
      productCounts: observable,
      value: observable,
      // increase: action,
      // decrease: action,
      increment: computed,
      decrement: computed,
      autoIncrement: action,
      productCountIncrement: action,
      productCountDecrement: action,
    });
    //  this.autoIncrement();
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
  handleChangeValue = (eventValue : any) => {
   return this.value = eventValue 
  };
  // handleChangeProductCounts = (eventValue : any, id : number | undefined) => {
  //   return this.productCounts = {
  //     ...this.productCounts,
  //     [id] : eventValue
  //   }
  // }
  autoIncrement = () => {
    setInterval(() => {
      if (this.scrollingImageIndex === 5) {
        this.scrollingImageIndex = 0;
      } else {
        this.scrollingImageIndex++;
      }
    }, 2500);
  };
  productCountIncrement = (id: number | undefined) => {
    if (id !== undefined) {
      this.productCounts = {
        ...this.productCounts,
        [id]: this.productCounts[id] ? this.productCounts[id] : 1 + 1,
      };
    }
  };
  productCountDecrement = (id: number | undefined) => {
    if (
      id !== undefined &&
      this.productCounts[id] !== undefined &&
      this.productCounts[id] > 0
    ) {
      this.productCounts = {
        ...this.productCounts,
        [id]: this.productCounts[id] - 1,
      };
    }
  };
}
export const ScrollingImage = new Store();
