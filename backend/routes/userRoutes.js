import express from "express";
import { registerUser } from "../controllers/auth/register.js";
import { loginUser } from "../controllers/auth/login.js";
import getUserProfile from "../controllers/users/getUserProfile.js";
import { updateUserProfile } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import { protect } from "../middleware/authMiddleware.js";
import logoutUser from "../controllers/auth/logoutUser.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

//Update profile
router.put("/profile", protect, updateUserProfile);

//Delete user profile
router.delete("/:id", protect, deleteUser);

//Get profile
router.get("/profile", protect, getUserProfile);

// Logout user
router.post("/logout", protect, logoutUser);

export default router;
