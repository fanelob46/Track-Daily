import express from "express";
import mongoose from "mongoose";
import Task from "../../models/tasksModel";

export const createTask = async (req, res) => {
    const task = req.body; //user will send this data

    if (!task.name || !task.price || !task.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newtask = new task(task)

    try {
        await newTask.save();
        res.status(201).json({ success: true, data: newTask });
    } catch (error) {
        console.error("Error in Create task:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};