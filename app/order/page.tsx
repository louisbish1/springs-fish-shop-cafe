import { Footer } from '../../components/footer';
import { OrderForm } from '../../components/order-form';
import { SectionHeading } from '../../components/section-heading';
import { SiteNav } from '../../components/site-nav';
import { siteContent } from '../../content/siteContent';

export default function OrderPage() {
  return (
    <main className="bg-cream text-charcoal">
      <SiteNav />
      <section className="container py-20">
        <SectionHeading title={siteContent.order.heading} description={siteContent.order.intro} />
      </section>

      <section className="container grid gap-16 pb-24 lg:grid-cols-[1.2fr_0.8fr]">
        <OrderForm />

        <aside className="space-y-8 rounded-3xl border border-black/5 bg-black/5 p-8 sm:p-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.order.detailsHeading}</p>
            {siteContent.order.details.map((text) => (
              <p key={text} className="text-sm text-charcoal/90">{text}</p>
            ))}
          </div>

          <div className="space-y-4">
            <a href={siteContent.contact.phoneHref} className="block rounded-full border border-charcoal/70 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-charcoal transition hover:bg-charcoal hover:text-cream">
              {siteContent.order.contact.callLabel}
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="block rounded-full border border-charcoal/70 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-charcoal transition hover:bg-charcoal hover:text-cream">
              {siteContent.order.contact.emailLabel}
            </a>
          </div>
        </aside>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-smoke">{siteContent.order.sourcing.heading}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-smoke">{siteContent.order.sourcing.body}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
