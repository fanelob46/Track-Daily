import Task from "../../models/tasksModel.js";

export const createTask = async (req, res) => {
    const { title, description, date, tag, userId } = req.body;
    console.log(req.body);

    // Validate request body
    if (!title || !description || !date || !tag || !userId) {
        return res.status(400).json({ 
            success: false, 
            message: "All fields (title, description, date, tag) are required." 
        });
    }

    const newTask = new Task({ title, description, date, tag, userId });

    try {
        // Save the task to the database
        const savedTask = await newTask.save();
        res.status(201).json({ success: true, data: savedTask });
    } catch (error) {
        console.error("Error in creating task:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
