import express from "express";
import { updateUser } from "../controller/User.controller.js";
import { authorize } from "../authentication/VerifyToken.js";

const route = express.Router();

// http://localhost:3000/worldtour/user/updateuser/12345
route.put("/updateuser/:id" ,authorize, updateUser)

export default route;