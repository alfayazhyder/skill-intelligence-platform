export default function QuizGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">AI Quiz Generator</h1>

        <p className="mt-2 text-slate-600">
          Generate assessment questions from learning material.
        </p>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <div className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center">
            <p className="font-semibold">Upload Learning Material</p>

            <p className="mt-2 text-sm text-slate-500">
              PDF or DOCX · Maximum 5 MB
            </p>

            <input
              className="mt-6"
              type="file"
              accept=".pdf,.docx"
            />
          </div>

          <button className="mt-6 w-full rounded-lg bg-blue-700 px-5 py-3 font-medium text-white">
            Generate Quiz
          </button>
        </section>
      </div>
    </main>
  );
}