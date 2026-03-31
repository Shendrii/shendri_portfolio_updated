const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Prettier",
      "ESLint",
    ],
  },
  {
    category: "Backend",
    icon: "🖥️",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Airtable",
      "PostgreSQL",
      "Prisma",
      "REST",
      "MySQL",
      "AWS Lambda",
    ],
  },
  {
    category: "Developer Tools",
    icon: "🛠️",
    skills: ["VS Code", "Cursor", "Asana", "Postman", "MySQL Workbench"],
  },
  {
    category: "Cloud Services",
    icon: "☁️",
    skills: ["AWS"],
  },
  {
    category: "Low/No-Code & Automation",
    icon: "⚡",
    skills: ["Power Automate", "Make", "Bubble", "Flutterflow"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xl dark:bg-violet-950/50">
                  {cat.icon}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-violet-700 dark:hover:bg-violet-950/50 dark:hover:text-violet-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
