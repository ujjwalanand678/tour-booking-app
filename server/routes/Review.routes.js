
import express from "express";
import {
  createReview,
  getTourReviews,
  deleteReview,
} from "../controller/Review.controller.js";
import { authorize } from "../authentication/VerifyToken.js";


const route = express.Router();

// http://localhost:3000/worldtour/review/postreview
route.post("/postreview", authorize, createReview);

// http://localhost:3000/worldtour/review/getallreviews/12345
route.get("/getallreviews/:tourId", getTourReviews);

// http://localhost:3000/worldtour/review/deletereview/12345
route.delete("/deletereview/:id", authorize, deleteReview);


export default route;

