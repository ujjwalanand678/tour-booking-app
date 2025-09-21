import React from "react";
import Hero from "./Hero";
import WhatWeServe from "./WhatWeServe";
import Experience from "./Experience";
import ClientLove from "./ClientLove";
import Gallary from "./Gallary";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
  
  <div className=" pt-30">
    <Hero/> 
    <WhatWeServe/>
    <Experience/>
    <Gallary/>
    <ClientLove/>
    <Subscribe/>
    <Footer/>
  </div>
  
  )
};

export default Home;
