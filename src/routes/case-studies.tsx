import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbsJsonLd } from "@/lib/seo";

const cases = [
  {
    sector: "Water Utility · Zambia",
    title: "NRW Reduction Pilot — 28% physical loss reduction in 90 days",
    summary: "Deployed 50 smart water meters and 3 remote-level sensors integrated with existing billing and SCADA platforms. Achieved 28% reduction in physical losses and 22% improvement in billing accuracy within the first 90 days.",
    kpis: [["28%", "physical loss ↓"], ["22%", "billing accuracy ↑"], ["90 days", "to results"]],
    tags: ["Industrial", "Smart Water", "SCADA"],
  },
  {
    sector: "Healthcare · Malawi",
    title: "Hospital Power Resilience — Zero downtime through grid outages",
    summary: "Installed a 120kVA solar-hybrid system with 4-hour battery backup serving ICU and theatre. Delivered zero downtime during national grid outages, with biomedical handover and SOPs.",
    kpis: [["120kVA", "solar-hybrid"], ["4 hrs", "battery backup"], ["0", "downtime events"]],
    tags: ["Healthcare", "Solar", "Critical Care"],
  },
  {
    sector: "Corporate Branding · SADC",
    title: "Multi-country Rebrand Rollout — 14 sites, 3 countries, 6 weeks",
    summary: "Executed simultaneous brand rollout for 14 sites across 3 SADC countries in 6 weeks — signage, fleet wraps, interior branding — on time and to brand guidelines, with Pantone-matched output.",
    kpis: [["14", "sites"], ["3", "countries"], ["6 wks", "delivery"]],
    tags: ["Printing", "Brand Rollout", "Signage"],
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Hallmark Limited | Africa Engineering & Technology Outcomes" },
      { name: "description", content: "Real outcomes from Hallmark Limited projects: NRW reduction for African water utilities, hospital power resilience in Malawi, multi-country brand rollouts across SADC." },
      { property: "og:title", content: "Case Studies — Hallmark Limited" },
      { property: "og:description", content: "Measurable engineering and technology outcomes across Sub-Saharan Africa." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "Case Studies", url: "https://hallmark.mw/case-studies" },
      ])) },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <section className="container-x pt-16 pb-10">
        <div className="eyebrow">Case studies</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold max-w-4xl">
          Outcomes our clients <span className="underline-accent">can audit</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          A selection of recent projects from the Hallmark portfolio — water, energy, healthcare and brand — all delivered with full QA documentation and SLA-backed support.
        </p>
      </section>

      <section className="container-x pb-24 space-y-8">
        {cases.map((c, i) => (
          <article key={c.title} className="grid lg:grid-cols-[1fr_320px] gap-8 rounded-3xl bg-card ring-1 ring-border p-8 md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-bold tracking-[0.22em] uppercase text-accent">Case {String(i+1).padStart(2,"0")}</span>
                <span className="text-muted-foreground">{c.sector}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 self-center">
              {c.kpis.map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-[color:var(--primary-deep)] text-primary-foreground p-4">
                  <div className="font-display text-2xl font-bold">{n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-primary-foreground/70 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-accent text-accent-foreground p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em]">The Only Way</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Your project, on a results-first timeline.</h2>
          </div>
          <Link to="/contact" className="btn-primary">Start the conversation →</Link>
        </div>
      </section>
    </>
  );
}
