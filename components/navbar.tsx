import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <nav className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-accent">
          isaacpasapera.dev
        </Link>
        <ul className="flex gap-5 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="transition hover:text-foreground" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
