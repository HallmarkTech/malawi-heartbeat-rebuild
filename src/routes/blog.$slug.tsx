import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts, getPost } from "@/lib/posts";
import { breadcrumbsJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found — Hallmark" }] };
    return {
      meta: [
        { title: `${post.title} — Hallmark Insights` },
        { name: "description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "Hallmark Limited", logo: { "@type": "ImageObject", url: "https://hallmark.mw/logo.png" } },
            image: [post.cover],
            description: post.excerpt,
            mainEntityOfPage: `https://hallmark.mw/blog/${post.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbsJsonLd([
            { name: "Home", url: "https://hallmark.mw/" },
            { name: "Insights", url: "https://hallmark.mw/blog" },
            { name: post.title, url: `https://hallmark.mw/blog/${post.slug}` },
          ])),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Post not found</h1>
      <Link to="/blog" className="btn-primary mt-6 inline-flex">Back to insights</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <article>
      <header className="container-x pt-16 pb-10 max-w-3xl">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">← All insights</Link>
        <div className="mt-6 flex gap-3 text-xs uppercase tracking-[0.18em]">
          <span className="text-primary font-bold">{post.category}</span>
          <span className="text-muted-foreground">{new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span className="text-muted-foreground">· {post.readMins} min</span>
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 text-sm">By <span className="font-semibold">{post.author}</span></div>
      </header>

      <div className="container-x">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden ring-1 ring-border">
          <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        </div>
      </div>

      <div className="container-x py-14 max-w-3xl space-y-6 text-lg leading-relaxed">
        {post.body.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="border-t border-border bg-secondary/30">
        <div className="container-x py-16">
          <div className="eyebrow">Keep reading</div>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group flex gap-5 items-start">
                <div className="relative w-32 h-24 shrink-0 rounded-xl overflow-hidden ring-1 ring-border">
                  <img src={p.cover} alt={p.title} className="absolute inset-0 w-full h-full object-cover" width={400} height={300} loading="lazy" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-primary font-bold">{p.category}</div>
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors mt-1">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
