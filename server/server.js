import express from "express"
import dotenv from "dotenv"
import mongoose, { Mongoose } from "mongoose"
import TourRoutes from "./routes/Tour.routes.js"
import AuthRoutes from "./routes/Auth.routes.js"
import UserRoutes from "./routes/User.routes.js"
import BookingRoutes from "./routes/Booking.routes.js"
import ReviewRoutes from "./routes/Review.routes.js"
import cors from "cors"

const app = express()
dotenv.config() 
const port = process.env.PORT || 3000;
mongoose.set("strictQuery", false)

const connectDB = async() =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB`)
    } catch (error) {
        console.log("Error")
    }
}


//cors policy error handle
 const corsPolicy ={
    // origin : "*",
    origin : ["https://tour-booking-app-iota.vercel.app/"],
    credentials : true,
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    allowedHeaders : ["Content-Type" , "Authorization"],
    exposedHeaders : ["Content-Type"]
 }

// Middleware to parse JSON request bodies
app.use(cors(corsPolicy))
app.use(express.json());
app.use("/worldtour" , TourRoutes) // postman check done
app.use("/worldtour/auth" , AuthRoutes) // postman check done
app.use("/worldtour/user" , UserRoutes) // postman check done
app.use("/worldtour/booking" , BookingRoutes) // postman check done

// app.use((req, res, next) => {
//   console.log("Incoming request:", req.method, req.url);
//   next();
// });
app.use("/worldtour/review" , ReviewRoutes) //




connectDB().then(()=>{
    app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})
})
