import { Footer } from '../../components/footer';
import { SectionHeading } from '../../components/section-heading';
import { SiteNav } from '../../components/site-nav';
import { siteContent } from '../../content/siteContent';

export default function MenuPage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            title={siteContent.menu.heading}
            description={siteContent.menu.intro}
          />
          <img
            src={siteContent.menu.image}
            alt={siteContent.menu.imageAlt}
            decoding="async"
            className="editorial-image h-72 w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="container space-y-20 pb-24">
        {siteContent.menu.categories.map((category) => (
          <div key={category.id} className="grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="motion-group space-y-4">
              <p className="motion-eyebrow text-xs uppercase tracking-[0.3em] text-smoke">{category.name}</p>
              <p className="motion-body max-w-xl text-sm leading-7 text-smoke">{category.description}</p>
            </div>
            <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {category.items.map((item) => (
                <div key={item.name} className="flex flex-col gap-3 border-b border-black/10 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                    <h3 className="text-xl font-medium text-charcoal">{item.name}</h3>
                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-smoke">{item.price}</span>
                  </div>
                  {item.description ? <p className="text-sm leading-7 text-smoke">{item.description}</p> : null}
                </div>
              ))}
            </div>
          </div>
        ))}

        <aside className="grid gap-8 rounded-3xl border border-black/5 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <img
            src={siteContent.menu.cakesFeature.image}
            alt={siteContent.menu.cakesFeature.imageAlt}
            loading="lazy"
            decoding="async"
            className="editorial-image h-64 w-full rounded-2xl object-cover"
          />
          <div className="motion-group space-y-4">
            <p className="motion-eyebrow text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.menu.cakesFeature.heading}</p>
            <p className="motion-body max-w-xl text-sm leading-7 text-smoke">{siteContent.menu.cakesFeature.body}</p>
          </div>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
