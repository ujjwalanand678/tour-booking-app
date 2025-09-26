import User from "../model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "user is already registered with this email, please use a different email",
        });
    }
    //password encryption
    const salt = await bcrypt.genSalt(10)
    const hashing = await bcrypt.hash(password , salt)

    user= new User({name, email, password : hashing, role})
    await user.save()
     return res
      .status(200)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
      return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const userLogin = async (req, res, next) => {
    //data aquired from the frontend/client/postman
 const {email,password}= req.body;
 try {
    //find the registered email
    const user = await User.findOne({email :email})
    if(!user){
        return res.status(400).json({success:false , message: "User is not registered"})
    }

    //compare password
    const comparePassword = await bcrypt.compare(password, user.password) 
    if(!comparePassword){
        return res.status(400).json({ success: false, message: "Invalid password" });
    }

     // we dont want to send password and role in response. so we are using destructuring to exclude them. {...rest} will contain all the other fields except password and role.
     const { password: hashedPassword, role, ...rest}= user._doc; 
    return res
      .status(200)
      .json({ success: true, message: "User logged in successfully" , token , role, data: rest});
 } catch (error) {
    
 }
};
