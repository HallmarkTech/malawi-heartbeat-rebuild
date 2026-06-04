import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { orgJsonLd, websiteJsonLd, localBusinessesJsonLd } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow justify-center">404 — Not found</div>
        <h1 className="mt-4 font-display text-5xl font-bold">This page is offline</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hallmark Limited — ICT, Industrial, Healthcare & Printing | Malawi & Zambia" },
      {
        name: "description",
        content:
          "Hallmark Limited is an African technology and engineering company delivering ICT, Industrial, Healthcare and Commercial Printing solutions across Malawi, Zambia and international markets. The Only Way.",
      },
      { name: "author", content: "Hallmark Limited" },
      {
        name: "keywords",
        content:
          "Hallmark Malawi, Hallmark Limited, ICT Malawi, smart water meters Africa, solar EPC Malawi, biomedical engineering Zambia, commercial printing Blantyre, engineering Lilongwe, SCADA Africa, hallmark.mw",
      },
      { name: "theme-color", content: "#1e3a8a" },
      { property: "og:site_name", content: "Hallmark Limited" },
      {
        property: "og:title",
        content: "Hallmark Limited — ICT, Industrial, Healthcare & Printing | Malawi & Zambia",
      },
      {
        property: "og:description",
        content:
          "Hallmark Limited is an African technology and engineering company delivering ICT, Industrial, Healthcare and Commercial Printing solutions across Malawi, Zambia and international markets. The Only Way.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_MW" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@HallmarkMW" },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { name: "geo.region", content: "MW" },
      { name: "geo.placename", content: "Lilongwe, Blantyre, Mzuzu" },
      { name: "geo.position", content: "-13.9626;33.7741" },
      { name: "ICBM", content: "-13.9626, 33.7741" },
      {
        name: "twitter:title",
        content: "Hallmark Limited — ICT, Industrial, Healthcare & Printing | Malawi & Zambia",
      },
      {
        name: "twitter:description",
        content:
          "Hallmark Limited is an African technology and engineering company delivering ICT, Industrial, Healthcare and Commercial Printing solutions across Malawi, Zambia and international markets. The Only Way.",
      },
      { property: "og:image", content: "https://hallmark.mw/logo.png" },
      { name: "twitter:image", content: "https://hallmark.mw/logo.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd()) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": localBusinessesJsonLd(),
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
