import Task from "../../models/tasksModel.js";

export const getAllTasks = async (req, res) => {
  try {
    const id = req.user._id;
    const tasks = await Task.find({ userId: id });
    if (!tasks.length) {
      return res
        .status(200)
        .json({ success: true, message: "No available tasks", data: tasks });
    }
    res.status(200).json({
      success: true,
      message: "Successfully fetched tasks",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
