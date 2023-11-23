import { CounterStore } from "../CounterStore";
import { SingleProductCounters } from "../ProductCounterStore";

export interface IRootStore {
    counterStore : CounterStore
    productCounterStore : SingleProductCounters
}

export class RootStore implements IRootStore {
    counterStore : CounterStore
    productCounterStore: SingleProductCounters;
    
    constructor() {
        this.counterStore = new CounterStore(this)
        this.productCounterStore = new SingleProductCounters(this)
    }
}