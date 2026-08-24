"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Credentials
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.alt}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-[border-color,box-shadow] duration-200 ease-out hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-700"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
