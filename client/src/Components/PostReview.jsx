import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${BASE_URL}/review/getallreviews/${id}`);
      const { data } = await response.json();
      setReviews(data || []);
    } catch (error) {
      toast.error("Failed to load reviews");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !comment.trim()) {
      toast.error("Please add a rating and a comment");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to post a review");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/review/postreview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tour: id,
          rating,
          comment,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Review posted successfully!");
        setComment("");
        setRating(0);
        fetchReviews();
      } else {
        toast.error(result.message || "Failed to post review");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  return (
    <div className=" w-full mt-10 mb-10">
      <ToastContainer position="top-center" autoClose={2500} />

      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Reviews ({reviews.length})
        </h2>

        {/* ⭐ Rating Selector */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={starValue}
                size={26}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer transition ${
                  starValue <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            );
          })}
        </div>

        {/* ✍️ Review Input */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 mb-6"
        >
          <input
            type="text"
            placeholder="Share your thoughts"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border rounded-full px-4 py-2 text-sm"
          />

          <button
            type="submit"
            className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition"
          >
            Submit
          </button>
        </form>

        {/* 📌 Reviews List */}
        <div className="space-y-4">
          {reviews.length === 0 && (
            <p className="text-gray-500">No reviews yet.</p>
          )}

          {reviews.map((review, index) => (
            <div
              key={index}
              className="border-t pt-3 flex items-start gap-3 text-sm"
            >
              <FaUserCircle size={32} className="text-gray-500" />

              <div className="flex-1">
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-500 text-xs">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-1">{review.comment}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 font-semibold">
                {review.rating}
                <FaStar className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostReview;
