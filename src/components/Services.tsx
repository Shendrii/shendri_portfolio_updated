"use client";

import { Cable, Cog, MonitorSmartphone, Puzzle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: Cog,
    title: "Automations",
    description:
      "Automate repetitive tasks and workflows so your team can focus on what matters.",
  },
  {
    icon: Puzzle,
    title: "Low-Code Customization",
    description:
      "Customize and extend low-code platforms to fit your exact needs — no heavy coding required.",
  },
  {
    icon: Cable,
    title: "API Integrations",
    description:
      "Connect your apps and tools through APIs so your data flows smoothly across systems.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web & Mobile App Development",
    description:
      "Build fast, modern web and mobile apps from front to back using the latest frameworks.",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            What I Do
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.article
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 transition-[border-color,box-shadow] duration-200 ease-out hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-700"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {service.description}
              </p>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
}
