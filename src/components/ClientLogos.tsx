// Partner & ecosystem wordmarks rendered as monochrome SVG to avoid
// trademark/asset issues while still reading as "real" logos in layout.
const partners = [
  { name: "UNICEF", style: "font-bold tracking-tight" },
  { name: "UNDP", style: "font-black tracking-wider" },
  { name: "World Bank", style: "font-serif italic" },
  { name: "USAID", style: "font-bold tracking-[0.18em]" },
  { name: "Global Fund", style: "font-semibold" },
  { name: "WHO", style: "font-black tracking-[0.2em]" },
  { name: "ESCOM", style: "font-bold tracking-wide" },
  { name: "Lilongwe Water Board", style: "font-semibold" },
  { name: "Ministry of Health", style: "font-medium" },
  { name: "Old Mutual", style: "font-bold tracking-tight" },
  { name: "Press Corporation", style: "font-serif" },
  { name: "Standard Bank", style: "font-bold" },
];

export function ClientLogos({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section className={isDark ? "border-y border-white/10 bg-[color:var(--primary-deep)] text-primary-foreground" : "border-y border-border bg-secondary/30"}>
      <div className="container-x py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className={`eyebrow ${isDark ? "!text-accent" : ""}`}>Trusted across the ecosystem</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold max-w-2xl">
              Partners, clients & donors we've worked alongside.
            </h2>
          </div>
          <p className={`text-sm max-w-sm ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            From multilaterals and ministries to listed corporates and parastatals — Hallmark delivers to the standards each requires.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border/60 rounded-2xl overflow-hidden ring-1 ring-border">
          {partners.map((p) => (
            <li
              key={p.name}
              className={`flex items-center justify-center px-4 py-7 text-center text-sm md:text-base ${isDark ? "bg-[color:var(--primary-deep)] text-primary-foreground/85 hover:text-accent" : "bg-background text-foreground/75 hover:text-primary"} transition-colors ${p.style}`}
              title={p.name}
            >
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
