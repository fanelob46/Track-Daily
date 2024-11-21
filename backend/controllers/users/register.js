import User from "../../models/userModel.js";

export const registerUser = async (req, res) => {
  //get the user inputs
  const { firstName, lastName, email, password } = req.body;

  //check if user exists using the email
  const userExists = await User.findOne({ email });

  if (userExists) {
    res
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
    res.status(200).json({ success: true }).json({ message: "User created" });
  }
};
