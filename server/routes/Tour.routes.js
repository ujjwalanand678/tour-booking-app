import express from "express"
import { createTour, deleteTourData, getAllTour, getSingleTourById, getToursByQuery } from "../controller/Tour.controller.js";


const route = express.Router();

//http://localhost:3000/worldtour/createtour
route.post("/createtour" , createTour)

//http://localhost:3000/worldtour/getalltour
route.get("/getalltour", getAllTour)

//http://localhost:3000/worldtour/deletetour/id
route.delete("/deletetour/:id", deleteTourData)

//http://localhost:3000/worldtour/getsingletour/id
route.get("/getsingletour/:id", getSingleTourById)

//http://localhost:3000/worldtour/gettourbyquery/?title=Bridge
route.get("/gettourbyquery" , getToursByQuery)

export default route