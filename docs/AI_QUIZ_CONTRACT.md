# AI Quiz Contract

## Input

Supported initial formats:

- PDF
- DOCX

PPTX is optional.

## Pipeline

File Upload
→ Text Extraction
→ Text Validation
→ LLM
→ JSON Validation
→ Quiz
→ Submission
→ Score

## Question Internal Structure

Each generated question contains:

- id
- question
- options
- correctAnswer
- explanation

## Frontend Structure

Before submission, the frontend receives:

- id
- question
- options

The correct answer and explanation remain on the server.

## Fallback

If the LLM provider fails, use a predefined fallback quiz for the demo document.