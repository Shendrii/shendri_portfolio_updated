import Image from "next/image";

const projects = [
  {
    title: "Accounting System",
    description:
      "Full-stack small-business accounting: invoices, bills, double-entry bookkeeping, receipts and bank reconciliation — with a built-in AI chatbot, a modern Next.js UI, and a secure REST API.",
    tags: ["Web App", "Finance", "Full Stack"],
    image: "/Brown Modern Visit Our Website Video Instagram Post.png",
    link: "https://accounting-software-sky.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Sample Project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500 dark:text-zinc-400">
            A look at some of the projects I&apos;ve built and deployed.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-600">
                    <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/50 dark:text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-colors group-hover:text-violet-500 dark:text-violet-400 dark:group-hover:text-violet-300">
                  View Project
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
