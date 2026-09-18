export function isValidQuizQuestion(question) {
  if (!question || typeof question !== "object") {
    return false;
  }

  if (
    typeof question.question !== "string" ||
    question.question.trim().length < 5
  ) {
    return false;
  }

  if (
    !Array.isArray(question.options) ||
    question.options.length !== 4
  ) {
    return false;
  }

  if (
    !question.options.every(
      (option) =>
        typeof option === "string" &&
        option.trim().length > 0
    )
  ) {
    return false;
  }

  if (new Set(question.options).size !== 4) {
    return false;
  }

  if (
    typeof question.correctAnswer !== "string" ||
    !question.options.includes(question.correctAnswer)
  ) {
    return false;
  }

  if (
    typeof question.explanation !== "string" ||
    question.explanation.trim().length < 5
  ) {
    return false;
  }

  return true;
}

export function isValidQuiz(quiz) {
  if (!quiz || typeof quiz !== "object") {
    return false;
  }

  if (
    typeof quiz.domain !== "string" ||
    quiz.domain.trim().length === 0
  ) {
    return false;
  }

  if (
    !Array.isArray(quiz.questions) ||
    quiz.questions.length !== 5
  ) {
    return false;
  }

  return quiz.questions.every(isValidQuizQuestion);
}