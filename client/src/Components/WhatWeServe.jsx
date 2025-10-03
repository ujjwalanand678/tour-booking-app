import React from "react";
import guide from "../assets/guide.png";
import customization from "../assets/customization.png";
import weather from "../assets/weather.png";

const WhatWeServe = () => {
  return (
    <div className="grid grid-cols-4 mt-25 gap-10 px-40 mb-30">
      <div>
        <p className="bg-amber-500 w-40 py-2 font-medium text-lg rounded-full text-center mb-3 text-white">
          What we serve
        </p>
        <h3 className="text-4xl font-medium">We offer our best services</h3>
      </div>
      <div className=" border-b-1 border-r-1 border-amber-500 rounded-xl p-5">
        <div className="bg-amber-500 w-16 rounded-full mb-3">
          <img
            src={weather}
            alt="weather"
            className=" object-contain  p-2.5 "
          />
        </div>
        <h3 className="text-xl mb-3 font-medium">Calculate weather</h3>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          aspernatur animi amet velit.
        </p>
      </div>
      <div className=" border-b-1 border-r-1 border-amber-500 rounded-xl p-5">
        <div className="bg-amber-500 w-16 rounded-full mb-3">
          <img src={guide} alt="guide" className=" object-contain  p-2.5 " />
        </div>
        <h3 className="text-xl mb-3 font-medium">Best tour guide</h3>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          aspernatur animi amet velit.
        </p>
      </div>
      <div className=" border-b-1 border-r-1 border-amber-500 rounded-xl p-5">
        <div className="bg-amber-500 w-16 rounded-full mb-3">
          <img
            src={customization}
            alt="customization"
            className=" object-contain  p-2.5 "
          />
        </div>

        <h3 className="text-xl mb-3 font-medium">Customization</h3>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          aspernatur animi amet velit.
        </p>
      </div>
    </div>
  );
};

export default WhatWeServe;
