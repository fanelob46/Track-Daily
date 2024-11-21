import express from "express";
import { registerUser } from "../controllers/users/register.js";
import { loginUser } from "../controllers/users/login.js";
import getUserProfile from "../controllers/users/getUserProfile.js";
import { updateUserProfile } from "../controllers/users/update.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

//Update profile
router.put('/profile', updateUserProfile);


router.get("/profile", getUserProfile);
export default router;

