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
      featured
     
    });

    await data.save();

    return res
      .status(200)
      .json({ success: true, message: "tour data added successfully" });
  } catch (error) {
    return res.status(500).json({
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

export const getTourPagination = async (req, res, next) => {
  try {
    const {page = 1, limit= 8} = req.query;
      const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const result = await Tour.paginate({}, options);
     res.status(200).json({
      success: true,
      message: "Tours fetched successfully",
      data: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
      totalTours: result.totalDocs,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error..." });
  }
};

export const deleteTourData = async (req, res, next) => {
  const tourId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(tourId)) {
      return res.status(400).json({ success: false, message: "Invalid Id" });
    }
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found with this id" });
    }
    await Tour.findByIdAndDelete(tourId);
    return res
      .status(200)
      .json({ success: true, message: "Tour deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server error...!" });
  }
};

export const getSingleTourById = async (req, res, next) => {
  const tourId = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(tourId)) {
      return res.status(400).json({ success: false, message: "Invalid Id" });
    }
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found with this id" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Tour found...!", data: tour });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server error...!" });
  }
};

export const getToursByQuery = async (req, res, next) => {
  const reqTitle = req.query.title;

  try {
    const tour = await Tour.find({ title: new RegExp(reqTitle, "i") });
    if (!tour || tour.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No tours found with title:${reqTitle}`,
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "tours found...", data: tour });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server Error...." });
  }
};