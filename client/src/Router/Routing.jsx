import { Route , Routes} from "react-router-dom";
import Home from "../Components/Home"
import React from "react";
import About from "../Components/About";
import Register from "../Components/Register";
import Login from "../Components/Login";
import TourPage from "../Components/TourPage";

const Routing = () => {
  return (
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/tour" element={<TourPage/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

</Routes>
  )
};

export default Routing;
