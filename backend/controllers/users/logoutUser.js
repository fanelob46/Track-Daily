// @desc Logout user
// route POST /api/users/logout
// @access Public
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ success: true, message: "User logged out" });
};

export default logoutUser;
