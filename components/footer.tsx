import Link from 'next/link';
import { siteContent } from '../content/siteContent';

function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path d="M14 8.5h2.2V5.2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.9H5v3.7h3.2V24h3.9v-7.2h3.1l.5-3.7h-3.6v-2.5c0-1.1.3-2.1 1.9-2.1Z" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-cream py-14">
      <div className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.nav.brand}</p>
            <div className="flex items-center gap-3">
              {siteContent.footer.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-smoke transition hover:border-charcoal hover:text-charcoal"
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
            <a
              href={siteContent.footer.reviewLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-charcoal/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal transition hover:bg-charcoal hover:text-cream"
            >
              {siteContent.footer.reviewLink.label}
            </a>
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
