import * as express from "express";
import config from "./Config/config";
import connectDB from "./db";
import authRoutes from "../src/routes/Auth";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});