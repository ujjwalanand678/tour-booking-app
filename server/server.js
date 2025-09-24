import express from "express"
import dotenv from "dotenv"
import mongoose, { Mongoose } from "mongoose"

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
// Middleware to parse JSON request bodies
app.use(express.json());


connectDB().then(()=>{
    app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})
})
