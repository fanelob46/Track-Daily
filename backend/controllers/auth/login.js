import User from "../../models/userModel.js";
import generateToken from "../../utils/generateToken.js";

export const loginUser = async (req, res) => {
  //get email and password to login
  const { email, password } = req.body;

  ///find the email email on the database
  const user = await User.findOne({ email });

  //match the password with the one on the database
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ success: false, message: "Invalid login details" });
  }
};
