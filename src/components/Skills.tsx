"use client";

import { Cloud, Palette, Server, Wrench, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    icon: Palette,
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
    icon: Server,
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
    icon: Wrench,
    skills: ["VS Code", "Cursor", "Asana", "Postman", "MySQL Workbench"],
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    skills: ["AWS"],
  },
  {
    category: "Low/No-Code & Automation",
    icon: Zap,
    skills: ["Power Automate", "Make", "Bubble", "Flutterflow"],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Tech Stack
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
            <motion.div
              key={cat.category}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.07, ease: "easeOut" }}
              className="border-l-2 border-zinc-200 pl-5 transition-colors duration-200 ease-out hover:border-sky-400 dark:border-zinc-800 dark:hover:border-sky-600"
            >
              <div className="mb-3 flex items-center gap-2.5 text-sky-600 dark:text-sky-400">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
                <h3 className="font-heading text-base font-semibold text-zinc-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:bg-sky-950/50 dark:hover:text-sky-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
