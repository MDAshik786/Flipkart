import { CartStore } from "../CartStore";
import { CheckoutStore } from "../CheckoutStore";
import { CounterStore } from "../CounterStore";
import { SingleProductCounters } from "../ProductCounterStore";
import { ProductImageStore } from "../ProductImageStore";
import { UserStore } from "../UserDetails";
import { WishListStore } from "../WishListStore/indx";

export interface IRootStore {
    counterStore : CounterStore
    productCounterStore : SingleProductCounters
    wishListStore : WishListStore 
    userStore : UserStore
    productImageStore : ProductImageStore
    checkoutStore : CheckoutStore
    cartStore : CartStore
}

export class RootStore implements IRootStore {
    counterStore : CounterStore
    productCounterStore: SingleProductCounters;
    wishListStore : WishListStore
    userStore: UserStore;
    productImageStore : ProductImageStore;
    checkoutStore : CheckoutStore
    cartStore: CartStore;
    
    constructor() {
        this.counterStore = new CounterStore(this)
        this.productCounterStore = new SingleProductCounters(this)
        this.wishListStore = new WishListStore(this)
        this.userStore = new UserStore(this)
        this.productImageStore = new ProductImageStore(this)
        this.checkoutStore = new CheckoutStore(this)
        this.cartStore = new CartStore(this)

    }
}