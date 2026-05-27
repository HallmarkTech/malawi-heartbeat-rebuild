import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import img from "@/assets/sol-ict.jpg";
import { breadcrumbsJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/ict")({
  head: () => ({
    meta: [
      { title: "ICT Solutions in Malawi & Zambia | Software, Cloud, Cybersecurity — Hallmark" },
      { name: "description", content: "Custom software, ERP/CRM integration, managed IT, cybersecurity (ISO 27001), cloud (AWS/Azure) and digital platforms — engineered for African operating environments by Hallmark Limited." },
      { name: "keywords", content: "ICT Malawi, software development Malawi, cybersecurity Zambia, ISO 27001, ERP integration Africa, cloud migration Lilongwe, managed IT Blantyre" },
      { property: "og:title", content: "Hallmark ICT — Innovating your digital future" },
      { property: "og:description", content: "Secure, scalable, interoperable systems built for African environments." },
      { property: "og:url", content: "/solutions/ict" },
      { property: "og:image", content: "/og-ict.jpg" },
    ],
    links: [{ rel: "canonical", href: "/solutions/ict" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "ICT & Digital Solutions", description: "Custom software, cloud, cybersecurity and managed IT services.", url: "https://hallmark.mw/solutions/ict", serviceType: "Information Technology Services" })) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "Solutions", url: "https://hallmark.mw/" },
        { name: "ICT", url: "https://hallmark.mw/solutions/ict" },
      ])) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
        { q: "Do you build custom ERP and CRM systems?", a: "Yes. We design, build and integrate ERP, CRM, HRMS and workflow automation systems with API-first architecture compatible with SAP, Oracle, Microsoft and open-source platforms." },
        { q: "What cybersecurity standards do you follow?", a: "Our practice aligns to ISO 27001, NIST and GDPR — including security audits, penetration testing, SIEM/EDR, MFA and disaster recovery planning." },
        { q: "Do you provide managed IT services in Malawi and Zambia?", a: "Yes. We deliver 24/7 NOC/SOC, endpoint management, helpdesk and on-site support with defined SLAs and 99.9% uptime across managed clients." },
      ])) },
    ],
  }),
  component: () => (
    <SolutionPage
      eyebrow="ICT & Digital · Hallmark"
      title="Innovating your digital future."
      intro="We design, build and support secure, scalable digital infrastructure and software for organizations across Africa and international markets — from SMEs to ministries, NGOs and donor-funded programs."
      email="ict@hallmark.mw"
      heroImg={img}
      vision="To be Africa's trusted partner for practical, secure and scalable ICT solutions that drive measurable business and development outcomes."
      mission="To engineer reliable digital systems and provide responsive support that reduces cost, increases uptime and enables growth."
      capabilities={[
        { title: "Custom Software & Integration", body: "Web/mobile apps, ERP/CRM/HR customization, workflow automation and APIs for SAP, Oracle, Microsoft and open-source." },
        { title: "IT Infrastructure & Managed Services", body: "LAN/WAN/SD-WAN, servers, virtualization, endpoint management, 24/7 helpdesk under defined SLAs." },
        { title: "Cybersecurity & Compliance", body: "ISO 27001-aligned audits, pen-testing, firewalls, MFA, DLP, backup and DR — protecting data and reputation." },
        { title: "Cloud & Data Services", body: "AWS/Azure/M365 migration, hybrid cloud, BI dashboards, hosted apps and cost optimization." },
        { title: "Digital Enablement", body: "E-learning, e-commerce, CMS portals, SMS/USSD and mobile-first apps for low-bandwidth environments." },
        { title: "Cybersecurity Operations", body: "SIEM/SOC, vulnerability management, incident response and continuous monitoring." },
      ]}
      process={[
        { title: "Discover", body: "Understand operations, pain points and success metrics." },
        { title: "Design", body: "Balance performance, cost and maintainability." },
        { title: "Build", body: "Certified engineers execute to specification." },
        { title: "Deploy", body: "Cutover, migration and user training, minimal disruption." },
        { title: "Support", body: "Monitoring, maintenance and iterative improvement." },
      ]}
      differentiators={[
        { title: "Local Expertise, Global Standards", body: "Based in Blantyre, Lilongwe and Lusaka. Solutions meet ISO 27001, ITIL and donor compliance standards." },
        { title: "Single Point of Accountability", body: "One PM, one team. We own outcomes from requirements to handover and support." },
        { title: "Practical Engineering", body: "No over-engineering. Every component serves a business purpose and is documented." },
        { title: "Responsive Support", body: "Transparent ticketing and proactive maintenance — 99.9% uptime delivered." },
        { title: "Capacity Building", body: "We train your team to manage the systems we deliver." },
      ]}
      outcomes={[
        { value: "40–60%", label: "less manual processing time via automation" },
        { value: "99.9%", label: "managed-client uptime" },
        { value: "20–35%", label: "lower TCO through right-sized infrastructure" },
        { value: "ISO 27001", label: "aligned security practices" },
      ]}
      markets={[
        "Ministries & Government", "Utilities & Energy", "NGOs & UN Agencies",
        "Banks & FinServ", "Healthcare", "Manufacturing & FMCG", "Education", "Mining",
      ]}
    />
  ),
});
