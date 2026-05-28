import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/industries-hero.jpg";
import energy from "@/assets/ind-energy.jpg";
import agri from "@/assets/ind-agri.jpg";
import health from "@/assets/ind-health.jpg";
import mining from "@/assets/ind-mining.jpg";
import gov from "@/assets/ind-gov.jpg";
import finance from "@/assets/ind-finance.jpg";
import { faqJsonLd, breadcrumbsJsonLd } from "@/lib/seo";

const industries = [
  {
    id: "energy",
    name: "Energy & Utilities",
    img: energy,
    lede: "From transmission upgrades to off-grid solar hybrids — engineered for African grid realities.",
    services: ["Utility-scale solar EPC", "Hybrid mini-grids", "Substation & SCADA", "Smart prepaid metering"],
    clients: "ESCOM · ZESCO · Rural Electrification Agencies",
  },
  {
    id: "water",
    name: "Water & Sanitation",
    img: agri,
    lede: "Reducing non-revenue water and bringing irrigation infrastructure to scale across the SADC region.",
    services: ["NB-IoT smart metering", "NRW diagnostics", "Pump station automation", "Irrigation engineering"],
    clients: "Lilongwe Water Board · Blantyre Water Board · Zambian utilities",
  },
  {
    id: "healthcare",
    name: "Healthcare & NGOs",
    img: health,
    lede: "WHO-compliant medical equipment, lab diagnostics and biomedical lifecycle support for hospitals and donor programs.",
    services: ["Medical equipment supply", "Biomedical engineering", "Lab diagnostics setup", "Cold-chain & vaccines"],
    clients: "Ministry of Health · UNICEF · Global Fund implementing partners",
  },
  {
    id: "mining",
    name: "Mining & Manufacturing",
    img: mining,
    lede: "Automation, control systems and EPC for the region's mining, cement and FMCG operators.",
    services: ["PLC/SCADA integration", "Conveyor & plant electrical", "Predictive maintenance", "Compliance reporting"],
    clients: "Cement producers · Sugar estates · Tobacco processors",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    img: gov,
    lede: "Digital service delivery, donor-grade procurement and ICT modernization for ministries and parastatals.",
    services: ["Custom government software", "Procurement & tendering", "Cybersecurity & ISO 27001", "Branded signage & forms"],
    clients: "Ministries (MW & ZM) · Parastatals · Local authorities",
  },
  {
    id: "finance",
    name: "Banking & Financial Services",
    img: finance,
    lede: "Branch infrastructure, secure ICT, queue management and high-security commercial printing.",
    services: ["Branch ICT rollout", "Cybersecurity", "Secure document printing", "Cards & PIN mailers"],
    clients: "Standard Bank · NBM · Old Mutual · Microfinance institutions",
  },
] as const;

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Hallmark Limited | Energy, Water, Health, Mining, Gov, Finance" },
      { name: "description", content: "Hallmark Limited serves Energy & Utilities, Water, Healthcare, Mining, Government and Financial Services across Malawi, Zambia and Sub-Saharan Africa with integrated ICT, industrial and printing solutions." },
      { property: "og:title", content: "Industries — Hallmark Limited" },
      { property: "og:description", content: "Six core industries. One accountable partner. ISO-aligned delivery across Sub-Saharan Africa." },
      { property: "og:image", content: "/og-industries.jpg" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbsJsonLd([
          { name: "Home", url: "https://hallmark.mw/" },
          { name: "Industries", url: "https://hallmark.mw/industries" },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd([
          { q: "Which industries does Hallmark Limited serve?", a: "Energy & Utilities, Water & Sanitation, Healthcare & NGOs, Mining & Manufacturing, Government & Public Sector, and Banking & Financial Services across Malawi, Zambia and the SADC region." },
          { q: "Do you work with donor-funded programs?", a: "Yes — we routinely deliver for UNDP, UNICEF, USAID implementing partners, the Global Fund and World Bank-funded programs, with full donor-grade documentation." },
        ])),
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-[color:var(--primary-deep)] text-primary-foreground">
        <img src={hero} alt="Malawian solar farm and transmission lines" className="absolute inset-0 w-full h-full object-cover opacity-25" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary-deep)] via-[color:var(--primary-deep)]/85 to-transparent" />
        <div className="container-x relative py-20 lg:py-28 max-w-3xl">
          <div className="eyebrow !text-accent">Industries we serve</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-tight">
            Six industries. <br/>One <span className="underline-accent">accountable partner</span>.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85">
            From utilities and ministries to mines and banks — Hallmark engineers solutions that survive African operating conditions and stand up to international audit.
          </p>
        </div>
      </section>

      <section className="container-x py-20 space-y-12">
        {industries.map((it, i) => (
          <article
            key={it.id}
            id={it.id}
            className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-border">
              <img src={it.img} alt={it.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1600} height={1100} />
            </div>
            <div className="lg:col-span-6 space-y-5">
              <div className="eyebrow">0{i + 1} · Industry</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">{it.name}</h2>
              <p className="text-lg text-muted-foreground">{it.lede}</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {it.services.map((s) => (
                  <li key={s} className="flex gap-2"><span className="text-primary">▸</span>{s}</li>
                ))}
              </ul>
              <div className="pt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Selected clients & sectors
              </div>
              <div className="text-sm font-medium">{it.clients}</div>
              <Link to="/contact" className="btn-primary mt-4">Discuss a {it.name.split(" ")[0]} project →</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="container-x py-16 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Don't see your sector?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">We've delivered cross-industry projects for telcos, hospitality and education too. Tell us the outcome — we'll structure the engineering.</p>
          </div>
          <Link to="/contact" className="btn-primary">Start a conversation →</Link>
        </div>
      </section>
    </>
  );
}
