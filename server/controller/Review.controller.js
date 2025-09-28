import Review from "../model/Review.model.js";
import Tour from "../model/Tour.model.js";
import mongoose from "mongoose";

// Create a new review
export const createReview = async (req, res) => {
  const { tour, rating, comment } = req.body;
  const userId = req.userId; // from authorize middleware
  const userName = req.name; // from authorize middleware
console.log("User ID:", userId);
  console.log("User Name:", userName);
  console.log("Request Body:", req.body);
  try {
    // Validate tour ID
    if (!mongoose.Types.ObjectId.isValid(tour)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid tour ID" });
    }

    const tourDoc = await Tour.findById(tour);
    if (!tourDoc) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    // Prevent duplicate reviews by same user
    const existingReview = await Review.findOne({ tour, user: userId });
    if (existingReview) {
      return res
        .status(400)
        .json({ success: false, message: "You already reviewed this tour" });
    }

    // Create review
    const review = new Review({
      user: { id: userId, name: userName },
      tour,
      rating,
      comment,
    });

    await review.save();

    // Add review to tour and update ratings
    tourDoc.reviews.push(review._id);
    tourDoc.numReviews = tourDoc.reviews.length;

    const allReviews = await Review.find({ tour });
    tourDoc.avgRating =
      allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

    await tourDoc.save();

    return res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while adding review",
    });
  }
};

// Get all reviews for a tour
export const getTourReviews = async (req, res) => {
  const tourId = req.params.tourId;

  try {
    if (!mongoose.Types.ObjectId.isValid(tourId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid tour ID" });
    }

    const reviews = await Review.find({ tour: tourId })
      .populate("user", "name email") // populate user info
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching reviews",
    });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  const userId = req.userId;
  const role = req.role;

  try {
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid review ID" });
    }

    const review = await Review.findById(reviewId);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    // Only owner or admin can delete
    if (review.user.toString() !== userId && role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this review",
      });
    }

    // Delete review
    await Review.findByIdAndDelete(reviewId);

    // Update tour stats
    const tourDoc = await Tour.findById(review.tour);
    if (tourDoc) {
      tourDoc.reviews = tourDoc.reviews.filter(
        (revId) => revId.toString() !== reviewId
      );
      tourDoc.numReviews = tourDoc.reviews.length;

      if (tourDoc.numReviews > 0) {
        const allReviews = await Review.find({ tour: tourDoc._id });
        tourDoc.avgRating =
          allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
      } else {
        tourDoc.avgRating = 0;
      }

      await tourDoc.save();
    }

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while deleting review",
    });
  }
};
