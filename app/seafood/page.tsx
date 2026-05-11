import { Footer } from '../../components/footer';
import { SectionHeading } from '../../components/section-heading';
import { SiteNav } from '../../components/site-nav';
import { siteContent } from '../../content/siteContent';

export default function SeafoodPage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading title={siteContent.seafood.heading} />
          <img
            src={siteContent.seafood.image}
            alt={siteContent.seafood.imageAlt}
            decoding="async"
            className="editorial-image h-72 w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="container space-y-14 pb-24">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-smoke">
          {siteContent.seafood.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-sm uppercase tracking-[0.24em] text-charcoal">{siteContent.seafood.note}</p>
        </div>

        <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.seafood.sourcing.heading}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-smoke">{siteContent.seafood.sourcing.body}</p>
        </section>

        <div className="space-y-12">
          {siteContent.seafood.categories.map((category) => (
            <section key={category.name} className="grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[0.7fr_1.3fr]">
              <h2 className="text-2xl font-medium text-charcoal">{category.name}</h2>
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li key={item} className="border-b border-black/10 pb-3 text-sm leading-7 text-smoke">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
