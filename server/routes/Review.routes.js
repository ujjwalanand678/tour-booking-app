
import express from "express";
import {
  createReview,
  getTourReviews,
  deleteReview,
} from "../controller/Review.controller.js";
import { authorize } from "../authentication/VerifyToken.js";


const router = express.Router();

// http://localhost:3000/worldtour/review/postreview
router.post("postreview", authorize, createReview);

// http://localhost:3000/worldtour/review/getallreviews/12345
router.get("/getallreviews/:tourId", getTourReviews);

// http://localhost:3000/worldtour/review/deletereview/12345
router.delete("/deletereview/:id", authorize, deleteReview);
// If you want to restrict delete to admins only:
// router.delete("/:id", authorize, authorizeRole("admin"), deleteReview);

export default router;

