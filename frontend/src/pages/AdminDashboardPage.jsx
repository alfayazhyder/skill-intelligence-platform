export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Administrator
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Monitor employee skills, training progress, and quiz performance.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Employees</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">250</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Employees with Skill Gaps</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">82</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Training Progress</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">68%</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Average Quiz Score</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">76%</p>
          </div>
        </div>

        {/* Organization Skill Gaps */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Organization Skill Gaps
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-700">
                  Data Analysis
                </span>
                <span className="text-sm text-slate-500">72%</span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[72%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-700">
                  Statistical Methods
                </span>
                <span className="text-sm text-slate-500">58%</span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[58%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-700">
                  Data Visualization
                </span>
                <span className="text-sm text-slate-500">45%</span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[45%] rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Training Effectiveness */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Training Effectiveness
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-sm font-semibold text-slate-600">
                    Course
                  </th>
                  <th className="pb-3 text-sm font-semibold text-slate-600">
                    Completion
                  </th>
                  <th className="pb-3 text-sm font-semibold text-slate-600">
                    Avg Score
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 text-slate-800">
                    Introduction to Data Analysis
                  </td>
                  <td className="py-4 text-slate-600">82%</td>
                  <td className="py-4 text-slate-600">78%</td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 text-slate-800">
                    Statistical Methods
                  </td>
                  <td className="py-4 text-slate-600">74%</td>
                  <td className="py-4 text-slate-600">72%</td>
                </tr>

                <tr>
                  <td className="py-4 text-slate-800">
                    Data Visualization
                  </td>
                  <td className="py-4 text-slate-600">61%</td>
                  <td className="py-4 text-slate-600">79%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}