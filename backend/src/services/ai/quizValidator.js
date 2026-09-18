export function isValidQuizQuestion(question) {
  if (!question || typeof question !== "object") {
    return false;
  }

  if (
    typeof question.question !== "string" ||
    !Array.isArray(question.options) ||
    question.options.length !== 4 ||
    typeof question.correctAnswer !== "string" ||
    typeof question.explanation !== "string"
  ) {
    return false;
  }

  return question.options.includes(question.correctAnswer);
}