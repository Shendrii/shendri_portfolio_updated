"use client";

import Image from "next/image";

const certifications = [
  {
    src: "/Certificates/google-data-cert.png",
    alt: "Google Foundations: Data, Data, Everywhere - Coursera Certificate",
  },
  {
    src: "/Certificates/dict-html-css-cert.png",
    alt: "DICT - Using HTML and CSS to Design a Website Certificate",
  },
  {
    src: "/Certificates/dict-python-cert.png",
    alt: "DICT - Programming for Intermediate Users Using Python Certificate",
  },
];

export default function Certifications() {
  const doubled = [...certifications, ...certifications];

  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Credentials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-[#0a0a0a]" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-[#0a0a0a]" />

          <div className="animate-scroll-left flex w-max gap-8">
            {doubled.map((cert, i) => (
              <div
                key={`${cert.alt}-${i}`}
                className="group w-[420px] shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain p-2"
                    sizes="420px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
