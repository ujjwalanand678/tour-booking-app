import React from "react";
import experience from "../assets/experience.png";

const Experience = () => {
  return (
    <div className="grid grid-cols-2 gap-30 mt-20 px-40">
      <div>
        <p className="bg-amber-500 w-40 py-2 font-medium text-lg rounded-full text-center mb-3 text-white">
          Experience
        </p>
        <h3 className="text-4xl font-medium w-100 mb-5">
          With our all experience we will serve you
        </h3>
        <p className="text-gray-700 text-xl mb-12 w-140">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          iure molestiae dolorem, repellendus blanditiis.
        </p>
        <div className="grid grid-cols-3">
          <div >
            <p className="bg-orange-500 relative left-10 w-20 text-center text-white text-lg font-bold h-20 place-content-center rounded-br-xl rounded-tl-xl rounded-md mb-3 ">12k+</p>
            <p className="text-gray-600 text-xl font-bold">Successfull Trips</p>
          </div>
          <div>
            <p className="bg-orange-500 relative left-7 w-20 text-center text-white text-lg font-bold h-20 place-content-center rounded-br-xl rounded-tl-xl rounded-md mb-3">2k+</p>
            <p className="text-gray-600 text-xl font-bold">Regular clients</p>
          </div>
          <div>
            <p className="bg-orange-500 relative left-10 w-20 text-center text-white text-lg font-bold h-20 place-content-center rounded-br-xl rounded-tl-xl rounded-md mb-3">15</p>
            <p className="text-gray-600 text-xl font-bold">Years experience</p>
          </div>
        </div>
      </div>
      <div>
        <img src={experience} alt="experience" />
      </div>
    </div>
  );
};

export default Experience;
