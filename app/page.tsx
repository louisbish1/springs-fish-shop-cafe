import { Footer } from '../components/footer';
import { SectionHeading } from '../components/section-heading';
import { SiteNav } from '../components/site-nav';
import { siteContent } from '../content/siteContent';

export default function HomePage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />

      <section className="relative overflow-hidden">
        <div className="container grid min-h-[calc(100vh-92px)] gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="motion-group space-y-8">
            <div className="motion-eyebrow text-xs uppercase tracking-[0.34em] text-smoke">{siteContent.header.eyebrow}</div>
            <div className="space-y-6">
              <h1 className="motion-heading max-w-3xl text-5xl font-medium leading-[0.98] sm:text-7xl">
                {siteContent.header.title}
              </h1>
              <p className="motion-body max-w-xl text-lg leading-8 text-smoke sm:text-xl">{siteContent.header.subtitle}</p>
            </div>
          </div>

          <div className="editorial-image relative flex min-h-[420px] items-end overflow-hidden rounded-3xl border border-black/5 bg-black/5 p-8 shadow-soft sm:p-10">
            <div className="absolute inset-0 bg-[url('/images/fish-counter.jpeg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-4 text-white">
              <div className="motion-group max-w-sm rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-sm">
                <p className="motion-eyebrow text-xs uppercase tracking-[0.3em] text-sand">{siteContent.home.heroPanel.eyebrow}</p>
                <h2 className="motion-heading mt-4 text-2xl font-medium leading-tight">{siteContent.home.heroPanel.heading}</h2>
                <p className="motion-body mt-3 text-sm leading-7 text-white/80">{siteContent.home.heroPanel.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 py-20">
        <SectionHeading
          eyebrow={siteContent.home.story.eyebrow}
          title={siteContent.home.story.heading}
          description={siteContent.home.story.body}
        />
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="motion-group space-y-6">
            <p className="motion-eyebrow text-sm uppercase tracking-[0.28em] text-smoke">{siteContent.home.cafe.eyebrow}</p>
            <h2 className="motion-heading text-3xl font-medium leading-tight sm:text-4xl">{siteContent.home.cafe.heading}</h2>
            <p className="motion-body max-w-2xl text-base text-smoke">{siteContent.home.cafe.body}</p>
          </div>
          <div className="editorial-image overflow-hidden rounded-3xl border border-black/5 bg-black/5 shadow-soft">
            <div className="grid gap-2 sm:grid-cols-2">
              <img
                src={siteContent.home.cafe.foodImage}
                alt={siteContent.home.cafe.foodImageAlt}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover sm:h-72"
              />
              <img
                src={siteContent.home.cafe.image}
                alt={siteContent.home.cafe.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover sm:h-72"
              />
            </div>
            <div className="motion-group p-8 text-smoke">
              <p className="motion-eyebrow font-semibold text-charcoal">{siteContent.home.cafe.noteHeading}</p>
              <p className="motion-body mt-4">{siteContent.home.cafe.noteBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
            <div className="motion-group space-y-5">
              <p className="motion-eyebrow text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.contact.labels.address}</p>
              <h2 className="motion-heading text-3xl font-medium leading-tight sm:text-4xl">{siteContent.home.location.mapHeading}</h2>
              <p className="motion-body text-sm leading-7 text-smoke">{siteContent.home.location.mapBody}</p>
            </div>
            <div className="mt-10 space-y-3 border-t border-black/10 pt-6">
              <p className="text-lg font-medium text-charcoal">{siteContent.contact.address}</p>
              <a href={siteContent.contact.phoneHref} className="block text-sm text-smoke transition hover:text-charcoal">
                {siteContent.contact.phone}
              </a>
              <a href={`mailto:${siteContent.contact.email}`} className="block text-sm text-smoke transition hover:text-charcoal">
                {siteContent.contact.email}
              </a>
            </div>
          </div>

          <div className="min-h-[420px] overflow-hidden rounded-3xl border border-black/5 bg-black/5 shadow-soft">
            <iframe
              src={siteContent.contact.mapEmbed}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={siteContent.contact.labels.mapTitle}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
