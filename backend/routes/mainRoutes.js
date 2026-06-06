import { Router } from "express";

import studentRouter from "./student.route.js";
import courseRouter from "./course.route.js";
import enrollRouter from "./enrollment.route.js";
import analyticsRouter from "./analytics.route.js";

const mainRouter = Router();

/* =========================
   API Routes
========================= */

mainRouter.use("/students", studentRouter);
mainRouter.use("/courses", courseRouter);
mainRouter.use("/enrollments", enrollRouter);
mainRouter.use("/analytics", analyticsRouter);

export default mainRouter;