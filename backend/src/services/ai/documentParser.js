import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";

export async function extractDocumentText(file) {
  if (!file) {
    throw new Error("No document supplied");
  }

  if (file.mimetype === "application/pdf") {
    return extractPdfText(file.buffer);
  }

  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return extractDocxText(file.buffer);
  }

  throw new Error("Unsupported document type");
}

async function extractPdfText(buffer) {
  const parser = new PDFParse({
    data: Uint8Array.from(buffer),
  });

  try {
    const result = await parser.getText();

    return normalizeText(result.text || "");
  } finally {
    await parser.destroy();
  }
}

async function extractDocxText(buffer) {
  const result = await mammoth.extractRawText({
    buffer,
  });

  return normalizeText(result.value || "");
}

function normalizeText(text) {
  return text
    .replace(/\u0000/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}