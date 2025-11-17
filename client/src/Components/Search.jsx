import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { LuMapPinPlusInside } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-10 mb-20">
      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="
            bg-white shadow-xl/20 rounded-2xl
            w-full
            flex flex-col md:flex-row
            items-start md:items-center
            gap-6 md:gap-10
            px-6 py-8
          "
        >
          {/* Location */}
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <LuMapPin className="text-red-400" size={25} />
            <div className="w-full">
              <h3 className="font-semibold text-gray-800">Location</h3>
              <input
                type="text"
                placeholder="Where are you going?"
                className="outline-none text-gray-500 placeholder-gray-400 text-lg w-full"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-10"></div>

          {/* Distance */}
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <LuMapPinPlusInside className="text-red-400" size={25} />
            <div className="w-full">
              <h3 className="font-semibold text-gray-800">Distance</h3>
              <input
                type="text"
                placeholder="Distance k/m"
                className="outline-none text-gray-500 placeholder-gray-400 text-lg w-full"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-10"></div>

          {/* Max People */}
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <FaUserFriends className="text-red-400" size={25} />
            <div className="w-full">
              <h3 className="font-semibold text-gray-800">Max People</h3>
              <input
                type="number"
                min="0"
                className="outline-none text-gray-500 text-lg w-full"
                defaultValue={0}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="
              bg-orange-400 text-white
              p-3 rounded-xl
              hover:bg-orange-500
              transition
              flex-shrink-0
            "
          >
            <MdSearch size={25} className="cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
