import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, //whenever a string is saved, leading and trailing whitespace will be automatically removed.
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: true,
  },
  // ratings
  //   avgRating: {
  //     type: Number,
  //     default: 0, // starts at 0, gets updated as reviews come in
  //     min: 0,
  //     max: 5
  //   },
  //   numReviews: {
  //     type: Number,
  //     default: 0
  //   },

  //   reviews: [
  //     { type: mongoose.Schema.Types.ObjectId,
  // ref: "Review" }
  //   ],
  //   bookings: [
  //     { type: mongoose.Schema.Types.ObjectId,
  // ref: "Booking" }
  //   ]
});

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;

//The first argument is the singular name of the collection.
// Mongoose will automatically look for a pluralized, lowercased version of this in MongoDB.
// So "Tour" → MongoDB collection will be named tours.
// If you wrote "Booking", the collection would be bookings, and "Review" → reviews.
