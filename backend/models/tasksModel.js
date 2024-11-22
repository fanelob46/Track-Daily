import mongoose, { Mongoose } from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
}, {
    timestamps: true //updated at, created at
});

const Task = mongoose.model('Task', taskSchema);

export default Task;