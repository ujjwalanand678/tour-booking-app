import express from "express"
import { bookingTour, getAllBookings, getSingleBooking } from "../controller/Booking.controller.js";
import { authorize } from "../authentication/VerifyToken.js";

const route = express.Router()


//http://localhost:3000/worldtour/booking/tourbooking
route.post("/tourbooking",authorize, bookingTour)

//http://localhost:3000/worldtour/booking/getallbooking
route.get("/getallbooking",authorize, getAllBookings)

//http://localhost:3000/worldtour/booking/getsinglebooking
route.get("/getsinglebooking",authorize, getSingleBooking)
export default route