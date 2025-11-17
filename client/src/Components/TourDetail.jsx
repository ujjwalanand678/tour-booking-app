import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaStar, FaMapMarkerAlt, FaUsers, FaPlane } from "react-icons/fa";

const TourDetail = () => {
  const [tourData, setTourData] = useState(null);
  const { id } = useParams();

  const getTourData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/getsingletour/${id}`);
      const { data } = await response.json();
      setTourData(data);
    } catch (error) {
      console.error("Error fetching tour:", error);
    }
  };

  useEffect(() => {
    getTourData();
  }, []);

  if (!tourData) {
    return <h1 className="text-center mt-10 text-xl font-bold">LOADING...</h1>;
  }

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-4 sm:p-6">

      {/* Tour Image */}
      <img
        src={tourData.photo}
        alt={tourData.title}
        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
      />

      {/* Tour Content */}
      <div className="mt-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          {tourData.title}
        </h1>

        {/* Rating + Location */}
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3">
          <FaStar className="text-yellow-500 mr-1" />
          <span>
            {tourData.avgRating} ({tourData.numReviews})
          </span>

          <span className="mx-2">•</span>

          <FaMapMarkerAlt className="mr-1 text-green-600" />
          <span>{tourData.address || "Somewhere"}</span>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-gray-700 text-sm mt-4">

          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-red-500" />
            {tourData.city}
          </span>

          <span className="font-semibold">
            ₹{tourData.price} / person
          </span>

          <span className="flex items-center gap-1">
            <FaPlane className="text-blue-500" />
            {tourData.distance} km
          </span>

          <span className="flex items-center gap-1">
            <FaUsers className="text-purple-500" />
            {tourData.maxGroupSize} people
          </span>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 text-lg">Description</h2>
          <p className="text-gray-600 text-sm leading-relaxed mt-1">
            {tourData.description}
          </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-6">
          <Link to={`/worldtour/booking/tourbooking?id=${id}`}>
            <button className="w-full bg-orange-400 text-white py-2 rounded-full font-semibold hover:bg-orange-500 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
