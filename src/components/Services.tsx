const services = [
  {
    icon: "⚙️",
    title: "Automations",
    description:
      "Streamline your operations with intelligent workflow and process automation that saves time and reduces errors.",
  },
  {
    icon: "🧩",
    title: "Low-Code Customization",
    description:
      "Build and extend low-code platforms to create tailored solutions without the overhead of traditional development.",
  },
  {
    icon: "🔗",
    title: "System Integration & API Connectivity",
    description:
      "Connect your tools and services via APIs to create seamless data flows across your entire tech stack.",
  },
  {
    icon: "💻",
    title: "Web & Mobile App Development",
    description:
      "End-to-end fullstack web and mobile solutions built with modern frameworks for performance and scalability.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            What I Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl dark:bg-violet-950/50">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
