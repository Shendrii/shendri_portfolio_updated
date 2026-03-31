import Image from "next/image";

const pills = [
  "Automations",
  "Low-Code",
  "System Integration",
  "Web & Mobile Dev",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
     

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Shendri Kenneth Yamba
            </span>
          </h1>

          <p className="mb-4 text-xl font-medium text-zinc-700 dark:text-zinc-300 sm:text-2xl">
            Fullstack Developer &amp; Automation Specialist
          </p>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 lg:mx-0 mx-auto">
            I build modern web applications, automate workflows, and integrate
            systems so businesses can move faster with less friction.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="mailto:shendrikenneth.yamba@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:brightness-110"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shendriyamba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-violet-300 hover:bg-violet-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-violet-700 dark:hover:bg-zinc-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Shendrii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-violet-300 hover:bg-violet-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-violet-700 dark:hover:bg-zinc-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-900 dark:bg-violet-950/50 dark:text-violet-300"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border-2 border-zinc-200 shadow-2xl shadow-violet-500/10 dark:border-zinc-800 sm:h-[480px] sm:w-[380px]">
            <Image
              src="/shendri-pic.png"
              alt="Shendri Kenneth Yamba"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 320px, 380px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
