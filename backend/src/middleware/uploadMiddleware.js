import multer from "multer";

const allowedMimeTypes = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, callback) => {
    if (!allowedMimeTypes.has(file.mimetype)) {
      return callback(
        new Error("Only PDF and DOCX files are supported")
      );
    }

    callback(null, true);
  },
});

export function uploadSingleLearningDocument(
  req,
  res,
  next
) {
  upload.single("file")(req, res, (error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        data: null,
      });
    }

    next();
  });
}