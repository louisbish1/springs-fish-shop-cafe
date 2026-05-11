'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../content/siteContent';

export function SiteNav() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function showNearTop(event: PointerEvent) {
      if (event.clientY < 72) {
        setIsVisible(true);
      }
    }

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 32) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY.current) < 8) {
        return;
      }

      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    }

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointerdown', showNearTop, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointerdown', showNearTop);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-30 hidden h-4 lg:block"
        onMouseEnter={() => setIsVisible(true)}
        aria-hidden="true"
      />
      <header
        className={`sticky top-0 z-20 border-b border-black/5 bg-cream/90 backdrop-blur-sm transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={() => setIsVisible(true)}
        onFocusCapture={() => setIsVisible(true)}
      >
        <div className="container flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="max-w-[18rem] text-xs font-semibold uppercase tracking-[0.28em] text-charcoal sm:max-w-none sm:tracking-[0.3em] sm:text-sm">
            {siteContent.nav.brand}
          </Link>
          <div className="flex items-start justify-between gap-5 sm:items-center lg:flex-wrap lg:items-center lg:justify-start lg:gap-x-6 lg:gap-y-3">
            <nav className="flex max-w-[calc(100%-4rem)] flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.18em] text-smoke sm:max-w-none sm:gap-x-6 sm:tracking-[0.2em]">
              {siteContent.nav.links.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link transition hover:text-charcoal">
                  {link.label}
                </Link>
              ))}
            </nav>
            <img src={siteContent.nav.logo} alt={siteContent.nav.logoAlt} width="44" height="44" decoding="async" className="site-logo mt-0.5 h-11 w-11 shrink-0 object-contain sm:h-10 sm:w-10 lg:mt-0" />
          </div>
        </div>
      </header>
    </>
  );
}
