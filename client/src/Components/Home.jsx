import React from "react";
import Hero from "./Hero";
import WhatWeServe from "./WhatWeServe";
import Experience from "./Experience";
import ClientLove from "./ClientLove";
import Gallary from "./Gallary";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Search from "./Search";
import AllTourDB from "./AllTourDB";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div className="pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 md:px-10 lg:px-20">
      <ToastContainer position="top-center" autoClose={3000} />

      <Hero />
      <Search />
      <WhatWeServe />
      <AllTourDB />
      <Experience />
      <Gallary />
      <ClientLove />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
