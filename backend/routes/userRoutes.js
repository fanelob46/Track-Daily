import express from "express"
import { registerUser } from "../controllers/users/register.js";
import { updateUserProfile } from "../controllers/users/update.js";

const router = express.Router();

router.post("/", registerUser);

//Update profile
router.put('/profile', updateUserProfile);


export default router;