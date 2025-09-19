import React from "react"
import experience from "../assets/experience.png";

const Experience = () => {
  return (
    <div className="grid grid-cols-2 gap-30">
      <div>
        <p className="bg-amber-500 w-40 text-lg rounded-full text-center mb-3 text-white">
          Experience
        </p>
        <h3 className="text-4xl font-medium">
          With our all experience we will serve you
        </h3>
        <p className="text-gray-700 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          iure molestiae dolorem, repellendus blanditiis.
        </p>
      </div>
      <div>
        <img src={experience} alt="experience" />
      </div>
    </div>
  );
};

export default Experience;
