import express from "express"
import { createTour, deleteTourData, getAllTour } from "../controller/Tour.controller.js";


const route = express.Router();

//http://localhost:3000/worldtour/createtour
route.post("/createtour" , createTour)

//http://localhost:3000/worldtour/getalltour
route.get("/getalltour", getAllTour)

//http://localhost:3000/worldtour/deletetour/id
route.delete("/deletetour/:id", deleteTourData)

export default route