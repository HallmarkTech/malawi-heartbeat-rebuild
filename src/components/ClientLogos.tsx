import partnersStrip from "@/assets/partners-strip.png.asset.json";

// Stylised client wordmarks (we don't host third-party trademark files);
// each is shown as a logo tile with the formal client name labelled below.
const clients = [
  { mark: "UNICEF", style: "font-bold tracking-tight", name: "UNICEF" },
  { mark: "UNDP", style: "font-black tracking-wider", name: "United Nations Development Programme" },
  { mark: "World Bank", style: "font-serif italic", name: "The World Bank" },
  { mark: "USAID", style: "font-bold tracking-[0.18em]", name: "USAID Implementing Partners" },
  { mark: "Global Fund", style: "font-semibold", name: "The Global Fund" },
  { mark: "WHO", style: "font-black tracking-[0.2em]", name: "World Health Organization" },
  { mark: "ESCOM", style: "font-bold tracking-wide", name: "Electricity Supply Corporation of Malawi" },
  { mark: "LWB", style: "font-semibold", name: "Lilongwe Water Board" },
  { mark: "MoH", style: "font-medium", name: "Ministry of Health — Malawi & Zambia" },
  { mark: "Old Mutual", style: "font-bold tracking-tight", name: "Old Mutual" },
  { mark: "Press Corp.", style: "font-serif", name: "Press Corporation Limited" },
  { mark: "Standard Bank", style: "font-bold", name: "Standard Bank" },
];

// Names of the technology / OEM partners pictured in the partners strip image
// (kept in the same order they appear in the asset, top row then bottom row).
const partnerNames = [
  "Hadron Group",
  "Hospital Medical Equipment",
  "Heidelberg",
  "Midcomp",
  "Lasec Group",
  "Lesira-Teq",
  "Microsoft",
  "Dell",
  "HP",
  "Lenovo",
  "Oracle",
  "IBM",
  "Huawei",
  "Konica Minolta",
];

export function ClientLogos({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <>
      {/* CLIENTS */}
      <section className={isDark ? "border-y border-white/10 bg-[color:var(--primary-deep)] text-primary-foreground" : "border-y border-border bg-secondary/30"}>
        <div className="container-x py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className={`eyebrow ${isDark ? "!text-accent" : ""}`}>Clients we've delivered for</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold max-w-2xl">
                Multilaterals, ministries, utilities &amp; listed corporates.
              </h2>
            </div>
            <p className={`text-sm max-w-sm ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              From donor-funded programs to commercial rollouts — Hallmark delivers to the standards each client requires.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border/60 rounded-2xl overflow-hidden ring-1 ring-border">
            {clients.map((c) => (
              <li
                key={c.name}
                className={`flex flex-col items-center justify-center gap-2 px-4 py-7 text-center ${isDark ? "bg-[color:var(--primary-deep)]" : "bg-background"}`}
                title={c.name}
              >
                <span className={`text-base md:text-lg ${isDark ? "text-primary-foreground" : "text-foreground"} ${c.style}`}>{c.mark}</span>
                <span className={`text-[10px] uppercase tracking-[0.14em] leading-tight ${isDark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS */}
      <section className="border-b border-border bg-background">
        <div className="container-x py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow">Brands we partner with</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold max-w-2xl">
                OEMs &amp; technology partners powering our solutions.
              </h2>
            </div>
            <p className="text-sm max-w-sm text-muted-foreground">
              Authorised partnerships with global OEMs across ICT, industrial, healthcare and commercial printing.
            </p>
          </div>
          <div className="rounded-2xl ring-1 ring-border bg-card p-6 md:p-10">
            <img
              src={partnersStrip.url}
              alt="Technology partners of Hallmark Limited: Hadron Group, Hospital Medical Equipment, Heidelberg, Midcomp, Lasec Group, Lesira-Teq, Microsoft, Dell, HP, Lenovo, Oracle, IBM, Huawei, Konica Minolta"
              className="w-full h-auto object-contain"
              loading="lazy"
              width={1524}
              height={501}
            />
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 justify-center text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {partnerNames.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
