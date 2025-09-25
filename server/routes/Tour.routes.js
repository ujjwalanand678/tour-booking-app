import express from "express"
import { createTour } from "../controller/Booking.controller";


const route = express.Router();

//http://localhost:3000/worldtour/createtour
route.post("/createtour" , createTour)

export default route