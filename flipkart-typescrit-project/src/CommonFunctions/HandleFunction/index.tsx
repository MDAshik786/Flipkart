import { setStateObject, setStateType } from "../../Types";

export   const handleUpdateChange = (updateState : boolean, setUpdateState : setStateType ) => {
    setUpdateState((preState) => !preState);
  }; 

  export const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>, setState : setStateObject) => {
    
    const {name, value } = e.target

    setState((state) => ({
      ...state,
      [name]: value,
    }));
    
   
  }