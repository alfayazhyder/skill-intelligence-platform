import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  uploadSingleLearningDocument,
} from "../middleware/uploadMiddleware.js";

import {
  generateQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

router.post(
  "/generate",
  protect,
  uploadSingleLearningDocument,
  generateQuiz
);

export default router;