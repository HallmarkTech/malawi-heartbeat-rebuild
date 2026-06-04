type LogoItem = {
  name: string;
  logo?: string;
  mark?: string;
  href?: string;
  className?: string;
  markClassName?: string;
};

const clients: LogoItem[] = [
  { mark: "UNICEF", name: "UNICEF", markClassName: "font-bold tracking-tight text-[#0099ff]" },
  {
    mark: "UNDP",
    name: "United Nations Development Programme",
    markClassName: "font-black tracking-wider text-[#006eb5]",
  },
  {
    mark: "USAID",
    name: "USAID Implementing Partners",
    markClassName: "font-bold tracking-[0.18em] text-[#1f3f77]",
  },
  {
    mark: "ESCOM",
    name: "Electricity Supply Corporation of Malawi",
    markClassName: "font-bold tracking-wide text-[#d69b1f]",
  },
  { mark: "LWB", name: "Lilongwe Water Board", markClassName: "font-semibold text-[#1261a6]" },
  {
    mark: "MoH",
    name: "Ministry of Health - Malawi & Zambia",
    markClassName: "font-semibold text-[#148047]",
  },
  {
    logo: "/logos/clients/imm.png",
    name: "Institute of Marketing in Malawi",
    href: "https://imm.mw/",
  },
  {
    logo: "/logos/clients/mips.png",
    name: "Malawi Institute of Procurement and Supply",
    href: "https://www.mips.mw/",
  },
  {
    logo: "/logos/clients/national-bank.png",
    name: "National Bank of Malawi",
    href: "https://www.natbank.co.mw/",
  },
  { logo: "/logos/clients/nbs-bank.png", name: "NBS Bank", href: "https://nbs.mw/" },
  {
    logo: "/logos/clients/mbs.png",
    name: "Malawi Bureau of Standards",
    href: "https://www.mbsmw.org/",
  },
  { logo: "/logos/clients/old-mutual.jpg", name: "Old Mutual Malawi" },
  { logo: "/logos/clients/fdh-bank.jpg", name: "FDH Bank" },
  { logo: "/logos/clients/nico-group.jpg", name: "NICO Group" },
  { logo: "/logos/clients/airtel-malawi.jpg", name: "Airtel Malawi" },
  { logo: "/logos/clients/tnm-malawi.jpg", name: "TNM Malawi" },
  { logo: "/logos/clients/sunbird.jpg", name: "Sunbird Hotels & Resorts" },
  { logo: "/logos/clients/fam.jpg", name: "Football Association of Malawi" },
  {
    mark: "Press Corp.",
    name: "Press Corporation Limited",
    markClassName: "font-serif text-[#24415f]",
  },
  { mark: "Standard Bank", name: "Standard Bank", markClassName: "font-bold text-[#0033a1]" },
];

const partners: LogoItem[] = [
  { logo: "/logos/partners/hadron-group.png", name: "Hadron Group" },
  {
    logo: "/logos/partners/hospital-medical-equipment.png",
    name: "Hospital Medical Equipment",
  },
  { logo: "/logos/partners/heidelberg.png", name: "Heidelberg" },
  { logo: "/logos/partners/midcomp.png", name: "Midcomp" },
  { logo: "/logos/partners/lasec-group.png", name: "Lasec Group" },
  { logo: "/logos/partners/lesira-teq.png", name: "Lesira-Teq" },
  { logo: "/logos/partners/microsoft.png", name: "Microsoft" },
  { logo: "/logos/partners/dell.png", name: "Dell" },
  { logo: "/logos/partners/hp.png", name: "HP" },
  { logo: "/logos/partners/lenovo.png", name: "Lenovo" },
  { logo: "/logos/partners/oracle.png", name: "Oracle" },
  { logo: "/logos/partners/ibm.png", name: "IBM" },
  { logo: "/logos/partners/huawei.png", name: "Huawei" },
  { logo: "/logos/partners/konica-minolta.png", name: "Konica Minolta" },
];

function LogoTile({ item, isDark = false }: { item: LogoItem; isDark?: boolean }) {
  const content = (
    <div
      className={`flex h-full min-h-[118px] flex-col items-center justify-center gap-3 px-4 py-5 text-center transition duration-200 ${
        isDark
          ? "bg-white text-foreground hover:bg-white/95"
          : "bg-background hover:bg-secondary/40"
      } ${item.className ?? ""}`}
      title={item.name}
    >
      {item.logo ? (
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="h-12 max-w-[150px] object-contain"
          loading="lazy"
        />
      ) : (
        <span
          className={`text-lg leading-none md:text-xl ${item.markClassName ?? "font-semibold text-foreground"}`}
        >
          {item.mark}
        </span>
      )}
      <span className="text-[10px] uppercase leading-tight tracking-[0.14em] text-muted-foreground">
        {item.name}
      </span>
    </div>
  );

  if (!item.href) return content;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.name}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {content}
    </a>
  );
}

export function ClientLogos({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <>
      <section
        className={
          isDark
            ? "border-y border-white/10 bg-[color:var(--primary-deep)] text-primary-foreground"
            : "border-y border-border bg-secondary/30"
        }
      >
        <div className="container-x py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className={`eyebrow ${isDark ? "!text-accent" : ""}`}>
                Clients we've delivered for
              </div>
              <h2 className="mt-2 max-w-2xl font-display text-2xl font-bold md:text-3xl">
                Multilaterals, ministries, utilities, associations &amp; listed corporates.
              </h2>
            </div>
            <p
              className={`max-w-sm text-sm ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}
            >
              From donor-funded programs to commercial rollouts, Hallmark delivers to the standards
              each client requires.
            </p>
          </div>
          <ul className="grid overflow-hidden rounded-lg ring-1 ring-border sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clients.map((client) => (
              <li key={client.name} className="border-b border-r border-border/70">
                <LogoTile item={client} isDark={isDark} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-x py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">Brands we partner with</div>
              <h2 className="mt-2 max-w-2xl font-display text-2xl font-bold md:text-3xl">
                OEMs &amp; technology partners powering our solutions.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Authorised partnerships with global OEMs across ICT, industrial, healthcare and
              commercial printing.
            </p>
          </div>
          <ul className="grid overflow-hidden rounded-lg ring-1 ring-border sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {partners.map((partner) => (
              <li key={partner.name} className="border-b border-r border-border/70">
                <LogoTile item={partner} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
