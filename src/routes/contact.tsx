import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { breadcrumbsJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hallmark Limited — Lilongwe · Blantyre · Mzuzu · Lusaka" },
      { name: "description", content: "Talk to Hallmark Limited about ICT, Industrial, Healthcare or Printing projects. Offices in Lilongwe, Blantyre, Mzuzu (Malawi) and Lusaka (Zambia). +265 881 091 909 — sales@hallmark.mw." },
      { property: "og:title", content: "Contact Hallmark Limited" },
      { property: "og:description", content: "Offices in Malawi and Zambia. Talk to our sales engineering team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "Contact", url: "https://hallmark.mw/contact" },
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://hallmark.mw/#lilongwe",
            name: "Hallmark Limited — Lilongwe (Head Office)",
            telephone: "+265-881-091-909",
            email: "sales@hallmark.mw",
            address: { "@type": "PostalAddress", streetAddress: "Area 47, Sector 1, Nzinziri Street", postOfficeBoxNumber: "162", addressLocality: "Lilongwe", addressCountry: "MW" },
            geo: { "@type": "GeoCoordinates", latitude: -13.9626, longitude: 33.7741 },
            openingHours: "Mo-Fr 08:00-17:00",
            url: "https://hallmark.mw/contact",
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://hallmark.mw/#blantyre",
            name: "Hallmark Limited — Blantyre",
            telephone: "+265-881-091-909",
            email: "sales@hallmark.mw",
            address: { "@type": "PostalAddress", streetAddress: "Comet House, Yanakis Roundabout, Limbe", postOfficeBoxNumber: "1055", addressLocality: "Blantyre", addressCountry: "MW" },
            geo: { "@type": "GeoCoordinates", latitude: -15.7861, longitude: 35.0058 },
            openingHours: "Mo-Fr 08:00-17:00",
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://hallmark.mw/#mzuzu",
            name: "Hallmark Limited — Mzuzu",
            telephone: "+265-881-091-909",
            address: { "@type": "PostalAddress", streetAddress: "Next to St. Augustine Parish, Luwinga, Mzuzu 2", postOfficeBoxNumber: "20420", addressLocality: "Mzuzu", addressCountry: "MW" },
            geo: { "@type": "GeoCoordinates", latitude: -11.4581, longitude: 34.0151 },
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://hallmark.mw/#lusaka",
            name: "Hallmark Limited — Lusaka, Zambia",
            telephone: "+265-881-091-909",
            address: { "@type": "PostalAddress", streetAddress: "Plot 160, Silverest", addressLocality: "Lusaka", addressCountry: "ZM" },
            geo: { "@type": "GeoCoordinates", latitude: -15.4067, longitude: 28.2871 },
          },
        ]
      }) },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { name: "Lilongwe — Head Office", address: "Area 47, Sector 1, Nzinziri Street", po: "P.O. Box 162, Lilongwe, Malawi" },
  { name: "Blantyre", address: "Comet House, Yanakis Roundabout, Limbe", po: "P.O. Box 1055, Blantyre, Malawi" },
  { name: "Mzuzu", address: "Next to St. Augustine Parish, Luwinga, Mzuzu 2", po: "P.O. Box 20420, Mzuzu, Malawi" },
  { name: "Lusaka, Zambia", address: "Plot 160, Silverest", po: "Lusaka, Zambia" },
];

const departments = [
  ["General Sales", "sales@hallmark.mw"],
  ["ICT", "ict@hallmark.mw"],
  ["Industrial Solutions", "industrial@hallmark.mw"],
  ["Healthcare Solutions", "healthcare@hallmark.mw"],
  ["Commercial Printing", "printing@hallmark.mw"],
] as const;

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-x pt-16 pb-10">
        <div className="eyebrow">Get in touch</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold max-w-3xl">
          Let's <span className="underline-accent">engineer</span> your next outcome.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Tell us about your project — the outcome you need and the constraints you're working with. We'll respond within one business day with a structured next step.
        </p>
      </section>

      <section className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10 pb-24">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-soft space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input required type="text" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Organization</span>
              <input type="text" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input required type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Phone</span>
              <input type="tel" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Interested SBU</span>
            <select className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option>ICT</option>
              <option>Industrial Solutions</option>
              <option>Healthcare Solutions</option>
              <option>Commercial Printing</option>
              <option>Multiple / Not sure</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Project brief</span>
            <textarea required rows={5} placeholder="Outcome you need, location, timeline, budget range…" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <button type="submit" className="btn-primary">Send brief →</button>
          {sent && <p className="text-sm text-primary">Thanks — we'll be in touch within one business day.</p>}
          <p className="text-xs text-muted-foreground">Or email <a className="underline" href="mailto:sales@hallmark.mw">sales@hallmark.mw</a> · WhatsApp +265 881 091 909.</p>
        </form>

        <div className="space-y-6">
          <div className="card-soft">
            <div className="eyebrow">Direct lines</div>
            <ul className="mt-4 space-y-2 text-sm">
              {departments.map(([n, e]) => (
                <li key={e} className="flex justify-between border-b border-border py-2 last:border-0">
                  <span className="font-medium">{n}</span>
                  <a className="text-primary hover:underline" href={`mailto:${e}`}>{e}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <a href="tel:+265881091909" className="btn-ghost !py-2">+265 881 091 909</a>
              <a href="tel:+265992563010" className="btn-ghost !py-2">+265 992 563 010</a>
            </div>
          </div>

          <div className="card-soft">
            <div className="eyebrow">Our offices</div>
            <ul className="mt-4 space-y-4">
              {offices.map((o) => (
                <li key={o.name} className="border-b border-border pb-4 last:border-0">
                  <div className="font-display font-bold text-primary">{o.name}</div>
                  <div className="text-sm text-muted-foreground">{o.address}</div>
                  <div className="text-sm text-muted-foreground">{o.po}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
