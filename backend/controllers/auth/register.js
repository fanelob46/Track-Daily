import User from "../../models/userModel.js";
import generateToken from "../../utils/generateToken.js";

export const registerUser = async (req, res) => {
  //get the user inputs
  const { firstName, lastName, email, password } = req.body;

  //check if user exists using the email
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User email already exist" });
  }

  //create a user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  //checck if the user was created
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "invalid user data" });
  }
};
