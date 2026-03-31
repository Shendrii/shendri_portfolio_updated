import Image from "next/image";

const upcomingPosts = [
  {
    emoji: "🧩",
    category: "Low-Code",
    title: "When to Choose Low-Code Over Custom Development",
    description:
      "A practical guide for deciding between low-code platforms and traditional development based on project needs.",
    date: "Coming Soon",
  },
  {
    emoji: "🔗",
    category: "Integration",
    title: "Building Robust API Integrations That Scale",
    description:
      "Lessons learned from integrating dozens of third-party APIs and keeping them reliable in production.",
    date: "Coming Soon",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Insights
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Blog
          </h2>
        </div>

        {/* Featured Post */}
        <a
          href="https://likhait.com/navigating-growth-my-journey-as-an-intern-at-likha-it-inc/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-10 block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[2/1] md:aspect-auto">
              <Image
                src="/image.png"
                alt="Navigating Growth: My Journey as an Intern at Likha IT Inc."
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                  Internship
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  July 2024 &middot; 8 min read
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-zinc-900 dark:text-white sm:text-2xl">
                Navigating Growth: My Journey as an Intern at Likha IT Inc.
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                A reflection on my internship experience — the challenges I
                faced, the personal growth I experienced, and the valuable
                lessons I learned working on real-world projects with React and
                Ruby on Rails.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-colors group-hover:text-violet-500 dark:text-violet-400 dark:group-hover:text-violet-300">
                Read full post
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Upcoming Posts */}
        <div className="grid gap-6 sm:grid-cols-2">
          {upcomingPosts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xl dark:bg-violet-950/50">
                  {post.emoji}
                </span>
                <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                  {post.category}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-zinc-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {post.description}
              </p>
              <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                {post.date}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
  
        </div>
      </div>
    </section>
  );
}
