const gaps = [
  {
    skill: "Data Visualization",
    current: 45,
    required: 70,
  },
  {
    skill: "Survey Methodology",
    current: 50,
    required: 75,
  },
  {
    skill: "National Accounts",
    current: 60,
    required: 80,
  },
];

export default function EmployeeDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-blue-700">
          MoSPI / NSSTA Skill Intelligence Platform
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Welcome, Rahul Sharma
        </h1>

        <p className="mt-1 text-slate-600">
          Statistical Officer · National Accounts
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <MetricCard
            label="Overall Competency"
            value="72%"
          />

          <MetricCard
            label="Skill Gaps"
            value="3"
          />

          <MetricCard
            label="Learning Progress"
            value="45%"
          />
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Priority Skill Gaps
          </h2>

          <div className="mt-5 space-y-4">
            {gaps.map((gap) => (
              <div
                key={gap.skill}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      {gap.skill}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Current {gap.current}% · Required{" "}
                      {gap.required}%
                    </p>
                  </div>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                    Gap {gap.required - gap.current}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}