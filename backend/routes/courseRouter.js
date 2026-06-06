import { Router } from "express";
import {
  addCourse,
  getAllCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

const courseRouter = Router();

/* =========================
   Course Routes
========================= */

// Add Course
courseRouter.post("/", addCourse);

// Get All Courses
courseRouter.get("/", getAllCourse);

// Delete Course
courseRouter.delete("/:id", deleteCourse);

export default courseRouter;