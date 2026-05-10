'use client';

import { FormEvent, useState } from 'react';
import { siteContent } from '../content/siteContent';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function OrderForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      orderDetails: String(formData.get('orderDetails') || '').trim(),
      collectionTime: String(formData.get('collectionTime') || '').trim(),
      accepted: formData.get('accepted') === 'on',
    };

    if (!payload.name || !payload.phone || !payload.email || !payload.orderDetails || !payload.accepted) {
      setStatus('error');
      setMessage('Please complete all required fields before sending.');
      return;
    }

    if (!accessKey) {
      setStatus('error');
      setMessage('Email form handling is not configured yet.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Springs order request',
          from_name: 'Springs Fish Shop & Café website',
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          preferred_collection_time: payload.collectionTime || 'Not specified',
          order_details: payload.orderDetails,
          message: [
            'New Springs order request',
            `Name: ${payload.name}`,
            `Phone: ${payload.phone}`,
            `Email: ${payload.email}`,
            `Collection: ${payload.collectionTime || 'Not specified'}`,
            `Order: ${payload.orderDetails}`,
          ].join('\n'),
        }),
      });

      const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (!response.ok) {
        throw new Error(data?.message || siteContent.order.form.error);
      }

      if (data?.success === false) {
        throw new Error(data.message || siteContent.order.form.error);
      }

      setStatus('success');
      setMessage(siteContent.order.form.success);
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : siteContent.order.form.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-charcoal">
          {siteContent.order.form.nameLabel}
          <input name="name" type="text" required className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition focus:border-charcoal/70" />
        </label>
        <label className="space-y-2 text-sm font-medium text-charcoal">
          {siteContent.order.form.phoneLabel}
          <input name="phone" type="tel" required className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition focus:border-charcoal/70" />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-charcoal">
        {siteContent.order.form.emailLabel}
        <input name="email" type="email" required className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition focus:border-charcoal/70" />
      </label>
      <label className="space-y-2 text-sm font-medium text-charcoal">
        {siteContent.order.form.orderLabel}
        <textarea name="orderDetails" rows={6} required className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-4 text-sm text-charcoal outline-none transition focus:border-charcoal/70" />
      </label>
      <label className="space-y-2 text-sm font-medium text-charcoal">
        {siteContent.order.form.dateLabel}
        <input name="collectionTime" type="text" placeholder={siteContent.order.form.datePlaceholder} className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition focus:border-charcoal/70" />
      </label>
      <label className="flex items-start gap-3 text-sm text-charcoal">
        <input name="accepted" type="checkbox" required className="mt-1 h-5 w-5 rounded border border-black/10 text-charcoal focus:ring-0" />
        <span>{siteContent.order.form.disclaimer}</span>
      </label>
      <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cream transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'sending' ? siteContent.order.form.sending : siteContent.order.form.submit}
      </button>
      {message ? (
        <p className={`text-sm leading-7 ${status === 'success' ? 'text-charcoal' : 'text-smoke'}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
