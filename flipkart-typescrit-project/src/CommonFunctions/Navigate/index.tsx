export type HanglenavigateType = {
    event: React.MouseEvent<HTMLDivElement>; 
    navigate: (name: string) => void; 
  };
  
  export const handleNavigate = (event: HanglenavigateType['event'], navigate: HanglenavigateType['navigate'], name: string) => {
    event.preventDefault();
    navigate(name);
    
  };