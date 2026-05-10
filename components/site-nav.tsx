import { existsSync } from 'fs';
import Link from 'next/link';
import { join } from 'path';
import { siteContent } from '../content/siteContent';

export function SiteNav() {
  const hasLogo = existsSync(join(process.cwd(), 'public', 'images', 'logo.png'));

  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-cream/90 backdrop-blur-sm">
      <div className="container flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal sm:text-sm">
          {siteContent.nav.brand}
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-smoke">
            {siteContent.nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-charcoal">
                {link.label}
              </Link>
            ))}
          </nav>
          {hasLogo ? <img src={siteContent.nav.logo} alt={siteContent.nav.logoAlt} className="site-logo h-10 w-10 object-contain" /> : null}
        </div>
      </div>
    </header>
  );
}
