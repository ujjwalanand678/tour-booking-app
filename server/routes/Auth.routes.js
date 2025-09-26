import express from "express"
import { userLogin, userRegister } from "../controller/Auth.controller.js"

const route = express.Router()

//http://localhost:3000/worldtour/auth/register
route.post("/register", userRegister)

//http://localhost:3000/worldtour/auth/login
route.post("/login", userLogin)

export default route