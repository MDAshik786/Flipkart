import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";
import { toJS } from "mobx";

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

        console.log(id, value, toJS(this.productCounters), "value")
        id && (this.productCounters = { ...this.productCounters, [id]: value })
    }

    incrementAProductCounter = (id: number | undefined) => {
        console.log("increment")
        id && (this.productCounters = {
            ...this.productCounters,
            [id]: this.productCounters[id] ? this.productCounters[id] + 1 : 2,
        })

    };

    decrementAProductCounter = (id: number | undefined) => {
        console.log(this.productCounters, id, "decrement")
        id && (this.productCounters = {
            ...this.productCounters,
            [id]: this.productCounters[id] ? this.productCounters[id] - 1 : 1
        })
    }
    get getProductCounter() {
        return this.productCounters;
    }
}