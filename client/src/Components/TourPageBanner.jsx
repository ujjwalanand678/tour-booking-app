import React from "react";
import tour from "../assets/tour.jpg";

const TourPageBanner = () => {
  return (
    <>
      <img src={tour} alt="" className="w-full brightness-50" />
      <h1 className="text-5xl font-bold text-center text-white relative bottom-60 ">
        All Tours
      </h1>
    </>
  );
};

export default TourPageBanner;
