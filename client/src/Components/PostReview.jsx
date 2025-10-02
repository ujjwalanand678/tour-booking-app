import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaStar, FaUserCircle } from "react-icons/fa";

const PostReview = () => {
  const { id } = useParams(); // tourId from URL
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  // ✅ Fetch existing reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch(`${BASE_URL}/review/getallreviews/${id}`);
      const { data } = await response.json();
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // ✅ Post new review (with JWT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment) return alert("Please add rating & comment");

    // ⬇️ Retrieve token (assuming stored in localStorage after login)
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to post a review.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/review/postreview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Send JWT
        },
        body: JSON.stringify({
          tour: id, // Backend expects tourId
          rating,
          comment,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setComment("");
        setRating(0);
        fetchReviews(); // refresh reviews
      } else {
        alert(result.message || "Failed to post review");
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Reviews ({reviews.length} reviews)
      </h2>

      {/* ⭐ Rating Selector */}
      <div className="flex mb-3">
        {[...Array(5)].map((star, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={starValue}
              size={24}
              className={`cursor-pointer ${
                starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>

      {/* ✍️ Review Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Share your thoughts"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 text-sm"
        />
        <button
          type="submit"
          className="bg-orange-400 text-white px-5 py-2 rounded-full hover:bg-orange-500"
        >
          Submit
        </button>
      </form>

      {/* 📌 List of Reviews */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-t pt-3 flex items-start gap-3 text-sm"
          >
            <FaUserCircle size={28} className="text-gray-500" />
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500 text-xs">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-1">{review.comment}</p>
            </div>
            <div className="ml-auto flex items-center text-yellow-500">
              {review.rating} <FaStar className="ml-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostReview;
