import mongoose from "mongoose";
import Booking from "../model/Booking.model.js";
import Tour from "../model/Tour.model.js";

//create booking
export const bookingTour = async (req, res, next) => {
  const userId = req.userId; // Assuming the user ID is available in req.user.id after authorization middleware
 
  try {
    const { tour, fullName, phone, date, numberOfPeople } = req.body;

    // 1) Get the tour’s price
    const tourData = await Tour.findById(tour);
    if (!tourData) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }
    // 2) Calculate total price and then send totalprice to when booking is done
    const totalPrice = tourData.price * numberOfPeople;

    const newBooking = new Booking({
      user : {id :userId},
      tour,
      fullName,
      phone,
      date,
      numberOfPeople,
      totalPrice,
    });

    await newBooking.save();
    return res
      .status(200)
      .json({ success: true, message: "Booking done", data: newBooking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        "Internal server error. Booking cannot be done at this moment.please try again later.",
    });
  }
};

//  Get all bookings with tour details
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("tour", "title city price");

    res.status(200).json({
      success: true,
      message: "all the bookings found",
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//  Get single booking with tour details
export const getSingleBooking = async (req, res) => {
  const bookingId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ success: false, message: "Invalid Id" });
    }
    const booking = await Booking.findById(bookingId).populate(
      "tour",
      "title city price"
    );

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Booking found", data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
