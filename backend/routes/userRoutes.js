import express from "express"
import { registerUser } from "../controllers/users/register.js";

const router = express.Router();

router.post("/", registerUser);

export default router;