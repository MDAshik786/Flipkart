import Home from "../Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollingImage } from "../MobxStore/Store";
import LogIn from "../Components/LogIn&SignUp/LogIn";
import Cart from "../Components/CartPage/Cart";
import SignUp from "../Components/LogIn&SignUp/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signin" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
