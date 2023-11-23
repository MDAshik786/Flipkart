import { useContext } from "react";
import { RootStoreContext } from "../ContextStore";

export const useStore = () => useContext(RootStoreContext)