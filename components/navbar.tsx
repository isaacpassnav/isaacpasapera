"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur">
      <nav className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.14em] text-accent">
          ISAACPASAPERA.DEV
        </Link>

        <ul className="flex items-center gap-5 text-sm text-muted">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  className={isActive ? "text-foreground" : "hover:text-foreground"}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
