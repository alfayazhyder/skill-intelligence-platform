import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  options: {
    type: [String],
    required: true,
  },

  correctAnswer: {
    type: String,
    required: true,
  },

  explanation: {
    type: String,
    required: true,
  },
});

const quizSchema = new mongoose.Schema(
  {
    sourceFile: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    isFallback: {
      type: Boolean,
      default: false,
    },

    questions: {
      type: [questionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;