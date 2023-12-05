import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";

export class SingleProductCounters {
    productCounters: any = {};
    rootStore: IRootStore;

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            productCounters: observable,
            addAProductCounter: action,
            incrementAProductCounter: action,
            decrementAProductCounter: action,
            getProductCounter: computed

        })
        this.rootStore = rootStore
    }
    
    addAProductCounter(id: number, value: number) {
        this.productCounters = { ...this.productCounters, [id]: value }
    }

    incrementAProductCounter = (id: number) => {

        this.productCounters = {
            ...this.productCounters,
            [id]: this.productCounters[id] ? this.productCounters[id] + 1 : 2,
        }

    };

    decrementAProductCounter = (id: number) => {
       this.productCounters = {
            ...this.productCounters,
            [id]: this.productCounters[id] ? this.productCounters[id] - 1 : 1
        }
    }
    get getProductCounter() {
        return this.productCounters;
    }
}