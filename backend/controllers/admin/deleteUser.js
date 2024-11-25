import User from "../../models/userModel.js";

export const deleteUser = async (req, res) => {
  //get the id
  const { id } = req.params;

  try {
    //get buser by id from the database and dekete
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "user deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "user not found" });
  }
};
