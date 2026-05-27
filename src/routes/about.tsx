import { createFileRoute, Link } from "@tanstack/react-router";
import team from "@/assets/team.jpg";
import { breadcrumbsJsonLd, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hallmark Limited — African engineering, international standards" },
      { name: "description", content: "Founded in Malawi, Hallmark Limited is an African technology and engineering company delivering ICT, Industrial, Healthcare and Printing solutions to international standards across Sub-Saharan Africa." },
      { property: "og:title", content: "About Hallmark Limited" },
      { property: "og:description", content: "Our vision, mission, values and what makes Hallmark a single accountable partner for complex projects across Malawi and Zambia." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "About", url: "https://hallmark.mw/about" },
      ])) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
        { q: "When was Hallmark Limited founded?", a: "Hallmark Limited is a registered African technology and engineering company operating in Malawi and Zambia, serving Sub-Saharan Africa and international markets." },
        { q: "What does 'The Only Way' mean?", a: "It's our commitment to a single accountable approach — diagnose the problem, engineer the right solution and execute with precision, every project, every time." },
      ])) },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x pt-16 pb-12">
        <div className="eyebrow">About Hallmark</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold max-w-4xl">
          An African company solving complex problems — <span className="underline-accent">accountably</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Hallmark Limited delivers integrated ICT, Industrial, Healthcare and Commercial Printing solutions to clients across Sub-Saharan Africa and international markets. We operate as a single accountable partner for complex projects — combining global technology, certified engineering processes, and local execution.
        </p>
      </section>

      <section className="container-x grid lg:grid-cols-12 gap-10 pb-20">
        <div className="lg:col-span-7 rounded-3xl overflow-hidden ring-1 ring-border">
          <img src={team} alt="The Hallmark Limited team — engineers, biomedical technicians, developers and print operators" width={1600} height={1000} className="w-full h-auto" />
        </div>
        <div className="lg:col-span-5 grid gap-5 content-start">
          <div className="card-soft">
            <div className="eyebrow">Our Vision</div>
            <p className="mt-3 font-display text-xl">
              To be Africa's most trusted partner for integrated technology and engineering solutions — recognized globally for delivering scalable, compliant, high-impact results.
            </p>
          </div>
          <div className="card-soft">
            <div className="eyebrow">Our Mission</div>
            <p className="mt-3 font-display text-xl">
              To engineer and deliver world-class solutions through precision, smart technology, and accountable execution. Every project, every client, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-20">
          <div className="eyebrow">Core values</div>
          <h2 className="mt-3 font-display text-4xl font-bold">What we hold ourselves to.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              ["Innovation", "Smart engineering and digital tools to solve real-world problems faster and cheaper."],
              ["Integrity & Accountability", "We take end-to-end ownership of scope, quality and delivery."],
              ["Customer Success", "We measure success by your operational and financial results."],
              ["Quality, Safety & Compliance", "We work to ISO, IEC, WHO and local regulatory standards."],
              ["Sustainability", "Designs that reduce energy use, water loss and environmental impact."],
            ].map(([h, b]) => (
              <div key={h} className="rounded-2xl bg-card ring-1 ring-border p-6">
                <div className="font-display text-lg font-bold text-primary">{h}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="eyebrow">Our delivery methodology</div>
        <h2 className="mt-3 font-display text-4xl font-bold max-w-2xl">Discover → Design → Deliver → Enable → Support.</h2>
        <ol className="mt-10 grid md:grid-cols-5 gap-5">
          {[
            ["Discover", "Site assessment, data collection, stakeholder alignment."],
            ["Design", "Engineering design, BOQ, risk assessment and procurement plan."],
            ["Deliver", "Installation, integration, commissioning and testing."],
            ["Enable", "Training, documentation and handover."],
            ["Support", "SLA-backed maintenance, remote monitoring and reporting."],
          ].map(([h, b], i) => (
            <li key={h} className="card-soft">
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-accent">Step {String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-display text-xl font-bold">{h}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-[color:var(--primary-deep)] text-primary-foreground p-10 md:p-14">
          <div className="eyebrow !text-accent">Selected clients & partners</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Trusted across water, health, energy and brand.</h2>
          <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-primary-foreground/85">
            {[
              "Eastern Water and Sanitation Company",
              "Lukanga Water and Sanitation Company",
              "Lusaka Water and Sanitation Company",
              "Nkana Water and Sanitation Company",
              "Smallholder Farmers Fertilizer Revolving Fund of Malawi",
              "UNDP, UNICEF, USAID implementing partners",
              "Ministry of Health — Malawi & Zambia",
              "Ministry of Energy — Malawi",
              "Leading mining, manufacturing & FMCG companies (SADC)",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span>{c}</li>
            ))}
          </ul>
          <Link to="/contact" className="btn-accent mt-10">Become a partner →</Link>
        </div>
      </section>
    </>
  );
}
