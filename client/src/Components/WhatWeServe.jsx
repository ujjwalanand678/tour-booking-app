import React from "react";
import guide from "../assets/guide.png";
import customization from "../assets/customization.png";
import weather from "../assets/weather.png";

const WhatWeServe = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-20 mb-20">
      {/* Title section */}
      <div className="mb-12">
        <p className="bg-amber-500 w-fit px-6 py-2 font-medium text-lg rounded-full text-center mb-3 text-white">
          What we serve
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium">
          We offer our best services
        </h3>
      </div>

      {/* Cards Grid */}
      <div
        className="
        grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    gap-8
        "
      >
        {/* Weather */}
        <div className="border border-amber-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="bg-amber-500 w-16 h-16 rounded-full mb-4 flex items-center justify-center">
            <img src={weather} alt="weather" className="w-10 object-contain" />
          </div>
          <h3 className="text-xl mb-3 font-medium">Calculate weather</h3>
          <p className="text-gray-700 text-base leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aspernatur animi amet velit.
          </p>
        </div>

        {/* Guide */}
        <div className="border border-amber-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="bg-amber-500 w-16 h-16 rounded-full mb-4 flex items-center justify-center">
            <img src={guide} alt="guide" className="w-10 object-contain" />
          </div>
          <h3 className="text-xl mb-3 font-medium">Best tour guide</h3>
          <p className="text-gray-700 text-base leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aspernatur animi amet velit.
          </p>
        </div>

        {/* Customization */}
        <div className="border border-amber-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="bg-amber-500 w-16 h-16 rounded-full mb-4 flex items-center justify-center">
            <img
              src={customization}
              alt="customization"
              className="w-10 object-contain"
            />
          </div>

          <h3 className="text-xl mb-3 font-medium">Customization</h3>
          <p className="text-gray-700 text-base leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aspernatur animi amet velit.
          </p>
        </div>

        {/* Optional: Add a 4th card or leave it empty for balance */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default WhatWeServe;
