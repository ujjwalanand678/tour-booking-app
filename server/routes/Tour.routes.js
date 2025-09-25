import express from "express"
import { createTour } from "../controller/Tour.controller.js";


const route = express.Router();

//http://localhost:3000/worldtour/createtour
route.post("/createtour" , createTour)

export default route