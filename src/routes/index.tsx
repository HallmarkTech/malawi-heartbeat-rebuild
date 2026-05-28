import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-main.jpg";
import ict from "@/assets/sol-ict.jpg";
import industrial from "@/assets/sol-industrial.jpg";
import healthcare from "@/assets/sol-healthcare.jpg";
import printing from "@/assets/sol-printing.jpg";
import malawi from "@/assets/malawi-context.jpg";
import { faqJsonLd } from "@/lib/seo";
import { ClientLogos } from "@/components/ClientLogos";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hallmark Limited — Engineering Africa's Next Chapter | Malawi & Zambia" },
      { name: "description", content: "Single-partner ICT, Industrial, Healthcare and Commercial Printing solutions across Malawi, Zambia and Sub-Saharan Africa. ISO-aligned, donor-ready, locally executed." },
      { property: "og:title", content: "Hallmark Limited — The Only Way" },
      { property: "og:description", content: "Integrated technology & engineering solutions from Africa, built to international standards." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd([
        { q: "What does Hallmark Limited do?", a: "Hallmark Limited is a Malawi-headquartered company delivering integrated ICT, Industrial Engineering, Healthcare technology and Commercial Printing & Branding solutions across Malawi, Zambia and international markets." },
        { q: "Where is Hallmark Limited based?", a: "Our head office is in Lilongwe, Malawi (Area 47, Sector 1, Nzinziri Street) with regional offices in Blantyre, Mzuzu and Lusaka, Zambia." },
        { q: "Which standards do you work to?", a: "We deliver to ISO 9001, ISO 14001, ISO 45001, ISO 13485, ISO 27001, IEC, SABS and WHO standards depending on the project, with full QA/QC documentation." },
        { q: "Do you serve donor-funded and DFI projects?", a: "Yes. We routinely deliver projects for UNDP, UNICEF, USAID implementing partners, the Global Fund, World Bank-funded programs and ministries across Malawi and Zambia." },
      ])),
    }],
  }),
  component: Index,
});

const divisions = [
  { to: "/solutions/ict", title: "ICT & Digital", img: ict, copy: "Custom software, cloud, cybersecurity and managed services engineered for African operating environments." , tag: "01"},
  { to: "/solutions/industrial", title: "Industrial Engineering", img: industrial, copy: "Smart water, solar, automation and EPC delivery for utilities, mining and manufacturing.", tag: "02" },
  { to: "/solutions/healthcare", title: "Healthcare Technology", img: healthcare, copy: "Medical equipment, lab diagnostics and biomedical lifecycle support for hospitals & NGOs.", tag: "03" },
  { to: "/solutions/printing", title: "Printing & Branding", img: printing, copy: "Offset, large-format, signage and merchandise — precision color, durable for tropical climates.", tag: "04" },
] as const;

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
        <div className="container-x grid lg:grid-cols-12 gap-10 py-16 lg:py-24 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div className="eyebrow">Malawi · Zambia · Sub-Saharan Africa</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Engineering <span className="underline-accent">Africa's</span> next chapter — one project at a time.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Hallmark Limited is a single accountable partner for complex ICT, Industrial, Healthcare and Commercial Printing projects. International standards. Local execution. Measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Start a project →</Link>
              <Link to="/about" className="btn-ghost">Why Hallmark</Link>
            </div>
            <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Countries</dt>
                <dd className="font-display text-3xl font-bold text-primary">2+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Divisions</dt>
                <dd className="font-display text-3xl font-bold text-primary">4</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">SLA Uptime</dt>
                <dd className="font-display text-3xl font-bold text-primary">99.9%</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border shadow-[var(--shadow-elev)]">
              <img src={hero} alt="Hallmark engineers in a Malawi control room overlooking Lake Malawi" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080}/>
              <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--primary-deep)]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/95 backdrop-blur p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Live project</div>
                  <div className="text-sm font-semibold">NRW pilot — Zambian utility</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-bold text-primary">-28%</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">physical losses</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 hidden md:block rounded-2xl bg-accent text-accent-foreground px-4 py-3 shadow-[var(--shadow-soft)] rotate-[-4deg]">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold">The Only Way</div>
              <div className="font-display text-sm font-semibold">since day one</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {[
            ["ISO 9001 · 14001 · 45001", "Quality & HSE"],
            ["ISO 13485 · WHO PQ", "Medical sourcing"],
            ["IEC · SABS · SADCAS", "Engineering compliance"],
            ["Donor-grade documentation", "USAID · UNICEF · World Bank"],
          ].map(([t, s]) => (
            <div key={t}>
              <div className="font-semibold text-foreground">{t}</div>
              <div className="text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Four divisions, one accountable partner</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Solutions designed <span className="underline-accent">around you</span>.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We diagnose the problem, engineer the right solution, and execute with precision — backed by structured training and SLA-backed lifecycle support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {divisions.map((d) => (
            <Link key={d.to} to={d.to} className="group relative overflow-hidden rounded-3xl ring-1 ring-border bg-card aspect-[5/4]">
              <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1600} height={1100} />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary-deep)]/90 via-[color:var(--primary-deep)]/30 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-between text-primary-foreground">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-accent">{d.tag}</span>
                  <span className="rounded-full bg-background/15 backdrop-blur px-3 py-1 text-xs">Explore →</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/85 max-w-md">{d.copy}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-border bg-[color:var(--primary-deep)] text-primary-foreground">
        <div className="container-x py-24 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="eyebrow !text-accent">Why global partners choose Hallmark</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">International standards. <br/>Built for African conditions.</h2>
            <p className="mt-5 text-primary-foreground/80 max-w-lg">
              We translate ISO, IEC and WHO standards into solutions that survive real grid, water and climate conditions — with single-point accountability from design to handover.
            </p>
            <Link to="/case-studies" className="btn-accent mt-8">See case studies →</Link>
          </div>
          <ul className="space-y-5">
            {[
              ["End-to-end project delivery", "Feasibility → procurement → commissioning → 5-year lifecycle support, under one PM."],
              ["Field-proven, bankable solutions", "Designed for maintainability and spare-parts availability. No stranded assets."],
              ["ESG & sustainability focus", "Smart metering, solar and automation directly support SDG 6, 7 and 9."],
              ["Training & knowledge transfer", "Every project includes competency assessments and mentorship — capacity that stays."],
            ].map(([h, b]) => (
              <li key={h} className="grid grid-cols-[auto_1fr] gap-5 items-start rounded-2xl bg-white/5 backdrop-blur p-5 ring-1 ring-white/10">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground font-bold">✓</span>
                <div>
                  <div className="font-display text-lg font-bold">{h}</div>
                  <div className="text-sm text-primary-foreground/75 mt-1">{b}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-x py-24">
        <div className="eyebrow">Outcomes our clients measure</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl">We believe in doing things <span className="underline-accent">by the numbers</span>.</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["28%", "NRW reduction in 90 days — Zambian utility pilot"],
            ["40–60%", "less manual processing time via ICT automation"],
            ["30–50%", "drop in unplanned industrial downtime"],
            ["14 sites", "rebranded across 3 countries in 6 weeks"],
          ].map(([n, t]) => (
            <div key={n} className="card-soft">
              <div className="font-display text-5xl font-bold text-primary">{n}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <ClientLogos />

      {/* INSIGHTS TEASER */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow">Latest insights</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Field notes from <span className="underline-accent">our teams</span>.</h2>
          </div>
          <Link to="/blog" className="btn-ghost hidden md:inline-flex">All insights →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-border">
                <img src={p.cover} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1600} height={1100}/>
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-primary font-bold">{p.category}</div>
              <h3 className="mt-2 font-display text-xl font-bold group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>


      <section className="relative overflow-hidden">
        <img src={malawi} alt="Lilongwe, Malawi at golden hour" className="absolute inset-0 w-full h-full object-cover -z-10" loading="lazy" width={1920} height={900}/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[color:var(--primary-deep)]/90 to-[color:var(--primary-deep)]/40" />
        <div className="container-x py-24 lg:py-32 text-primary-foreground max-w-3xl">
          <div className="eyebrow !text-accent">Rooted in Malawi. Built for the world.</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">From Lilongwe and Blantyre to Lusaka — and beyond.</h2>
          <p className="mt-5 text-primary-foreground/85 text-lg max-w-xl">
            We're proudly Malawian, proudly African — and trusted by utilities, ministries, DFIs, NGOs and multinationals across the SADC region and international donor community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="btn-accent">Our story →</Link>
            <Link to="/contact" className="btn-ghost !text-primary-foreground !border-white/30">Talk to sales</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-3xl bg-card ring-1 ring-border p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Tell us the outcome you need — uptime, efficiency, compliance, brand impact — and we'll come back with a structured engineering proposal.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-primary">Get a proposal →</Link>
            <a href="mailto:sales@hallmark.mw" className="btn-ghost">sales@hallmark.mw</a>
          </div>
        </div>
      </section>
    </>
  );
}
