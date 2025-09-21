import React from "react";
import Hero from "./Hero";
import WhatWeServe from "./WhatWeServe";
import Experience from "./Experience";
import ClientLove from "./ClientLove";
import Gallary from "./Gallary";

const Home = () => {
  return (
  
  <div className="px-40 pt-30">
    <Hero/> 
    <WhatWeServe/>
    <Experience/>
    <Gallary/>
    <ClientLove/>
  </div>
  
  )
};

export default Home;
