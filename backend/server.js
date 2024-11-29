import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cookieParser from "cookie-parser";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());


app.use(cors({ origin: "https://track-daily-rouge.vercel.app/" }));

app.use("/api/users", userRoutes);
app.use("/api/tasks", protect, tasksRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
