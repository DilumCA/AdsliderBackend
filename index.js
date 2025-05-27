import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongo } from "./utils/db.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import advertisementRoutes from "./routes/advertisement.routes.js"; 
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// DB Connection
connectMongo();
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("Cloudinary Cloud Name :", process.env.CLOUDINARY_CLOUD_NAME);

// Middleware
app.use(express.json());
app.use(cors({ origin: ["https://adslider-frontend.vercel.app"], credentials: true }));

// API Routes
app.use("/api/dashboard", dashboardRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Mobile Ad Dashboard API is running....");
});


// Advertisement routes
app.use("/ads", advertisementRoutes);

app.use("/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

