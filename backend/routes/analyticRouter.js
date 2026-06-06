import { Router } from "express";

import {
  getTotalEnrollments,
  courseStudentCount,
  revenuePerCourse,
  topCourses,
} from "../controllers/analytic.controller.js";

const analyticRouter = Router();

// Total Enrollments
analyticRouter.get("/total-enrollments", getTotalEnrollments);

// Course-wise Student Count
analyticRouter.get(
  "/course-student-count",
  courseStudentCount
);

// Revenue Per Course
analyticRouter.get(
  "/revenue",
  revenuePerCourse
);

// Top 3 Courses
analyticRouter.get(
  "/top-courses",
  topCourses
);

export default analyticRouter;