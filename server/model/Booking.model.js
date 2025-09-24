import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({

})

const Booking = mongoose.model("Booking" , bookingSchema)
export default Booking