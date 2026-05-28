import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  category: "Insights" | "News" | "Case Note";
  author: string;
  cover: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "solar-epc-malawi-2026",
    title: "Why Solar EPC in Malawi needs an African delivery model",
    excerpt:
      "Imported turnkey models keep stranding assets. Here's how local EPC capacity changes the unit economics of solar in Sub-Saharan Africa.",
    date: "2026-05-12",
    readMins: 6,
    category: "Insights",
    author: "Hallmark Industrial",
    cover: blog1,
    body: [
      "Across Malawi and Zambia, more than a third of utility-scale solar plants commissioned in the last decade are operating below 70% of their nameplate capacity within three years of handover. The reason is rarely the panels themselves — it is the absence of locally-resident engineering capacity to keep them running.",
      "At Hallmark, we approach EPC the way an airline approaches a fleet: design for the maintenance regime, not just the install. That means specifying inverters and trackers with a parts ecosystem already present in the SADC region, and pre-training the client's O&M team during commissioning — not after.",
      "The result for a recent 2 MW rural hybrid project: 96% availability across the first 18 months, versus a regional benchmark of 78%. Same panels. Same inverter brand. Different delivery model.",
    ],
  },
  {
    slug: "smart-water-metering-lusaka",
    title: "Inside a 28% NRW reduction: lessons from a Zambian utility pilot",
    excerpt:
      "Non-revenue water is the silent killer of African utilities. A 90-day smart metering pilot shows what's possible when meters, billing and field ops finally talk to each other.",
    date: "2026-04-04",
    readMins: 5,
    category: "Case Note",
    author: "Hallmark ICT × Industrial",
    cover: blog2,
    body: [
      "In late 2025 a mid-sized Zambian water utility partnered with Hallmark to pilot prepaid smart metering across 1,200 residential connections in Lusaka's peri-urban belt. Within 90 days, district-level non-revenue water (NRW) fell from 47% to 19%.",
      "The technical answer is unglamorous: NB-IoT meters, a hosted billing API, and tablet-based field workflows. The harder work was operational — re-training meter readers as customer-experience agents, and integrating the meter data into the utility's existing billing system without ripping it out.",
      "Bottom line: every percentage point of NRW recovered at scale represents roughly USD 180,000/year of revenue for the utility — enough to self-fund expansion of the program without further donor capital.",
    ],
  },
  {
    slug: "biomedical-engineering-rural-clinics",
    title: "Biomedical engineering belongs in the village, not the capital",
    excerpt:
      "Two-thirds of donated medical equipment fails within five years. Lifecycle support — not procurement — is the real bottleneck in African healthcare.",
    date: "2026-03-18",
    readMins: 7,
    category: "Insights",
    author: "Hallmark Healthcare",
    cover: blog3,
    body: [
      "Every Ministry of Health in the region has the same store-room: an ultrasound from 2019 that nobody can calibrate, an autoclave with a missing gasket, a CT scanner whose service contract expired before the first patient.",
      "Hallmark's biomedical division was built around this gap. We don't just sell devices — we deploy regional biomedical engineers, stock critical spares in-country, and run quarterly preventive maintenance routes that reach district hospitals in Karonga and Chitipa, not just Lilongwe and Blantyre.",
      "For one NGO partner, this lifted equipment uptime from 61% to 94% across 22 rural clinics in 12 months. The capital cost of the upgrade was less than 8% of what replacement would have cost.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
