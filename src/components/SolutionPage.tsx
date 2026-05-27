import { Link } from "@tanstack/react-router";

type Capability = { title: string; body: string };
type Stat = { value: string; label: string };

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  email: string;
  heroImg: string;
  vision: string;
  mission: string;
  capabilities: Capability[];
  process: { title: string; body: string }[];
  differentiators: { title: string; body: string }[];
  outcomes: Stat[];
  markets: string[];
}

export function SolutionPage(p: SolutionPageProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 grid-lines opacity-50" />
        <div className="container-x grid lg:grid-cols-12 gap-10 py-16 lg:py-20 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="eyebrow">{p.eyebrow}</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">{p.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{p.intro}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/contact" className="btn-primary">Discuss your project →</Link>
              <a href={`mailto:${p.email}`} className="btn-ghost">{p.email}</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border shadow-[var(--shadow-elev)]">
              <img src={p.heroImg} alt={p.title} className="absolute inset-0 w-full h-full object-cover" width={1600} height={1100} />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary-deep)]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 grid md:grid-cols-2 gap-5">
        <div className="card-soft">
          <div className="eyebrow">Vision</div>
          <p className="mt-3 font-display text-xl">{p.vision}</p>
        </div>
        <div className="card-soft">
          <div className="eyebrow">Mission</div>
          <p className="mt-3 font-display text-xl">{p.mission}</p>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="eyebrow">Core capabilities</div>
        <h2 className="mt-3 font-display text-4xl font-bold">What we deliver.</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.capabilities.map((c, i) => (
            <div key={c.title} className="card-soft">
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-accent">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-16">
          <div className="eyebrow">Our process</div>
          <h2 className="mt-3 font-display text-4xl font-bold max-w-2xl">Predictable delivery, structured handover.</h2>
          <ol className="mt-10 grid md:grid-cols-5 gap-4">
            {p.process.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <div className="text-xs font-bold tracking-[0.22em] uppercase text-accent">Step {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 font-display font-bold">{s.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow">What sets us apart</div>
          <h2 className="mt-3 font-display text-4xl font-bold">Engineering you can audit.</h2>
          <ul className="mt-8 space-y-4">
            {p.differentiators.map((d) => (
              <li key={d.title} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold">✓</span>
                <div>
                  <div className="font-display text-lg font-bold">{d.title}</div>
                  <div className="text-sm text-muted-foreground">{d.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          {p.outcomes.map((o) => (
            <div key={o.label} className="card-soft">
              <div className="font-display text-4xl font-bold text-primary">{o.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-[color:var(--primary-deep)] text-primary-foreground p-10 md:p-14">
          <div className="eyebrow !text-accent">Markets we serve</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold max-w-2xl">Built for the realities of African operations.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.markets.map((m) => (
              <span key={m} className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15">{m}</span>
            ))}
          </div>
          <div className="mt-10 flex gap-3">
            <Link to="/contact" className="btn-accent">Start a project →</Link>
            <Link to="/case-studies" className="btn-ghost !text-primary-foreground !border-white/30">See case studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
