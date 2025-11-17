import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllTourDB = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTourData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/getalltour`);
      if (!response.ok) throw new Error("Failed to fetch tours");
      const { data } = await response.json();
      setTourData(data || []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error loading tours");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTourData();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-8 mb-12">
      {/* Header */}
      <div className="mb-6">
        <p className="inline-block bg-amber-500 px-4 py-1 rounded-full text-white text-sm font-medium mb-3">
          Explore
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Our featured tours
        </h3>
      </div>

      {/* States */}
      {loading && (
        <div className="text-center py-12">
          <span className="text-gray-500">Loading tours...</span>
        </div>
      )}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
          <button
            onClick={getTourData}
            className="mt-4 bg-amber-500 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tourData.map((tour) => (
            <article
              key={tour._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={tour.photo}
                  alt={tour.title}
                  className="w-full h-48 sm:h-56 md:h-52 lg:h-58 object-cover"
                />
                {tour.featured && (
                  <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full shadow">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <p className="flex items-center gap-2 text-gray-700">
                    <IoLocationOutline className="text-amber-500" />
                    <span className="text-sm">{tour.city}</span>
                  </p>

                  <p className="flex items-center gap-1 text-gray-700">
                    <FaRegStar className="text-amber-500" />
                    <span className="text-sm">
                      {tour.avgRating ?? "0"}
                      <span className="text-gray-400"> ({tour.numReviews ?? 0})</span>
                    </span>
                  </p>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-gray-800">{tour.title}</h4>

                <p className="text-gray-700 mb-4">
                  <span className="text-amber-600 font-bold">${tour.price}</span>
                  <span className="text-sm"> /per person</span>
                </p>

                {/* Button anchored at bottom */}
                <div className="mt-auto">
                  <Link to={`/singletour/${tour._id}`}>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTourDB;
