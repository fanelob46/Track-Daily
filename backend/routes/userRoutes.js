import express from "express";
import { registerUser } from "../controllers/users/register.js";
import getUserProfile from "../controllers/users/getUserProfile.js";
import { updateUserProfile } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";

const router = express.Router();

router.post("/", registerUser);

//Update profile
router.put('/profile', updateUserProfile);

//Delete user profile
router.delete("/:id", deleteUser);

router.get("/profile", getUserProfile);

export default router;
