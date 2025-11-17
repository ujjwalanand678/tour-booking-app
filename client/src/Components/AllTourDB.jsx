import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllTourDB = () => {
  const [tourData, setTourData] = useState([]);

  const getTourData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/getalltour`);
      const { data } = await response.json();
      setTourData(data);
    } catch (err) {
      console.log("Error fetching tours:", err);
    }
  };

  useEffect(() => {
    getTourData();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-20 mb-24">

      {/* Section Heading */}
      <p className="bg-amber-500 w-fit px-6 py-2 font-medium text-lg rounded-full text-center mb-4 text-white">
        Explore
      </p>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
        Our featured tours
      </h3>

      {/* Loading */}
      {tourData?.length === 0 ? (
        <h1 className="text-center text-xl font-semibold">Loading...</h1>
      ) : (
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-8
          "
        >
          {tourData.map((tour) => (
            <div
              key={tour._id}
              className="
                bg-white rounded-xl overflow-hidden 
                shadow-lg hover:shadow-2xl 
                transition-all duration-300 
                flex flex-col
              "
            >

              {/* Tour Image */}
              <img
                src={tour.photo}
                alt={tour.title}
                className="w-full h-56 md:h-52 lg:h-60 object-cover"
              />

              {/* Featured Tag */}
              {tour.featured && (
                <span className="absolute top-3 right-3 bg-amber-500 text-white text-sm px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">

                {/* City + Rating */}
                <div className="flex items-center justify-between mb-3">
                  <p className="flex items-center gap-1 text-lg text-gray-700">
                    <IoLocationOutline className="text-amber-500" size={20} />
                    {tour.city}
                  </p>
                  <p className="flex items-center gap-1 text-lg text-gray-700">
                    <FaRegStar className="text-amber-500" />
                    {tour.avgRating}
                    <span className="text-gray-400">
                      ({tour.numReviews})
                    </span>
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {tour.title}
                </h3>

                {/* Price */}
                <p className="text-gray-700 mb-5">
                  <span className="text-amber-600 font-bold">
                    ${tour.price}
                  </span>
                  <span> /per person</span>
                </p>

                {/* Button */}
                <Link to={`/singletour/${tour._id}`} className="mt-auto">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTourDB;
