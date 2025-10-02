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
    <div className=" ms-40 w-full bg-white shadow-lg rounded-xl  ">
      {/* Tour Image */}
      <img
        src={tourData.photo}
        alt={tourData.title}
        className="w-full  object-cover rounded-xl"
      />

      {/* Tour Content */}
      <div className="p-5">
        <h1 className="text-xl font-bold mb-2">{tourData.title}</h1>

        {/* Rating + Location */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <FaStar className="text-yellow-500 mr-1" />
          <span>{tourData.avgRating}({tourData.numReviews})</span>
          <span className="mx-2">•</span>
          <FaMapMarkerAlt className="mr-1 text-green-600" />
          <span>{tourData.address || "Somewhere"}</span>
        </div>

        {/* Info Row */}
        <div className="flex justify-between text-gray-700 text-sm mt-3">
          <span>
            <FaMapMarkerAlt className="inline mr-1 text-red-500" />{" "}
            {tourData.city}
          </span>
          <span>₹{tourData.price} per person</span>
          <span>
            <FaPlane className="inline mr-1 text-blue-500" /> {tourData.distance} km
          </span>
          <span>
            <FaUsers className="inline mr-1 text-purple-500" /> {tourData.maxGroupSize} people
          </span>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h2 className="font-semibold text-gray-800">Description</h2>
          <p className="text-gray-600 text-sm">{tourData.description}</p>
        </div>

        {/* Book Now Button */}
        <div className="mt-6">
          <Link to={`/worldtour/booking/tourbooking?id=${id}`}>
            <button className="w-full bg-orange-400 text-white py-2 rounded-full font-semibold hover:bg-orange-500">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
