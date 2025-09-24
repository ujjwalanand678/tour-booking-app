import mongoose from "mongoose"

const reviewSchema =  new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour", // links review to a tour
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}) 

const Review = mongoose.model("Review", reviewSchema)
export default Review