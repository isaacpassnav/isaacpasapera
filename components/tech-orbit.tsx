"use client";

import { motion } from "framer-motion";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const INNER_RING = [
  { name: "TypeScript", color: "#3178C6", iconPath: "typescript/typescript-original.svg" },
  { name: "React", color: "#61DAFB", iconPath: "react/react-original.svg" },
  { name: "Next.js", color: "#E2E8F0", iconPath: "nextjs/nextjs-original.svg" },
  { name: "Node.js", color: "#339933", iconPath: "nodejs/nodejs-original.svg" },
  { name: "Python", color: "#3776AB", iconPath: "python/python-original.svg" },
];

const OUTER_RING = [
  { name: "JavaScript", color: "#F7DF1E", iconPath: "javascript/javascript-original.svg" },
  { name: "NestJS", color: "#E0234E", iconPath: "nestjs/nestjs-original.svg" },
  { name: "PHP", color: "#777BB4", iconPath: "php/php-original.svg" },
  { name: "Laravel", color: "#FF2D20", iconPath: "laravel/laravel-original.svg" },
  { name: "PostgreSQL", color: "#4169E1", iconPath: "postgresql/postgresql-original.svg" },
];

const ALL_TECH = [...INNER_RING, ...OUTER_RING];

// ─── Mobile grid (< md) ───────────────────────────────────────────────────────

function MobileGrid() {
  return (
    <div className="grid grid-cols-5 gap-2 md:hidden">
      {ALL_TECH.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 220, damping: 20, delay: i * 0.05 }}
          className="flex flex-col items-center gap-1 rounded-lg border p-1.5"
          style={{
            borderColor: `${tech.color}30`,
            backgroundColor: `${tech.color}08`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ICON_BASE}${tech.iconPath}`}
            alt={tech.name}
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span
            className="text-center text-[9px] font-semibold leading-tight"
            style={{ color: tech.color }}
          >
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Desktop orbit (≥ md) ─────────────────────────────────────────────────────

function getOrbitPath(
  index: number,
  total: number,
  rx: number,
  ry: number,
  clockwise: boolean,
) {
  const N = 37;
  const startAngle = (index / total) * Math.PI * 2;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let k = 0; k < N; k++) {
    const angle = startAngle + (clockwise ? 1 : -1) * (k / (N - 1)) * Math.PI * 2;
    xs.push(Math.cos(angle) * rx);
    ys.push(Math.sin(angle) * ry);
  }
  return { x: xs, y: ys };
}

interface BadgeProps {
  tech: { name: string; color: string; iconPath: string };
  orbitPath: { x: number[]; y: number[] };
  duration: number;
}

function OrbitalBadge({ tech, orbitPath, duration }: BadgeProps) {
  return (
    <div style={{ position: "absolute", left: "50%", top: "50%" }}>
      <motion.div
        animate={orbitPath}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          whileHover={{ scale: 1.25, transition: { duration: 0.15 } }}
          className="flex flex-col items-center gap-1 rounded-xl border px-2.5 py-2 backdrop-blur-sm"
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: `${tech.color}35`,
            backgroundColor: "#0B0F19",
            boxShadow: `0 0 16px ${tech.color}18, 0 2px 8px rgba(0,0,0,0.5)`,
            minWidth: "68px",
            cursor: "default",
            userSelect: "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ICON_BASE}${tech.iconPath}`}
            alt={tech.name}
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span
            className="text-[10px] font-semibold leading-none"
            style={{ color: tech.color }}
          >
            {tech.name}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function OrbitView() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="hidden md:block"
      style={{ position: "relative", width: "100%", height: "320px" }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Orbit ring guides */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "240px",
          height: "90px",
          borderRadius: "50%",
          border: "1px solid rgba(148,163,184,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "140px",
          borderRadius: "50%",
          border: "1px solid rgba(148,163,184,0.05)",
          pointerEvents: "none",
        }}
      />

      {/* Center node */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700"
          style={{
            background: "rgba(11, 15, 25, 0.95)",
            boxShadow: "0 0 24px rgba(34,211,238,0.15), 0 0 8px rgba(34,211,238,0.08)",
          }}
        >
          <span className="text-xs font-bold text-accent">IP</span>
        </motion.div>
      </div>

      {/* Inner ring — clockwise, 18s */}
      {INNER_RING.map((tech, i) => (
        <OrbitalBadge
          key={tech.name}
          tech={tech}
          orbitPath={getOrbitPath(i, INNER_RING.length, 120, 44, true)}
          duration={18}
        />
      ))}

      {/* Outer ring — counter-clockwise, 28s */}
      {OUTER_RING.map((tech, i) => (
        <OrbitalBadge
          key={tech.name}
          tech={tech}
          orbitPath={getOrbitPath(i, OUTER_RING.length, 200, 70, false)}
          duration={28}
        />
      ))}
    </motion.div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function TechOrbit() {
  return (
    <>
      <MobileGrid />
      <OrbitView />
    </>
  );
}
