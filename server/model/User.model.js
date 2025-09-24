import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // Define the schema for User model
  name: {
    type: String, // Name is a string
    required: true, // Name is required for each user
  },
  email: {
    type: String, // Email is a string
    required: true, // Email is required for each user
    unique: true, // Ensure email is unique across users , cannot have duplicate emails
  },
  password: {
    type: String ,
    required: true, // Password is required for each user
  },
  role :{
    type : String,
    enum : ["user", "admin"], // Role can only be either "user" or "admin"
    default : "user", // Default role is "user"
  },
  profilePic : String, // Profile picture URL is optional
//   user : {
//           id : {
//               type : mongoose.Schema.Types.ObjectId,
//               ref : "User",
//               required: true
//           }
          
//       }
});

export default mongoose.model("User" , UserSchema)