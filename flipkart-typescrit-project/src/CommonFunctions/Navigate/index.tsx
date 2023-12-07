import { HanglenavigateType } from "../../Types";

  
  export const handleNavigate = (event: HanglenavigateType['event'], navigate: HanglenavigateType['navigate'], name: string) => {
    event.preventDefault();
    navigate(name);
    
  };