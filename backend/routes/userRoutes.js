import express from "express";
import { registerUser } from "../controllers/users/register.js";
import { loginUser } from "../controllers/users/login.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

export default router;
