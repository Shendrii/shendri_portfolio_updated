"use client";

import Image from "next/image";
import { GitFork, Mail, Network } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const pills = [
  "Automations",
  "Low-Code",
  "System Integration",
  "Web & Mobile Dev",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.28, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/5" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
     

          <motion.h1
            {...entrance(0)}
            className="mb-8 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-600 to-sky-600 bg-clip-text text-transparent">
              Shendri Kenneth Yamba
            </span>
          </motion.h1>

          <motion.p
            {...entrance(0.09)}
            className="mb-5 text-lg font-medium text-zinc-700 dark:text-zinc-300 sm:text-xl"
          >
            Fullstack Developer &amp; Automation Specialist
          </motion.p>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 lg:mx-0 mx-auto">
            I build modern web applications, automate workflows, and integrate
            systems so businesses can move faster with less friction.
          </p>

          <motion.div
            {...entrance(0.18)}
            className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="mailto:shendrikenneth.yamba@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shendriyamba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-sky-300 hover:bg-sky-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-sky-700 dark:hover:bg-zinc-800"
            >
              <Network className="h-4 w-4" strokeWidth={1.75} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Shendrii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-sky-300 hover:bg-sky-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-sky-700 dark:hover:bg-zinc-800"
            >
              <GitFork className="h-4 w-4" strokeWidth={1.75} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            {...entrance(0.27)}
            className="flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border-2 border-zinc-200 shadow-2xl shadow-sky-500/10 dark:border-zinc-800 sm:h-[480px] sm:w-[380px]">
            <Image
              src="/shendri-pic.jpg"
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
