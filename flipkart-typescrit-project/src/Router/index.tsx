import Home from "../Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollingImage } from "../MobxStore/Store";
import LogIn from "../Components/LogIn&SignUp/LogIn";

const Router = () => {
  
  return (
   
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
     
   
  );
};

export default Router;
