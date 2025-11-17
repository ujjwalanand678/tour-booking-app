import React from "react";
import tour from "../assets/tour.jpg";

const TourPageBanner = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={tour}
        alt="tour banner"
        className="w-full h-full object-cover brightness-[0.45]"
      />

      {/* Overlay Title */}
      <h1
        className="
          absolute inset-0 
          flex items-center justify-center 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold text-white text-center px-4
        "
      >
        All Tours
      </h1>
    </div>
  );
};

export default TourPageBanner;
