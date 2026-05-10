import Link from 'next/link';
import { siteContent } from '../content/siteContent';

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-cream py-14">
      <div className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.nav.brand}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {siteContent.footer.columns.map((column) => (
              <div key={column.heading} className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-smoke">{column.heading}</p>
                <div className="space-y-3">
                  {column.links.map((link) => (
                    <Link key={link.href + link.label} href={link.href} className="block text-sm leading-7 text-charcoal transition hover:text-black/60">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 text-xs uppercase tracking-[0.22em] text-smoke">
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
