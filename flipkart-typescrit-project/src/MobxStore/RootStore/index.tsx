import { CounterStore } from "../CounterStore";
import { SingleProductCounters } from "../ProductCounterStore";
import { UserStore } from "../UserDetails";
import { WishListStore } from "../WishListStore/indx";

export interface IRootStore {
    counterStore : CounterStore
    productCounterStore : SingleProductCounters
    wishListStore : WishListStore 
    userStore : UserStore
}

export class RootStore implements IRootStore {
    counterStore : CounterStore
    productCounterStore: SingleProductCounters;
    wishListStore : WishListStore
    userStore: UserStore;
    
    constructor() {
        this.counterStore = new CounterStore(this)
        this.productCounterStore = new SingleProductCounters(this)
        this.wishListStore = new WishListStore(this)
        this.userStore = new UserStore(this)
    }
}