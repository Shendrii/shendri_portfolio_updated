"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a]"
        >
          {/* Initials */}
          <div className="relative flex items-center justify-center">
            {/* Glow ring */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.15 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute h-36 w-36 rounded-full bg-violet-500 blur-2xl"
            />

            {/* Letters animate in one by one */}
            <div className="relative flex gap-1">
              {["S", "K", "Y"].map((letter, i) => (
                <motion.span
                  key={letter}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                  className="text-7xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-8xl"
                >
                  {letter}
                </motion.span>
              ))}

              {/* Accent dot */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.3, ease: "backOut" }}
                className="self-end pb-2 text-5xl font-bold text-violet-600 sm:text-6xl"
              >
                .
              </motion.span>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 text-sm font-medium tracking-widest text-zinc-400 uppercase dark:text-zinc-500"
          >
            Shendri Kenneth Yamba
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-violet-600 to-indigo-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
