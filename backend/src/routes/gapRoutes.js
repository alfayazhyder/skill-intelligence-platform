import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { getSkillGaps } from "../controllers/gapController.js";

const router = express.Router();

router.get("/", protect, getSkillGaps);

export default router;
