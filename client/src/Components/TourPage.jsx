import React from "react";
import TourPageBanner from "./TourPageBanner";
import Search from "./Search";
import Footer from "./Footer";
import Subscribe from "./Subscribe";


const TourPage = () => {
  return (
  <div>
    <TourPageBanner/>
    <Search />

    <Subscribe/>
    <Footer/>
    
  </div>);
};

export default TourPage;
