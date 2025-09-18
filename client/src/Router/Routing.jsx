import { Route , Routes} from "react-router-dom";
import Home from "../Components/Home"
import React from "react";

const Routing = () => {
  return (
<Routes>
<Route path="/" element={<Home/>}/>
</Routes>
  )
};

export default Routing;
