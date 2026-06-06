import { Router } from "express";
import {
  addStudent,
  getAllStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

const studentRouter = Router();


   Student Routes


// Create Student
studentRouter.post("/", addStudent);

// Get All Students
studentRouter.get("/", getAllStudent);

// Delete Student
studentRouter.delete("/:id", deleteStudent);

export default studentRouter;
