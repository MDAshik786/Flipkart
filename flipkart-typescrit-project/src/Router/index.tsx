import Home from "../ComponentsPages/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollingImage } from "../MobxStore/Store";
import LogIn from "../ComponentsPages/LogIn&SignUpPage/LogIn";
import Cart from "../ComponentsPages/CartPage/Cart";
import SignUp from "../ComponentsPages/LogIn&SignUpPage/SignUp";
import WishList from "../ComponentsPages/WishListPage/WishList";
import SingleView from "../ComponentsPages/SingleViewPage/SingleView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/single" element={<SingleView />} />
    </Routes>
  );
};

export default Router;
