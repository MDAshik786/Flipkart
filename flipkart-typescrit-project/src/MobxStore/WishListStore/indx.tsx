import { action, computed, makeObservable, observable, toJS } from "mobx";
import { IRootStore } from "../RootStore";

export class WishListStore {
 
    allWishListProduct : [] = [];
    specificWishListProduct : [] = [];
    rootStore : IRootStore;

    constructor(rootStore : IRootStore) {

        makeObservable(this, {
            allWishListProduct : observable,
            specificWishListProduct : observable,
            setFunction : action,
            getSpecificWishList : computed
        })

        this.rootStore = rootStore
    }
    
    setFunction = (value : []) => {
        this.specificWishListProduct = value;
    }

    get getSpecificWishList (){
        return this.specificWishListProduct;
    }
 

    
}