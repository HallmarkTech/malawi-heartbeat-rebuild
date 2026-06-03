import { Link } from "@tanstack/react-router";
import { useState } from "react";

const sbus = [
  { to: "/solutions/ict", label: "ICT", desc: "Software, cloud, cybersecurity, managed IT." },
  { to: "/solutions/industrial", label: "Industrial Solutions", desc: "Smart water, solar EPC, SCADA, fabrication." },
  { to: "/solutions/healthcare", label: "Healthcare Solutions", desc: "Medical equipment, lab, biomedical lifecycle." },
  { to: "/solutions/printing", label: "Commercial Printing", desc: "Offset, large format, signage, merchandise." },
] as const;

const primaryNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [sbuOpen, setSbuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" width={40} height={40} className="h-10 w-auto" alt="Hallmark Limited" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition"
            activeProps={{ className: "text-primary bg-secondary" }}
            activeOptions={{ exact: true }}
          >Home</Link>
          <Link to="/about" className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition" activeProps={{ className: "text-primary bg-secondary" }}>About</Link>

          {/* Business Units dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSbuOpen(true)}
            onMouseLeave={() => setSbuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSbuOpen((v) => !v)}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition inline-flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={sbuOpen}
            >
              Business Units
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {sbuOpen && (
              <div role="menu" className="absolute left-0 top-full pt-2 w-80">
                <div className="rounded-2xl border border-border bg-background shadow-[var(--shadow-elev)] p-2">
                  {sbus.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setSbuOpen(false)}
                      className="block rounded-xl px-3 py-2.5 hover:bg-secondary transition"
                      activeProps={{ className: "bg-secondary" }}
                    >
                      <div className="text-sm font-semibold text-foreground">{s.label}</div>
                      <div className="text-xs text-muted-foreground">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/industries" className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition" activeProps={{ className: "text-primary bg-secondary" }}>Industries</Link>
          <Link to="/case-studies" className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition" activeProps={{ className: "text-primary bg-secondary" }}>Case Studies</Link>
          <Link to="/blog" className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition" activeProps={{ className: "text-primary bg-secondary" }}>Insights</Link>
          <Link to="/contact" className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition" activeProps={{ className: "text-primary bg-secondary" }}>Contact</Link>
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
            {primaryNav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-secondary">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 px-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Business Units</div>
            {sbus.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-secondary">
                {s.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 self-start">Talk to Sales →</Link>
          </div>
        </div>
      )}
    </header>
  );
}
