import express from "express";
import { registerUser } from "../controllers/users/register.js";
import getUserProfile from "../controllers/users/getUserProfile.js";

const router = express.Router();

router.post("/", registerUser);

router.get("/profile", getUserProfile);
export default router;
