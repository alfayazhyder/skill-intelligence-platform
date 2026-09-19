import OpenAI from "openai";

import { isValidQuiz } from "./quizValidator.js";
import { getFallbackQuiz } from "./fallbackQuiz.js";

const quizJsonSchema = {
  type: "object",
  additionalProperties: false,

  properties: {
    domain: {
      type: "string",
    },

    questions: {
      type: "array",
      minItems: 5,
      maxItems: 5,

      items: {
        type: "object",
        additionalProperties: false,

        properties: {
          question: {
            type: "string",
          },

          options: {
            type: "array",
            minItems: 4,
            maxItems: 4,
            items: {
              type: "string",
            },
          },

          correctAnswer: {
            type: "string",
          },

          explanation: {
            type: "string",
          },
        },

        required: [
          "question",
          "options",
          "correctAnswer",
          "explanation",
        ],
      },
    },
  },

  required: ["domain", "questions"],
};

export async function generateQuizFromText(text) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const trimmedText = text.slice(0, 15000);

  const response = await client.responses.create({
    model:
      process.env.OPENAI_MODEL ||
      "gpt-5.6-luna",

    instructions: `
You generate training assessment questions.

Use ONLY the supplied learning-material text.

Do not introduce facts that are not supported by the supplied text.

Generate exactly 5 multiple-choice questions.

Each question must have exactly 4 distinct options.

The correctAnswer value must exactly equal one of the options.

Keep explanations concise and educational.
    `.trim(),

    input: `
Create a quiz from this learning material:

--- START LEARNING MATERIAL ---

${trimmedText}

--- END LEARNING MATERIAL ---
    `.trim(),

    text: {
      format: {
        type: "json_schema",
        name: "training_quiz",
        strict: true,
        schema: quizJsonSchema,
      },
    },
  });

  const rawText = response.output_text;

  if (!rawText) {
    throw new Error("LLM returned no quiz content");
  }

  const quiz = JSON.parse(rawText);

  if (!isValidQuiz(quiz)) {
    throw new Error(
      "Generated quiz failed application validation"
    );
  }

  return quiz;
}

export async function generateQuizWithFallback(text) {
  try {
    const quiz = await generateQuizFromText(text);

    return {
      quiz,
      isFallback: false,
    };
  } catch (error) {
    console.error(
      "AI generation failed. Using fallback quiz:",
      error.message
    );

    return {
      quiz: getFallbackQuiz(),
      isFallback: true,
    };
  }
}