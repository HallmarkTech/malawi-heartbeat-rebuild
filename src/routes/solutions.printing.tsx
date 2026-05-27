import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import img from "@/assets/sol-printing.jpg";
import { breadcrumbsJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/printing")({
  head: () => ({
    meta: [
      { title: "Commercial Printing & Branding Malawi — Offset, Large Format, Signage | Hallmark" },
      { name: "description", content: "ISO 12647-2 colour-managed offset, UV-resistant large format, signage, vehicle wraps, embroidery and merchandise — multi-country brand rollouts from Malawi to the world." },
      { name: "keywords", content: "commercial printing Malawi, offset printing Blantyre, large format Lilongwe, signage Lusaka, vehicle wraps Africa, embroidery merchandise Malawi, Pantone color matching" },
      { property: "og:title", content: "Hallmark Printing & Branding — Precision. Impact. Quality." },
      { property: "og:description", content: "From 50 flyers to 50,000 branded assets, color-accurate and built for tropical climates." },
      { property: "og:url", content: "/solutions/printing" },
      { property: "og:image", content: "/og-printing.jpg" },
    ],
    links: [{ rel: "canonical", href: "/solutions/printing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Commercial Printing & Branding", description: "Offset, digital large format, signage, apparel and merchandise.", url: "https://hallmark.mw/solutions/printing", serviceType: "Commercial Printing" })) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "Printing & Branding", url: "https://hallmark.mw/solutions/printing" },
      ])) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
        { q: "What's your typical turnaround?", a: "Large format prints typically ship in 48–72 hours. Offset runs typically complete in 5–7 working days." },
        { q: "Do you handle multi-country brand rollouts?", a: "Yes. We coordinate centralized production with on-site installation partners across SADC, providing consistent Pantone-matched output to ISO 12647-2." },
        { q: "Are your inks suitable for tropical climates?", a: "Yes. We select UV-resistant, weather-rated substrates and inks tested for color fastness in high-heat and high-UV environments." },
      ])) },
    ],
  }),
  component: () => (
    <SolutionPage
      eyebrow="Printing & Branding · Hallmark"
      title="Precision. Impact. Quality."
      intro="From concept and design through pre-press, production, finishing, fulfillment and installation — we deliver high-impact visual communication that lets brands communicate consistently and professionally at scale."
      email="printing@hallmark.mw"
      heroImg={img}
      vision="To be Africa's preferred partner for commercial printing and branding that elevates brand equity, drives engagement and withstands global standards."
      mission="To produce precise, durable, cost-effective print products using advanced technology, certified processes and skilled craftsmanship — every job, every time."
      capabilities={[
        { title: "Large Format Digital", body: "Pull-ups, banners, building wraps, glass décor, exhibition displays — UV-resistant, weather-rated." },
        { title: "Offset Printing", body: "Magazines, annual reports, packaging and stationery — ISO 12647-2 color consistency." },
        { title: "Signage & Environmental Branding", body: "Vehicle wraps, office branding, retail signage, 3D and illuminated displays — in-house design to install." },
        { title: "Screen & DTG Apparel", body: "Wash-fast, fade-resistant printing on cotton, polyester and blends — uniforms, PPE, merchandise." },
        { title: "Industrial Embroidery", body: "Multi-head machines for high-volume orders with international thread density and durability standards." },
        { title: "Stationery & Promotional", body: "Business cards, certificates, USBs, mugs, kits — fulfillment and onboarding pack distribution." },
      ]}
      process={[
        { title: "Consult & Design", body: "Brand alignment and pre-press checks." },
        { title: "Proof & Approve", body: "Digital or on-site Pantone/CMYK proofs." },
        { title: "Produce", body: "Calibrated machines, closed-loop color." },
        { title: "Finish & QC", body: "Binding, laminating, mounting, inspection." },
        { title: "Fulfill & Install", body: "Logistics and on-site signage installation." },
      ]}
      differentiators={[
        { title: "Global Standards, Regional Execution", body: "ISO 9001 + ISO 12647-2 — pass multinational brand audits and donor compliance checks." },
        { title: "Speed Without Compromise", body: "48–72hr large format, 5–7 working day offset turnaround." },
        { title: "Brand Consistency Across Borders", body: "Centralized color management keeps your brand identical across cities and countries." },
        { title: "Durability for Harsh Environments", body: "Substrates and inks selected for heat, humidity and UV — ideal for Africa & tropics." },
        { title: "Scalable Capacity", body: "From 50 flyers to 100,000 packaging units — our supply chain scales to your demand." },
      ]}
      outcomes={[
        { value: "14 sites", label: "rebranded across 3 countries in 6 weeks" },
        { value: "48–72h", label: "large format turnaround" },
        { value: "ISO 12647-2", label: "color management" },
        { value: "3.2m", label: "max digital print width" },
      ]}
      markets={[
        "Multinational Corporates", "Banks & FinServ", "Government & Parastatals",
        "UN Agencies & NGOs", "Education & Publishers", "Retail & FMCG", "Hospitality", "Events",
      ]}
    />
  ),
});
