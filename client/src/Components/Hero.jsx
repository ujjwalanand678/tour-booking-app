import React from "react";
import heroOne from "../assets/hero-1.jpg";
import heroTwo from "../assets/hero-2.jpg";
import heroVideo from "../assets/hero-video.mp4";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 mb-20 mt-10">
      
      {/* LEFT TEXT SECTION */}
      <div>
        <p className="text-lg sm:text-xl bg-amber-500 w-fit px-4 font-bold text-center rounded-full text-white py-2 mb-5">
          Know before you go
        </p>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Travelling opens the
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
          doors to creating
        </p>
        <p className="text-amber-500 text-2xl sm:text-3xl md:text-4xl font-bold">
          memories
        </p>

        <p className="text-base sm:text-lg leading-7 sm:leading-8 mt-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consequatur dolore nam modi labore facere id ut veniam itaque quasi,
          sunt unde? Mollitia id soluta animi repudiandae omnis quibusdam illo
          blanditiis possimus ex sint cupiditate corrupti labore non, qui est
          porro excepturi quasi labor.
        </p>
      </div>

      {/* RIGHT IMAGE + VIDEO GRID */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6">
        <img
          src={heroOne}
          alt="heroImg"
          className="rounded-3xl w-full aspect-[3/4] object-cover border border-amber-500"
        />

        <video
          src={heroVideo}
          controls
          className="rounded-3xl w-full aspect-[3/4] object-cover border border-amber-500 relative top-4 sm:top-6"
        ></video>

        <img
          src={heroTwo}
          alt="heroImg"
          className="rounded-3xl w-full aspect-[3/4] object-cover border border-amber-500 relative top-8 sm:top-12"
        />
      </div>

    </div>
  );
};

export default Hero;
