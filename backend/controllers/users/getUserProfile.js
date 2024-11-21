import mongoose from "mongoose";
import User from "../../models/userModel.js";

// @desc Get logged in user's profile
// route GET /api/users/profile
// @access Private

export const getUserProfile = async (req, res) => {
  // This will be replaced with the id of the logged in user
  //   const {id} = req.user._id
  const { id } = req.body;

  // Check if the ID exists in the database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid user ID",
    });
  }

  try {
    // From the database find the user by ID and store it in user
    const user = await User.findById(id);

    // If the user is not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // If the user is found, return it in the json
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default getUserProfile;
