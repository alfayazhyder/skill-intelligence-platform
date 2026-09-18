import { Link } from "react-router-dom";

export default function SkillGapPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/employee/dashboard"
          className="text-sm font-medium text-blue-700"
        >
          ← Dashboard
        </Link>

        <section className="mt-6 rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-red-600">Skill Gap</p>

          <h1 className="mt-2 text-3xl font-bold">
            Data Visualization
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Value label="Current" value="45%" />
            <Value label="Required" value="70%" />
            <Value label="Gap" value="25%" />
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <h2 className="font-semibold">Why this matters</h2>

            <p className="mt-2 text-slate-600">
              This competency supports clear interpretation and presentation
              of statistical information.
            </p>
          </div>

          <Link
            to="/employee/courses?skill=Data%20Visualization"
            className="mt-8 inline-flex rounded-lg bg-blue-700 px-5 py-3 font-medium text-white"
          >
            Find Recommended Courses
          </Link>
        </section>
      </div>
    </main>
  );
}

function Value({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}