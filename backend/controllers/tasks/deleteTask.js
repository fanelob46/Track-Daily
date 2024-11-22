import Task from "../../models/tasksModel.js";

export const deleteTask = async (req, res) => {
  //get the task id
  const { id } = req.params;

  try {
    ///find the id and delete
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Task deleted succesfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
