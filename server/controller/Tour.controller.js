import mongoose from "mongoose";
import Tour from "../model/Tour.model.js";

export const createTour = async (req, res, next) => {
  const {
    title,
    city,
    address,
    distance,
    price,
    maxGroupSize,
    description,
    photo,
    featured,
    avgRating,
    numReviews,
  } = req.body;

  try {
    const data = new Tour({
      title,
      city,
      address,
      distance,
      price,
      maxGroupSize,
      description,
      photo,
      featured,
      avgRating,
      numReviews,
    });

    await data.save();

    return res
      .status(200)
      .json({ success: true, message: "tour data added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "internal server error, tour data was not added",
      });
  }
};

export const getAllTour = async (req, res, next) => {
  try {
    const allTour = await Tour.find();
    return res
      .status(200)
      .json({ success: true, message: "all tours found", data: allTour });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error..." });
  }
};

