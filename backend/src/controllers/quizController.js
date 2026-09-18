import Quiz from "../models/Quiz.js";

import {
  extractDocumentText,
} from "../services/ai/documentParser.js";

import {
  generateQuizWithFallback,
} from "../services/ai/quizService.js";

export async function generateQuiz(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF or DOCX file",
        data: null,
      });
    }

    const extractedText = await extractDocumentText(
      req.file
    );

    if (extractedText.length < 200) {
      return res.status(422).json({
        success: false,
        message:
          "The document does not contain enough extractable text",
        data: null,
      });
    }

    const { quiz: generatedQuiz, isFallback } =
      await generateQuizWithFallback(extractedText);

    const quiz = await Quiz.create({
      sourceFile: req.file.originalname,
      domain: generatedQuiz.domain,
      generatedBy: req.user.userId,
      isFallback,
      questions: generatedQuiz.questions,
    });

    const safeQuestions = quiz.questions.map(
      (question) => ({
        id: question._id.toString(),
        question: question.question,
        options: question.options,
      })
    );

    return res.status(201).json({
      success: true,
      message: isFallback
        ? "Fallback quiz generated"
        : "AI quiz generated successfully",

      data: {
        quizId: quiz._id,
        sourceFile: quiz.sourceFile,
        domain: quiz.domain,
        isFallback,
        questions: safeQuestions,
      },
    });
  } catch (error) {
    console.error("Quiz generation error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to generate quiz",
      data: null,
    });
  }
}