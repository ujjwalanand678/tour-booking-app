import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
fullName :{
    type: String,
    required :true,
},
phone :{
    type: Number,
    required:true
},
date:{
    type: Date,
    required: true
},
  numberOfPeople: {
    type: Number,
    required: true,
    min: 1,
  },
//   tour: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Tour", // relation to another model
//     required: true,
//   },
  totalPrice: {
    type: Number,
    required: true,
  }
})

const Booking = mongoose.model("Booking" , bookingSchema)
export default Booking