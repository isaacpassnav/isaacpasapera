"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="space-y-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-[0.22em] text-accent"
      >
        Full Stack Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
      >
        I build fast, reliable products with clean architecture.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="max-w-2xl text-base text-muted md:text-lg"
      >
        I am Isaac Pasapera, a full stack developer focused on production quality, rapid
        iteration, and clear product outcomes. I work with modern web technologies to ship
        solutions that are scalable and maintainable.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.36 }}
        className="flex flex-wrap gap-3"
      >
        <Link className="button-primary" href="/projects">
          Explore projects
        </Link>
        <Link className="button-secondary" href="/contact">
          Let us work together
        </Link>
      </motion.div>
    </div>
  );
}
