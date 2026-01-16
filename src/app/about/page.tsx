import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 text-base text-slate-300">
          This is the about page. Use the button below to return home.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
