import express from "express";
import { getAllUsers } from "../controllers/admin/getAllUsers.js";
import { deleteUser } from "../controllers/admin/deleteUser.js";
import { adminAccess } from "../middleware/roleAccessMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, adminAccess, getAllUsers);
router.delete("/:id", protect, adminAccess, deleteUser);

export default router;
