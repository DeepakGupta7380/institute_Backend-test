import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import mainRouter from "./routes/main.route.js";

dotenv.config();

const app = express();

/* =========================
   Middlewares
========================= */
app.use(express.json());

/* =========================
   Routes
========================= */
app.use("/api/v1", mainRouter);

/* =========================
   DB Connection + Server Start
========================= */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  });