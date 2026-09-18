export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Recommended Learning</h1>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Data Visualization for Official Statistics
              </h2>

              <p className="mt-2 text-slate-600">
                Demo learning module covering effective statistical
                visualization.
              </p>
            </div>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              Simulated iGOT Integration
            </span>
          </div>

          <div className="mt-5 flex gap-5 text-sm text-slate-600">
            <span>Intermediate</span>
            <span>6 Hours</span>
          </div>

          <button className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-medium text-white">
            Enrol
          </button>
        </div>
      </div>
    </main>
  );
}