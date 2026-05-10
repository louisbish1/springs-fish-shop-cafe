import { Footer } from '../../components/footer';
import { SectionHeading } from '../../components/section-heading';
import { SiteNav } from '../../components/site-nav';
import { siteContent } from '../../content/siteContent';

export default function AboutPage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />
      <section className="container py-20">
        <SectionHeading title={siteContent.about.heading} />
      </section>
      <section className="container space-y-10 pb-24">
        {siteContent.about.sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
            <h2 className="text-2xl font-medium text-charcoal">{section.title}</h2>
            <p className="mt-5 text-sm leading-7 text-smoke">{section.body}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
