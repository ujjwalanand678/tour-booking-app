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
  <div className="mx-40 mb-40">
        <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full shadow-xl/20  px-6 py-8 space-x-16 ">
        {/* Location */}
        <div className="flex items-center space-x-3">
          <LuMapPin className="text-red-400 "  size={25}/>
          <div>
            <h3 className="font-semibold text-gray-800">Location</h3>
            <input
              type="text"
              placeholder="Where are you going ?"
              className="outline-none text-gray-500 placeholder-gray-400 text-lg w-50"
               onChange={(e) => setInput(e.target.value)}
               value={input}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300 h-10"></div>

        {/* Distance */}
        <div className="flex items-center space-x-3">
          <LuMapPinPlusInside className="text-red-400" size={25} />
          <div>
            <h3 className="font-semibold text-gray-800">Distance</h3>
            <input
              type="text"
              placeholder="Distance k/m"
              className="outline-none text-gray-500 placeholder-gray-400 text-lg w-32"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300 h-10"></div>

        {/* Max People */}
        <div className="flex items-center space-x-3">
          <FaUserFriends className="text-red-400" size={25}/>
          <div>
            <h3 className="font-semibold text-gray-800">Max People</h3>
            <input
              type="number"
              min="0"
              className="outline-none text-gray-500 text-lg w-20"
              defaultValue={0}
            />
          </div>
        </div>

        {/* Search Button */}
        <button type="submit" className="ml-4 bg-orange-400 text-white p-3 rounded-xl hover:bg-orange-500 transition">
          <MdSearch size={25} className="cursor-pointer"/>
        </button>
      </form>
    </div>
  </div>);
};

export default Search;
