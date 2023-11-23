import { createContext } from "react";
import { RootStore } from "../../MobxStore/RootStore";

export const RootStoreContext = createContext({
    rootStore : new RootStore()
})