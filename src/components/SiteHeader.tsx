import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions/ict", label: "ICT" },
  { to: "/solutions/industrial", label: "Industrial" },
  { to: "/solutions/healthcare", label: "Healthcare" },
  { to: "/solutions/printing", label: "Printing & Branding" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold">H</span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-foreground">Hallmark</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">The Only Way</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href="tel:+265881091909" className="btn-ghost !py-2 !px-4 text-xs">+265 881 091 909</a>
          <Link to="/contact" className="btn-primary !py-2 !px-4 text-xs">Talk to Sales →</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden rounded-md p-2" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-4 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-secondary">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 self-start">Talk to Sales →</Link>
          </div>
        </div>
      )}
    </header>
  );
}
