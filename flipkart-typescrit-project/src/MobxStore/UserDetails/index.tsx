import { action, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";
import { makePersistable } from "mobx-persist-store";

export interface newUserStoreType {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}

export interface loginUserStoreType {
  email: string ;
  password: string;
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
    });

    makePersistable(this, {
      name: "storeLoginData",
      properties: ["email", "password", "name", "phoneNumber"],
      storage: window.localStorage,
    });
    this.rootStore = rootStore;
  }

  setNewUserData({ email, password, name, phoneNumber }: newUserStoreType) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  setLoginUserData({ email, password} : loginUserStoreType) {
    this.email = email;
    this.password = password;
  }
}
