'use client';

import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { site } from '@/lib/data';

/**
 * Set this to a Formspree / Getform / Basin endpoint to receive submissions
 * as real HTTP POSTs. Left null, the form validates client-side and then
 * hands off to the visitor's mail client — which works on static hosting
 * with no backend at all.
 */
const FORM_ENDPOINT: string | null = null;

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!EMAIL_RE.test(values.email.trim())) next.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 10) next.message = 'A little more detail would help — 10 characters minimum.';
    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('sent');
        setValues({ name: '', email: '', message: '' });
      } catch {
        setStatus('error');
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const field =
    'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors duration-300 focus:border-accent focus:outline-none';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${field} ${errors.name ? 'border-red-500/70' : ''}`}
            placeholder="Jane Tan"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${field} ${errors.email ? 'border-red-500/70' : ''}`}
            placeholder="jane@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${field} resize-y ${errors.message ? 'border-red-500/70' : ''}`}
          placeholder="Tell me about the role or the problem you're solving."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn-primary">
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>

        <p id="form-status" role="status" aria-live="polite" className="text-sm">
          {status === 'sent' && (
            <span className="text-emerald-500">
              {FORM_ENDPOINT ? 'Thanks — I&rsquo;ll reply shortly.' : 'Your mail app should now be open.'}
            </span>
          )}
          {status === 'error' && (
            <span className="text-red-500">
              Something went wrong. Please email me directly instead.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
