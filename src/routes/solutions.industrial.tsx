import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import img from "@/assets/sol-industrial.jpg";
import { breadcrumbsJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/industrial")({
  head: () => ({
    meta: [
      { title: "Industrial Engineering Malawi & Zambia — Smart Water, Solar, SCADA | Hallmark" },
      { name: "description", content: "End-to-end industrial engineering: smart water metering (NRW reduction), solar PV EPC, SCADA/PLC automation, MV/LV electrical, fabrication and maintenance — to IEC, SABS and ISO 45001 standards." },
      { name: "keywords", content: "smart water meters Africa, NRW reduction Zambia, solar EPC Malawi, SCADA Lilongwe, PLC programming Africa, MV LV electrical Blantyre, industrial maintenance Lusaka" },
      { property: "og:title", content: "Hallmark Industrial — Engineered for performance and safety" },
      { property: "og:description", content: "Smart water, solar, automation and EPC for utilities, mining and manufacturing." },
      { property: "og:url", content: "/solutions/industrial" },
      { property: "og:image", content: "/og-industrial.jpg" },
    ],
    links: [{ rel: "canonical", href: "/solutions/industrial" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Industrial Engineering & EPC", description: "Smart water metering, solar PV, automation, MV/LV electrical and fabrication.", url: "https://hallmark.mw/solutions/industrial", serviceType: "Industrial Engineering" })) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "Industrial", url: "https://hallmark.mw/solutions/industrial" },
      ])) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
        { q: "Do you supply and install smart water meters in Africa?", a: "Yes. We supply and install AMI/AMR smart water meters, bulk meters and remote level sensors. Our utility pilots have achieved 15–40% NRW reductions, with integration into existing billing, GIS and SCADA platforms." },
        { q: "Can you design and EPC a solar PV project?", a: "Yes. We design grid-tied, off-grid and hybrid solar systems using PVsyst and HelioScope, and deliver full EPC plus O&M, including inverters, battery storage and UPS for mission-critical loads." },
        { q: "Which automation platforms do you work with?", a: "Siemens, Schneider Electric and Allen-Bradley PLCs, with SCADA/HMI integration and field instrumentation for production lines, water treatment and utility systems." },
      ])) },
    ],
  }),
  component: () => (
    <SolutionPage
      eyebrow="Industrial Engineering · Hallmark"
      title="Engineered for performance and safety."
      intro="We deliver engineering, maintenance and infrastructure solutions that keep industrial, utility and commercial operations running safely, efficiently and in compliance with international standards across Malawi and Zambia."
      email="industrial@hallmark.mw"
      heroImg={img}
      vision="To be Sub-Saharan Africa's trusted partner for industrial engineering and maintenance that maximizes uptime, safety and operational efficiency."
      mission="To deliver reliable, cost-effective industrial services through certified engineering, rigorous processes and responsive lifecycle support."
      capabilities={[
        { title: "Maintenance, Repair & Fabrication", body: "Generator diagnostics & load testing to 2MVA, motor rewinding, certified welding (MIG/TIG/ASME), predictive maintenance." },
        { title: "Electrical & Structural Installations", body: "MV/LV reticulation, switchgear, aluminium & steel fabrication, modular structures and warehouse installations." },
        { title: "Energy & Power Solutions", body: "Solar PV EPC, hybrid systems, inverters, batteries, UPS, smart metering and HV transmission hardware." },
        { title: "Water & Process Systems", body: "Industrial pumps, smart water meters with AMI/AMR, leak-proof jointing, chemical dosing and treatment." },
        { title: "Automation & Facility Controls", body: "PLC/SCADA for Siemens, Schneider and Allen-Bradley. Energy management and environmental controls." },
        { title: "Lifecycle Support", body: "SLA-backed maintenance, rapid-response repairs, spare-parts management and remote monitoring." },
      ]}
      process={[
        { title: "Assess & Diagnose", body: "Site inspection, condition monitoring, root-cause analysis." },
        { title: "Engineer & Design", body: "PVsyst, AutoCAD, EPLAN — fit to budget and regs." },
        { title: "Execute & QA", body: "Certified technicians; documented FAT/SAT protocols." },
        { title: "Commission & Train", body: "Performance validation and operator training." },
        { title: "Support & Optimize", body: "SLAs, spare-parts, remote monitoring." },
      ]}
      differentiators={[
        { title: "Field-Proven, Bankable Solutions", body: "Designed for maintainability and spare-parts availability — no stranded assets." },
        { title: "Regional Presence, Fast Response", body: "Workshops in Blantyre, Lilongwe and Lusaka enable 24–72 hour response." },
        { title: "EPC & Project Management", body: "Single-point accountability through procurement, construction, commissioning, handover." },
        { title: "ESG & Sustainability", body: "Solar and smart metering directly support SDG 6, 7 and 9." },
        { title: "Safety & Compliance First", body: "ISO 45001-aligned HSE: risk assessments, permits-to-work and full as-built documentation." },
      ]}
      outcomes={[
        { value: "30–50%", label: "drop in unplanned downtime" },
        { value: "15–30%", label: "energy cost reduction" },
        { value: "28%", label: "NRW reduction (Zambia pilot)" },
        { value: "ISO 45001", label: "HSE-aligned execution" },
      ]}
      markets={[
        "Manufacturing & Agro-processing", "Water Utilities & Irrigation", "Mining & Construction",
        "Healthcare Facilities", "Commercial Real Estate", "Government & NGO Infrastructure",
      ]}
    />
  ),
});
