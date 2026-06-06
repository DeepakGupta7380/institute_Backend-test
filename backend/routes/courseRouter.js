import { Router } from "express";
import {
  addCourse,
  getAllCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

const courseRouter = Router();


 


// Add Course
courseRouter.post("/", addCourse);

// Get All Courses
courseRouter.get("/", getAllCourse);

// Delete Course
courseRouter.delete("/:id", deleteCourse);

export default courseRouter;
