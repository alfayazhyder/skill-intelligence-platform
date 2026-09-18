export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          MoSPI / NSSTA
        </p>

        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          Skill Intelligence Platform
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Phase 1 frontend foundation is running.
        </p>

        <div className="mt-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          Authentication UI will connect to the backend after foundation
          verification.
        </div>
      </section>
    </main>
  );
}