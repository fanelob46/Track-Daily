import mongoose from "mongoose";
import Task from "../../models/tasksModel.js";
import mongoose from "mongoose";

// @desc Get logged in user's tasks
// route GET /api/tasks
// @access Private
export const getAllTasks = async (req, res) => {
  const id = req.user._id;
  const stringId = id instanceof Buffer ? id.toString() : id;

  // Check if the ID exists in the database
  if (!mongoose.Types.ObjectId.isValid(stringId)) {
    return res.status(404).json({
      success: false,
      message: "Invalid user ID",
    });
  }
  try {
    // From the database find the tasks that are of the logged in user and store it
    const tasks = await Task.find({ userId: id });

    // If there are no tasks
    if (!tasks.length) {
      return res
        .status(200)
        .json({ success: true, message: "No available tasks", data: tasks });
    }

    // The tasks are found
    res.status(200).json({
      success: true,
      message: "Successfully fetched tasks",
      data: tasks,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
