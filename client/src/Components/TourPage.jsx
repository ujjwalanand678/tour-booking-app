import React from "react";
import TourPageBanner from "./TourPageBanner";
import Search from "./Search";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import AllTourDB from "./AllTourDB";


const TourPage = () => {
  return (
  <div>
    <TourPageBanner/>
    {/* <Search /> */}
    <AllTourDB/>
    <Subscribe/>
    <Footer/>
    
  </div>);
};

export default TourPage;
