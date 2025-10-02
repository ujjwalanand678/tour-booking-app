import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


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
    <div className="mx-40 mb-30">
    
       <p className="bg-amber-500 w-40 py-2 font-medium text-lg rounded-full text-center mb-5 text-white">
          Explore
        </p>
          <h3 className="text-4xl font-medium mb-10">
       Our featured tours
        </h3>
      {tourData?.length === 0 ? (
        <h1>LOADING..........</h1>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {tourData.map((tour) => (
            <div
              key={tour._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative"
            >
              {/* Tour Image */}
              <img
                src={tour.photo}
                alt={tour.title}
                className="w-full h-52 object-cover"
              />

              {/* Featured Tag */}
              {tour.featured && (
                <span className="absolute top-3 right-3 bg-amber-500 text-white text-md px-2 py-1 rounded-full">
                  Featured
                </span>
              )}

              {/* Content */}
              <div className="p-4">
                {/* City + Rating */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <p className="flex items-center gap-1 text-lg">
                    <IoLocationOutline className="text-amber-500 text-xl"/> {tour.city}
                  </p>
                  <p className="flex items-center gap-1 text-lg">
                    <FaRegStar className="text-amber-500"/> {tour.avgRating}{" "}
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
                <button className="cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTourDB;
