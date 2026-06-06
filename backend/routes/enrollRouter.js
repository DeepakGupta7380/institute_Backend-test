import { Router } from "express";
import {
  addEnrolls,
  getEnrolls,
  deleteEnroll,
  updateEnroll,
} from "../controllers/enroll.controller.js";

const enrollRouter = Router();


   Enrollment Routes


// Create Enrollment
enrollRouter.post("/", addEnrolls);

// Get All Enrollments
enrollRouter.get("/", getEnrolls);

// Update Enrollment
enrollRouter.put("/:id", updateEnroll);

// Delete Enrollment
enrollRouter.delete("/:id", deleteEnroll);

export default enrollRouter;
