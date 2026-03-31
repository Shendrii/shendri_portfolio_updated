export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:p-12">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
          </div>

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-3xl dark:bg-violet-950/50">
              ✉️
            </div>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
              Let&apos;s Work Together
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              Have a project in mind or need help automating your workflows?
              I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:shendrikenneth.yamba@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:brightness-110"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              shendrikenneth.yamba@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
