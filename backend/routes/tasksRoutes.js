import express from "express";
import { createTask } from "../controllers/tasks/createTask.js";
import { deleteTask } from "../controllers/tasks/deleteTask.js";
import { getAllTasks } from "../controllers/tasks/getAllTasks.js";
import { updateTask } from "../controllers/tasks/updateTask.js";


const router = express.Router();
router.post('/', createTask);
router.put('/:id', updateTask);
router.get('/', getAllTasks);
router.delete('/:id', deleteTask);



export default router;
