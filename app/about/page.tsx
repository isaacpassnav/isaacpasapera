"use client";

import { motion } from "framer-motion";
import { TechOrbit } from "@/components/tech-orbit";

const OPTIMIZE_ITEMS = [
  "Core Web Vitals & loading performance",
  "Developer experience and clean API design",
  "Scalable, maintainable architecture patterns",
  "UX clarity, accessibility, and interaction quality",
  "Backend reliability and data integrity",
];

const WORK_ITEMS = [
  "Start with clear, measurable product outcomes",
  "Ship fast, then iterate with real feedback",
  "Write self-documenting, maintainable code",
  "Communicate progress and blockers clearly",
  "Production-first mindset from day one",
];

const listItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
  return (
    <section className="space-y-14 md:space-y-20">
      {/* Header */}
      <header className="space-y-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-[0.22em] text-accent"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
        >
          Engineering with product focus
          <br />
          <span className="text-accent">and delivery speed</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="max-w-3xl text-muted leading-relaxed"
        >
          I build full stack web products with a practical mindset: define measurable
          outcomes, choose maintainable architecture, and ship iterations quickly. I care
          about reliability, clean code, and clear communication across teams.
        </motion.p>
      </header>

      {/* Core Stack — 3D Orbit */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Core Stack</h2>
          <p className="text-sm text-muted">Technologies I use day to day across projects.</p>
        </div>
        <TechOrbit />
      </motion.section>

      {/* What I optimize + How I work */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* What I optimize */}
        <motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card p-6 space-y-5"
        >
          <h2 className="text-xl font-semibold">What I optimize</h2>
          <ul className="space-y-3">
            {OPTIMIZE_ITEMS.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItemVariants}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.article>

        {/* How I work */}
        <motion.article
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card p-6 space-y-5"
        >
          <h2 className="text-xl font-semibold">How I work</h2>
          <ul className="space-y-3">
            {WORK_ITEMS.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItemVariants}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
