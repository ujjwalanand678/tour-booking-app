import React from "react";
import maletourist from "../assets/male-tourist.png";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-blue-200 py-14 mt-20 mb-20">

      {/* LEFT TEXT SECTION */}
      <div>
        <p className="text-2xl sm:text-3xl font-medium mb-6 leading-snug max-w-xl">
          Subscribe now for useful travelling information.
        </p>

        {/* Email Form */}
        <form className="flex bg-white rounded-xl overflow-hidden shadow-sm max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 text-lg outline-none"
          />
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 text-lg font-semibold hover:bg-amber-600 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-700 text-lg mt-6 leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia odio
          iure quasi! Deserunt, similique in!
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={maletourist}
          alt="tourist"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>

    </div>
  );
};

export default Subscribe;
