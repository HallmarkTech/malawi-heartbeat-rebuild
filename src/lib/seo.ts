export const SITE = {
  name: "Hallmark Limited",
  tagline: "The Only Way",
  url: "", // relative — domain set at deploy
  description:
    "Hallmark Limited delivers integrated ICT, Industrial, Healthcare and Commercial Printing solutions across Malawi, Zambia and international markets.",
};

const LOCATIONS = [
  { name: "Hallmark Limited — Lilongwe HQ", street: "Area 47, Sector 1, Nzinziri Street", city: "Lilongwe", region: "Central Region", country: "MW", postBox: "162", phone: "+265-881-091-909", lat: -13.9626, lng: 33.7741 },
  { name: "Hallmark Limited — Blantyre", street: "Comet House, Yanakis Roundabout, Limbe", city: "Blantyre", region: "Southern Region", country: "MW", postBox: "1055", phone: "+265-992-563-010", lat: -15.7861, lng: 35.0058 },
  { name: "Hallmark Limited — Mzuzu", street: "Luwinga", city: "Mzuzu", region: "Northern Region", country: "MW", postBox: "20420", phone: "+265-881-091-909", lat: -11.4656, lng: 34.0207 },
  { name: "Hallmark Limited — Lusaka", street: "Plot 160, Silverest", city: "Lusaka", region: "Lusaka Province", country: "ZM", postBox: "", phone: "+260-000-000-000", lat: -15.4067, lng: 28.2871 },
];

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hallmark.mw/#organization",
    name: "Hallmark Limited",
    alternateName: ["Hallmark MW", "Hallmark Malawi"],
    url: "https://hallmark.mw",
    logo: {
      "@type": "ImageObject",
      url: "https://hallmark.mw/logo.png",
      width: 512,
      height: 512,
      caption: "Hallmark Limited logo",
    },
    image: "https://hallmark.mw/logo.png",
    slogan: "The Only Way",
    description: SITE.description,
    foundingLocation: { "@type": "Place", name: "Blantyre, Malawi" },
    areaServed: ["Malawi", "Zambia", "Sub-Saharan Africa", "SADC", "International"],
    knowsAbout: [
      "Custom software development", "Cloud infrastructure", "Cybersecurity", "ISO 27001",
      "Smart water metering", "AMI", "AMR", "SCADA", "PLC automation",
      "Solar PV EPC", "MV/LV electrical", "Biomedical engineering", "ISO 13485",
      "Medical equipment", "Commercial offset printing", "ISO 12647-2",
      "Large-format printing", "Signage", "Vehicle branding",
    ],
    knowsLanguage: ["en", "ny"],
    email: "sales@hallmark.mw",
    telephone: "+265-881-091-909",
    sameAs: [
      "https://www.linkedin.com/company/hallmark-limited-mw/",
      "https://hallmark.mw",
    ],
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+265-881-091-909", contactType: "sales", email: "sales@hallmark.mw", areaServed: ["MW", "ZM"], availableLanguage: ["English", "Chichewa"] },
      { "@type": "ContactPoint", telephone: "+265-992-563-010", contactType: "customer support", email: "support@hallmark.mw", areaServed: ["MW", "ZM"], availableLanguage: ["English", "Chichewa"] },
    ],
    department: [
      { "@type": "Organization", name: "Hallmark ICT", email: "ict@hallmark.mw", url: "https://hallmark.mw/solutions/ict" },
      { "@type": "Organization", name: "Hallmark Industrial", email: "industrial@hallmark.mw", url: "https://hallmark.mw/solutions/industrial" },
      { "@type": "Organization", name: "Hallmark Healthcare", email: "healthcare@hallmark.mw", url: "https://hallmark.mw/solutions/healthcare" },
      { "@type": "Organization", name: "Hallmark Printing & Branding", email: "printing@hallmark.mw", url: "https://hallmark.mw/solutions/printing" },
    ],
    hasCredential: [
      "ISO 9001", "ISO 14001", "ISO 45001", "ISO 13485", "ISO 27001", "ISO 12647-2",
    ],
    address: LOCATIONS.map((l) => ({
      "@type": "PostalAddress",
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: l.region,
      addressCountry: l.country,
      ...(l.postBox ? { postOfficeBoxNumber: l.postBox } : {}),
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hallmark.mw/#website",
    url: "https://hallmark.mw",
    name: "Hallmark Limited",
    publisher: { "@id": "https://hallmark.mw/#organization" },
    inLanguage: "en-MW",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hallmark.mw/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessesJsonLd() {
  return LOCATIONS.map((l, idx) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://hallmark.mw/#location-${idx}`,
    name: l.name,
    parentOrganization: { "@id": "https://hallmark.mw/#organization" },
    image: "https://hallmark.mw/logo.png",
    url: "https://hallmark.mw/contact",
    telephone: l.phone,
    email: "sales@hallmark.mw",
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: l.region,
      addressCountry: l.country,
      ...(l.postBox ? { postOfficeBoxNumber: l.postBox } : {}),
    },
    geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:00", closes: "17:00",
    }],
    areaServed: l.country === "MW" ? "Malawi" : "Zambia",
  }));
}

export function serviceJsonLd(opts: { name: string; description: string; url: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    provider: { "@type": "Organization", name: "Hallmark Limited", url: "https://hallmark.mw" },
    areaServed: ["Malawi", "Zambia", "Sub-Saharan Africa"],
    description: opts.description,
    url: opts.url,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbsJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: i.url,
    })),
  };
}
