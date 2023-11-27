import Home from "../Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollingImage } from "../MobxStore/Store";
import LogIn from "../Components/LogIn&SignUp/LogIn";
import Cart from "../Components/CartPage/Cart";

const Router = () => {
  
  return (
   
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     
   
  );
};

export default Router;
