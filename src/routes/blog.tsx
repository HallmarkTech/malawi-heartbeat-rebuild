import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { breadcrumbsJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & News — Hallmark Limited | African Engineering & ICT" },
      { name: "description", content: "Field notes, case studies and industry insights from Hallmark Limited's ICT, industrial, healthcare and printing teams across Malawi, Zambia and Sub-Saharan Africa." },
      { property: "og:title", content: "Insights & News — Hallmark Limited" },
      { property: "og:description", content: "Field notes and engineering insights from across Sub-Saharan Africa." },
      { property: "og:image", content: "/og-blog.jpg" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Hallmark Limited — Insights & News",
          url: "https://hallmark.mw/blog",
          publisher: { "@type": "Organization", name: "Hallmark Limited" },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `https://hallmark.mw/blog/${p.slug}`,
            author: { "@type": "Organization", name: p.author },
            description: p.excerpt,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbsJsonLd([
          { name: "Home", url: "https://hallmark.mw/" },
          { name: "Insights & News", url: "https://hallmark.mw/blog" },
        ])),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="border-b border-border">
        <div className="container-x py-16 lg:py-20 max-w-3xl">
          <div className="eyebrow">Insights & news</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Field notes from <span className="underline-accent">African delivery</span>.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Engineering write-ups, donor-program lessons, and product updates — written by the teams shipping the work, not the marketing department.
          </p>
        </div>
      </section>

      <section className="container-x py-16 space-y-16">
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="grid lg:grid-cols-2 gap-10 group">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-border">
            <img src={featured.cover} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1600} height={1100} loading="lazy" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-3 text-xs uppercase tracking-[0.18em]">
              <span className="text-primary font-bold">{featured.category}</span>
              <span className="text-muted-foreground">{new Date(featured.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}</span>
              <span className="text-muted-foreground">· {featured.readMins} min read</span>
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold group-hover:text-primary transition-colors">{featured.title}</h2>
            <p className="mt-5 text-muted-foreground text-lg">{featured.excerpt}</p>
            <div className="mt-6 text-sm font-medium text-primary">Read the piece →</div>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 gap-10 pt-6 border-t border-border">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-border mb-5">
                <img src={p.cover} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1600} height={1100} loading="lazy" />
              </div>
              <div className="flex gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-primary font-bold">{p.category}</span>
                <span>{new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
