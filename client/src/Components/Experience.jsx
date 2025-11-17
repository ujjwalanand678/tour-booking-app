import React from "react";
import experience from "../assets/experience.png";

const Experience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-20 mb-20">

      {/* LEFT TEXT SECTION */}
      <div>
        <p className="bg-amber-500 w-fit px-6 py-2 font-medium text-lg rounded-full text-center mb-4 text-white">
          Experience
        </p>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 leading-snug">
          With our experience, we will serve you
        </h3>

        <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-xl leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure
          molestiae dolorem, repellendus blanditiis.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8">

          <div className="flex flex-col items-center text-center">
            <p className="bg-orange-500 text-white text-xl font-bold w-20 h-20 flex items-center justify-center rounded-xl mb-3">
              12k+
            </p>
            <p className="text-gray-600 text-base sm:text-lg font-semibold">
              Successful Trips
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="bg-orange-500 text-white text-xl font-bold w-20 h-20 flex items-center justify-center rounded-xl mb-3">
              2k+
            </p>
            <p className="text-gray-600 text-base sm:text-lg font-semibold">
              Regular Clients
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="bg-orange-500 text-white text-xl font-bold w-20 h-20 flex items-center justify-center rounded-xl mb-3">
              15
            </p>
            <p className="text-gray-600 text-base sm:text-lg font-semibold">
              Years Experience
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={experience}
          alt="experience"
          className="w-full max-w-md md:max-w-lg rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Experience;
