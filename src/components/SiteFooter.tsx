import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--primary-deep)] text-primary-foreground">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Hallmark Limited" width={48} height={48} className="h-12 w-auto bg-white rounded-md p-1" />
            <div>
              <div className="font-display text-lg font-bold">Hallmark Limited</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">The Only Way</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75 max-w-xs">
            African technology &amp; engineering — ICT, Industrial, Healthcare and Commercial Printing solutions for Sub-Saharan Africa and international markets.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">Solutions</div>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/solutions/ict" className="hover:text-accent">ICT &amp; Digital</Link></li>
            <li><Link to="/solutions/industrial" className="hover:text-accent">Industrial Engineering</Link></li>
            <li><Link to="/solutions/healthcare" className="hover:text-accent">Healthcare Solutions</Link></li>
            <li><Link to="/solutions/printing" className="hover:text-accent">Printing &amp; Branding</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-accent">Industries</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Insights & News</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-accent">Sitemap</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">Offices</div>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li>
              <div className="font-semibold text-primary-foreground">Lilongwe — Head Office</div>
              Area 47, Sector 1, Nzinziri Street, Lilongwe, Malawi
            </li>
            <li>
              <div className="font-semibold text-primary-foreground">Blantyre</div>
              Comet House, Yanakis Roundabout, Limbe
            </li>
            <li>
              <div className="font-semibold text-primary-foreground">Lusaka, Zambia</div>
              Plot 160, Silverest, Lusaka
            </li>
            <li>
              <a href="mailto:sales@hallmark.mw" className="hover:text-accent">sales@hallmark.mw</a><br/>
              <a href="tel:+265881091909" className="hover:text-accent">+265 881 091 909</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Hallmark Limited. Registered in Malawi &amp; Zambia.</div>
          <div className="uppercase tracking-[0.22em] text-accent">The Only Way</div>
        </div>
      </div>
    </footer>
  );
}
