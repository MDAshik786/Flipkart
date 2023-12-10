import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";
import { makePersistable } from "mobx-persist-store";
import { inputDataType, loginUserStoreType } from "../../Types";




export class UserStore {
  email: string = "";
  password: string = "";
  name: string = "";
  phoneNumber: string = "";
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      email: observable,
      password: observable,
      name: observable,
      phoneNumber: observable,
      setNewUserData: action,
      setLoginUserData: action,
      isUserLoginOrNot: computed,
      clearUserData: action,
      getIsLogin: computed,
    });

    makePersistable(this, {
      name: "storeLoginData",
      properties: ["email", "password", "name", "phoneNumber"],
      storage: window.localStorage,
    });
    this.rootStore = rootStore;
  }

   get isUserLoginOrNot() {
    return this.email !== "" ? true : false;
  }

  get getIsLogin() {
    return this.email !== "" ? "Sign Out" : "Sign In";
  }

  clearUserData() {
    this.email = "";
    this.password = "";
    this.name = "";
    this.phoneNumber = "";
    localStorage.removeItem("storeLoginData");
  }

  setNewUserData(inputDat: inputDataType) {
    this.email = inputDat.email.toLowerCase();
    this.password = inputDat.password;
    this.name = inputDat.name;
    this.phoneNumber = inputDat.phone;
  }

  setLoginUserData({ emailInput, passwordInput }: loginUserStoreType) {
    console.log(emailInput, passwordInput, "setLoginUserData");
    this.email = emailInput.toLowerCase()
    this.password = passwordInput;
  }
}
