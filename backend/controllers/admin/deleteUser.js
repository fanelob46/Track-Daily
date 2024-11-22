import User from "../../models/userModel.js";

export const deleteUser = async (req, res) => {
  // get the user id
  const { id } = req.params;


  try {
    //search the id on the database
    const user = await User.findById(id);
    console.log("delete user ", user);

    ///if user not found return NOT FOUND
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    //after getiing the id remove the user
    await user.remove();
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};
