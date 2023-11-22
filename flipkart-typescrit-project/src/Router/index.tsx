import Home from "../Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollingImage } from "../MobxStore/ScrollingImageStore";
import LogIn from "../Components/LogIn&SignUp/LogIn";
const Router = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home store={ScrollingImage} />} />
        <Route path="/login" element={<LogIn store={ScrollingImage} />} />
      </Routes>
   
  );
};

export default Router;
