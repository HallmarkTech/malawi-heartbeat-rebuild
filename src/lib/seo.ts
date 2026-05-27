export const SITE = {
  name: "Hallmark Limited",
  tagline: "The Only Way",
  url: "", // relative — domain set at deploy
  description:
    "Hallmark Limited delivers integrated ICT, Industrial, Healthcare and Commercial Printing solutions across Malawi, Zambia and international markets.",
};

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hallmark Limited",
    alternateName: "Hallmark MW",
    url: "https://hallmark.mw",
    logo: "https://hallmark.mw/logo.png",
    slogan: "The Only Way",
    description: SITE.description,
    foundingLocation: { "@type": "Place", name: "Blantyre, Malawi" },
    areaServed: ["Malawi", "Zambia", "Sub-Saharan Africa", "International"],
    email: "sales@hallmark.mw",
    telephone: "+265-881-091-909",
    sameAs: ["https://www.linkedin.com/company/hallmark-limited-mw/"],
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+265-881-091-909", contactType: "sales", email: "sales@hallmark.mw", areaServed: ["MW", "ZM"], availableLanguage: ["English", "Chichewa"] },
    ],
    department: [
      { "@type": "Organization", name: "Hallmark ICT", email: "ict@hallmark.mw" },
      { "@type": "Organization", name: "Hallmark Industrial", email: "industrial@hallmark.mw" },
      { "@type": "Organization", name: "Hallmark Healthcare", email: "healthcare@hallmark.mw" },
      { "@type": "Organization", name: "Hallmark Printing & Branding", email: "printing@hallmark.mw" },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Area 47, Sector 1, Nzinziri Street",
        addressLocality: "Lilongwe",
        addressCountry: "MW",
        postOfficeBoxNumber: "162",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Comet House, Yanakis Roundabout, Limbe",
        addressLocality: "Blantyre",
        addressCountry: "MW",
        postOfficeBoxNumber: "1055",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Plot 160, Silverest",
        addressLocality: "Lusaka",
        addressCountry: "ZM",
      },
    ],
  };
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
