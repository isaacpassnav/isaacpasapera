"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-[0.22em] text-accent"
        >
          Projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold md:text-4xl"
        >
          Selected Product and Engineering Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-muted"
        >
          Portfolio projects focused on performance, clean architecture, and production standards.
        </motion.p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -5, transition: { duration: 0.18 } }}
            className="card p-5"
          >
            <p className="text-xs text-slate-400">{project.year}</p>
            <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-sm text-muted">{project.summary}</p>
            <p className="mt-4 text-xs text-accent">{project.tech.join(" | ")}</p>
            <Link
              className="mt-5 inline-block text-sm font-medium text-cyan-200 hover:text-cyan-100"
              href={`/projects/${project.slug}`}
            >
              Read case study
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
