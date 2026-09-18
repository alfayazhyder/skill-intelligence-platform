import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import {
  listCourses,
} from "../controllers/mockIgotController.js";

const router = express.Router();

router.get("/courses", protect, listCourses);

export default router;