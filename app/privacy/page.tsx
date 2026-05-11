import { Footer } from '../../components/footer';
import { SectionHeading } from '../../components/section-heading';
import { SiteNav } from '../../components/site-nav';
import { siteContent } from '../../content/siteContent';

export default function PrivacyPage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />
      <section className="container py-20">
        <SectionHeading title={siteContent.privacy.heading} description={siteContent.privacy.intro} />
      </section>
      <section className="container space-y-6 pb-24">
        {siteContent.privacy.sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
            <h2 className="text-2xl font-medium text-charcoal">{section.title}</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-smoke">{section.body}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
