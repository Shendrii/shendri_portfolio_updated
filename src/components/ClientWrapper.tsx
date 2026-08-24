"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Loader from "./Loader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Show loader for 2s then dismiss
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isVisible={loading} />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
