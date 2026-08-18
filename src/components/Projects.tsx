"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type GalleryProject = {
  type: "gallery";
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link: string;
};

const projects: GalleryProject[] = [
  {
    type: "gallery",
    title: "Accountrix",
    description:
      "Full-stack accounting workspace for daily bookkeeping, sales and purchases, banking, reporting, and period close. It includes an AI financial assistant for answering context-aware questions about reports, invoices, and receipts.",
    tags: ["Web App", "Finance", "Full Stack"],
    images: [
      "/accountrix-1.png",
      "/accountrix-2.png",
      "/accountrix-3.png",
      "/accountrix-4.png",
    ],
    link: "https://accountrix-app.vercel.app/",
  },
  {
    type: "gallery",
    title: "Home Fix",
    description:
      "A full-stack home services platform connecting homeowners with verified local professionals. Features a dispatch queue, partner performance leaderboard, real-time job tracking, and multi-role dashboards for homeowners, service partners, and operations.",
    tags: ["Web App", "Marketplace", "Full Stack"],
    images: [
      "/homefix-1.png",
      "/homefix-2.png",
      "/homefix-3.png",
      "/homefix-4.png",
    ],
    link: "http://home-fix-six.vercel.app/",
  },
];

function Carousel({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal box — stop click propagation so only backdrop closes */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative flex w-full max-w-4xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 transition hover:text-white"
          aria-label="Close carousel"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`Screenshot ${current + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
          aria-label="Previous"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
          aria-label="Next"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-sky-400" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-sm text-white/50">
          {current + 1} / {images.length}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [carousel, setCarousel] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Sample Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500 dark:text-zinc-400">
            A look at some of the projects I&apos;ve built and deployed.
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-700"
              >
                <button
                  onClick={() => setCarousel({ images: project.images, index: 0 })}
                  className="group relative block aspect-video w-full overflow-hidden bg-zinc-100 text-left focus:outline-none dark:bg-zinc-800"
                  aria-label={`View ${project.title} screenshots`}
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={project.title === "Accountrix"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.images.length} screenshots
                  </span>
                </button>

                <div className="p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-950/50 dark:text-sky-300"
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
                  <div className="flex flex-wrap items-center gap-5">
                    <button
                      onClick={() => setCarousel({ images: project.images, index: 0 })}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      View Screenshots
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      View Live
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14M5 5v14a2 2 0 002 2h14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* Carousel portal */}
      <AnimatePresence>
        {carousel && (
          <Carousel
            images={carousel.images}
            startIndex={carousel.index}
            onClose={() => setCarousel(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
