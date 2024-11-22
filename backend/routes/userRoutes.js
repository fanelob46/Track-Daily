import express from "express";
import { registerUser } from "../controllers/users/register.js";
import { loginUser } from "../controllers/users/login.js";
import getUserProfile from "../controllers/users/getUserProfile.js";
import { updateUserProfile } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import { protect } from "../middleware/authMiddleware.js";
import logoutUser from "../controllers/users/logoutUser.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

//Update profile
router.put("/profile", protect, updateUserProfile);

//Delete user profile
router.delete("/:id", deleteUser);

//Get profile
router.get("/profile", protect, getUserProfile);

// Logout user
router.post("/logout", logoutUser);


export default router;
