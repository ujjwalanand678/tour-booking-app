import User from "../model/User.model.js";
import mongoose from "mongoose";

export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: " User not found" });
    }
    // Check if the user is trying to update their own profile
    //user._id is comming from the database and userId is coming from the params.
      // Ensure only the logged-in user can update their profile
       if (req.user?.id !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this profile",
      });
    // if (user._id.toString() !== userId) {
    //   return res
    //     .status(403)
    //     .json({
    //       success: false,
    //       message: "You are not authorized to edit this blog",
    //     });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    
    return res
      .status(200)
      .json({ success: true, message: "User updated successfully" , data: updatedUser,});
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server update" });
  }
};