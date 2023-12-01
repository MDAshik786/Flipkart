import { CounterStore } from "../CounterStore";
import { SingleProductCounters } from "../ProductCounterStore";
import { WishListStore } from "../WishListStore/indx";

export interface IRootStore {
    counterStore : CounterStore
    productCounterStore : SingleProductCounters
    wishListStore : WishListStore
}

export class RootStore implements IRootStore {
    counterStore : CounterStore
    productCounterStore: SingleProductCounters;
    wishListStore : WishListStore
    
    constructor() {
        this.counterStore = new CounterStore(this)
        this.productCounterStore = new SingleProductCounters(this)
        this.wishListStore = new WishListStore(this)
    }
}