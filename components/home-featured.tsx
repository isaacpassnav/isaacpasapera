"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FeaturedItem {
  key: string;
  title: string;
  summary: string;
  tech: string[];
  href: string;
}

interface Props {
  items: FeaturedItem[];
}

export function HomeFeatured({ items }: Props) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          Featured Work
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/projects" className="text-sm text-accent hover:text-cyan-300">
            View all projects
          </Link>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 150 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="card flex h-full flex-col p-5"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm text-muted">{item.summary}</p>
            <p className="mt-4 text-xs text-accent">{item.tech.join(" | ")}</p>
            <a
              className="mt-5 inline-flex items-center text-sm font-medium text-cyan-200 hover:text-cyan-100"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              Open project
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
