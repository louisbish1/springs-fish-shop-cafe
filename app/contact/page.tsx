import { Footer } from '../../components/footer';
import { SectionHeading } from '../../components/section-heading';
import { SiteNav } from '../../components/site-nav';
import { siteContent } from '../../content/siteContent';

export default function ContactPage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />
      <section className="container py-20">
        <SectionHeading title={siteContent.contact.heading} />
      </section>
      <section className="container grid gap-16 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8 rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.contact.labels.phone}</p>
            <a href={siteContent.contact.phoneHref} className="text-lg font-semibold text-charcoal hover:text-black">{siteContent.contact.phone}</a>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.contact.labels.email}</p>
            <a href={`mailto:${siteContent.contact.email}`} className="text-lg font-semibold text-charcoal hover:text-black">{siteContent.contact.email}</a>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.contact.labels.address}</p>
            <p className="text-lg font-semibold text-charcoal">{siteContent.contact.address}</p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.contact.labels.hours}</p>
            <div className="space-y-3 text-sm text-charcoal/90">
              {siteContent.contact.hours.map((entry) => (
                <div key={entry.day} className="flex justify-between border-b border-black/10 pb-3">
                  <span>{entry.day}</span>
                  <span>{entry.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-black/5 bg-black/5 shadow-soft">
          <iframe
            src={siteContent.contact.mapEmbed}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={siteContent.contact.labels.mapTitle}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
