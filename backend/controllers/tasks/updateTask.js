import Task from "../../models/tasksModel.js";

export const updateTask = async (req, res) => {
    //get the task by id
    const {id} = req.params;

    //get the user inputs
    const task = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id,task,{new: true})
        res.status(200).json({ success: true, data: updatedTask})
    } catch (error) {
        res.status(500).json({ success: false, message: "server error"})
    }
    
};