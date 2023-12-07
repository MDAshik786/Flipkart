import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";
import { makePersistable } from "mobx-persist-store";

export interface newUserStoreType {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}

export interface loginUserStoreType {
  emailInput: string;
  passwordInput: string;
}

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
    // console.log(this.email !== "" ? true : false, "isLogin");
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

  setNewUserData({ email, password, name, phoneNumber }: newUserStoreType) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  setLoginUserData({ emailInput, passwordInput }: loginUserStoreType) {
    console.log(emailInput, passwordInput, "setLoginUserData");
    this.email = emailInput
    this.password = passwordInput;
  }
}
