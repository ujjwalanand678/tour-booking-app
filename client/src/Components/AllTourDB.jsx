import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllTourDB = () => {
  const [tourData, setTourData] = useState([]);

  const getTourData = async () => {
    const response = await fetch(`${BASE_URL}/getalltour`);
    const { data } = await response.json();
    setTourData(data);
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
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-10">
        Our featured tours
      </h3>

      {/* Loading State */}
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
            gap-6
          "
        >
          {tourData.map((tour) => (
            <div
              key={tour._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-xl transition"
            >
              {/* Tour Image */}
              <img
                src={tour.photo}
                alt={tour.title}
                className="w-full h-52 object-cover"
              />

              {/* Featured Tag */}
              {tour.featured && (
                <span className="absolute top-3 right-3 bg-amber-500 text-white text-sm px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              )}

              {/* Content */}
              <div className="p-4">
                {/* City + Rating */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <p className="flex items-center gap-1 text-lg">
                    <IoLocationOutline className="text-amber-500 text-xl" />{" "}
                    {tour.city}
                  </p>
                  <p className="flex items-center gap-1 text-lg">
                    <FaRegStar className="text-amber-500" /> {tour.avgRating}{" "}
                    <span className="text-gray-400">({tour.numReviews})</span>
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>

                {/* Price */}
                <p className="text-gray-700 mb-4">
                  <span className="text-amber-600 font-bold">
                    ${tour.price}
                  </span>
                  <span className="text-lg"> /per person</span>
                </p>

                {/* Button */}
                <Link to={`/singletour/${tour._id}`}>
                  <button className="cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition">
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
