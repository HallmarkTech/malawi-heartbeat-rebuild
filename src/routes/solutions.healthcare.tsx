import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import img from "@/assets/sol-healthcare.jpg";
import { breadcrumbsJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare Technology Malawi & Zambia — Medical Equipment, Lab, PPE | Hallmark" },
      { name: "description", content: "ISO 13485, CE and WHO-prequalified medical equipment, laboratory diagnostics, PPE and biomedical engineering for hospitals, clinics, NGOs and donor-funded programs across Sub-Saharan Africa." },
      { name: "keywords", content: "medical equipment Malawi, ISO 13485 supplier Africa, biomedical engineering Zambia, laboratory diagnostics Lilongwe, PPE supplier Blantyre, hospital solar Malawi, WHO PQ" },
      { property: "og:title", content: "Hallmark Healthcare — Innovative solutions for a healthier future" },
      { property: "og:description", content: "Reliable medical equipment, lab systems and facility infrastructure for African healthcare." },
      { property: "og:url", content: "/solutions/healthcare" },
      { property: "og:image", content: "/og-healthcare.jpg" },
    ],
    links: [{ rel: "canonical", href: "/solutions/healthcare" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Healthcare Solutions", description: "Medical equipment, lab diagnostics, PPE, water systems and biomedical lifecycle support.", url: "https://hallmark.mw/solutions/healthcare", serviceType: "Medical Equipment Supply & Service" })) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbsJsonLd([
        { name: "Home", url: "https://hallmark.mw/" },
        { name: "Business Units", url: "https://hallmark.mw/" },
        { name: "Healthcare Solutions", url: "https://hallmark.mw/solutions/healthcare" },
      ])) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
        { q: "Are your medical products certified?", a: "Yes. We source from ISO 13485, CE-marked, FDA-approved and WHO-prequalified manufacturers, with full Certificates of Conformity, traceability and documentation suitable for donor audits." },
        { q: "Do you provide biomedical maintenance in Africa?", a: "Yes. Our certified biomedical engineers are based in Malawi and Zambia, providing preventive maintenance, calibration and 24–72 hour response without overseas dependency." },
        { q: "Can you support USAID, Global Fund and World Bank-funded health projects?", a: "Yes. We're experienced with procurement, QA and reporting requirements for USAID, Global Fund, UNICEF and World Bank-funded health programs." },
      ])) },
    ],
  }),
  component: () => (
    <SolutionPage
      eyebrow="Healthcare Solutions · Hallmark SBU"
      title="Innovative solutions for a healthier future."
      intro="We supply, install and support medical equipment, laboratory solutions and healthcare facility systems that enable hospitals, clinics and labs across Sub-Saharan Africa to deliver safe, effective and compliant care."
      email="healthcare@hallmark.mw"
      heroImg={img}
      vision="To be Africa's most dependable partner for healthcare technology and supplies that strengthen health systems and save lives."
      mission="To deliver quality-assured medical equipment, diagnostics and facility solutions through certified sourcing, responsive service and measurable clinical impact."
      capabilities={[
        { title: "Medical Equipment & Critical Care", body: "Patient monitors, ultrasound, X-ray, ventilators, autoclaves, theatre tables — installed, commissioned and trained." },
        { title: "Laboratory Diagnostics & Supplies", body: "Test kits and reagents for chemistry/hematology/microbiology, analyzers, microscopes and consumables." },
        { title: "Water Treatment & Lab Chemicals", body: "RO purification, deionization, lab-grade reagents with CoA, OSHA/GHS-compliant chemical handling." },
        { title: "PPE & Infection Control", body: "WHO/CDC-standard gowns, gloves, masks, isolation kits and infection prevention products." },
        { title: "Facility & Emergency Systems", body: "UPS, generators, solar-hybrid backup, fire suppression, nurse call and environmental monitoring." },
        { title: "Biomedical Lifecycle Support", body: "Preventive maintenance contracts, spare parts, calibration and 24/7 technical support." },
      ]}
      process={[
        { title: "Needs Assessment", body: "Clinical, technical and procurement alignment." },
        { title: "Certified Sourcing", body: "ISO 13485, CE, FDA or WHO-PQ manufacturers." },
        { title: "Logistics & Install", body: "Importation, commissioning and calibration." },
        { title: "Training", body: "Clinical and biomedical SOPs and competency." },
        { title: "Lifecycle Support", body: "Maintenance, parts and 24/7 response." },
      ]}
      differentiators={[
        { title: "Local Biomedical Capacity", body: "Certified engineers in Malawi & Zambia — 24–72 hour response, no overseas dependency." },
        { title: "End-to-End Lifecycle Management", body: "Single accountability from procurement to decommissioning." },
        { title: "Context-Appropriate Sourcing", body: "Equipment matched to local power, water and capacity realities." },
        { title: "Donor & NGO Compliance", body: "Experienced with USAID, Global Fund, UNICEF and World Bank requirements." },
        { title: "Responsive Supply Chain", body: "4–8 week lead times via direct manufacturer relationships in Europe, Asia and SA." },
      ]}
      outcomes={[
        { value: "ISO 13485", label: "certified manufacturer sourcing" },
        { value: "24–72h", label: "biomedical response times" },
        { value: "4–8 wks", label: "typical equipment lead time" },
        { value: "WHO PQ", label: "where applicable" },
      ]}
      markets={[
        "Public & Private Hospitals", "Rural Health Centers", "Diagnostic & Research Labs",
        "UN Agencies & NGOs", "Mining Health Facilities", "Veterinary & Agri-labs",
      ]}
    />
  ),
});
