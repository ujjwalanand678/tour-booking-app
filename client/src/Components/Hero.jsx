import React from "react";
import heroOne from "../assets/hero-1.jpg"
import heroTwo from "../assets/hero-2.jpg"
import heroVideo from "../assets/hero-video.mp4"
const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-7 px-40 mb-30">
      <div >
        <p className="text-xl bg-amber-500 w-70 px-3 font-bold text-center rounded-full text-white py-2 mb-5">Know before you go</p>
        <p className=" text-2xl font-bold">Travelling opens the</p>
        <p className=" text-2xl font-bold">doors to creating</p>
        <p className="text-amber-500 text-2xl font-bold">memories</p>
        <p className="text-lg leading-8 mt-6 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur dolore nam modi labore facere id ut veniam itaque quasi, sunt unde? Mollitia id soluta animi repudiandae omnis quibusdam illo blanditiis possimus ex sint cupiditate corrupti labore non, qui est porro excepturi quasi labor.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <img src={heroOne} alt="heroImg"  className="rounded-3xl h-100  w-110 object-fill border-1 border-amber-500"/>
        <video src={heroVideo} controls className="rounded-3xl h-100 w-110 object-fill border-1 border-amber-500 relative top-10"></video>
        <img src={heroTwo} alt="heroImg" className="rounded-3xl h-100 w-110 object-fill  border-1 border-amber-500 relative top-20" />
      </div>
    </div>
  );
};

export default Hero;
