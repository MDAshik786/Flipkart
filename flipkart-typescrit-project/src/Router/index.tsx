import Home from "../ComponentsPages/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "../ComponentsPages/CartPage/Cart";
import WishList from "../ComponentsPages/WishListPage/WishList";

import AccountForm from "../ComponentsPages/LogIn&SignUpPage/AccountForm";
import SingleView from "../ComponentsPages/SingleViewPage/SingleView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AccountForm />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/single" element={<SingleView />} />
    </Routes>
  );
};

export default Router;
