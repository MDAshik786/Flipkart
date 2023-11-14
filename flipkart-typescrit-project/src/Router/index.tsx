import Home from "../Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollingImage } from "../MobxStore/ScrollingImageStore";
const Router = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home store={ScrollingImage} />} />
      </Routes>
   
  );
};

export default Router;
