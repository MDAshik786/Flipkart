import { action, makeObservable, observable, toJS } from "mobx";
import { IRootStore } from "../RootStore";

export class WishListStore {
 
    allWishListProduct : [] = [];
    specificWishListProduct : [] = [];
    rootStore : IRootStore;

    constructor(rootStore : IRootStore) {

        makeObservable(this, {
            allWishListProduct : observable,
            specificWishListProduct : observable,
            setFunction : action
        })

        this.rootStore = rootStore
    }
    
    setFunction = (value : []) => {
        this.specificWishListProduct = value;
    }
 

    
}