'use client';

import { FormEvent, useState } from 'react';

export function WorkshopInterest() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    currentLevel: '',
    interests: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/workshop-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        const body = await response.json();
        setError(body.error || 'Unable to submit interest.');
        setStatus('error');
        return;
      }

      setFormState({ name: '', email: '', currentLevel: '', interests: '', message: '' });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError('Unable to submit interest. Please try again.');
    }
  }

  return (
    <article className="rounded-3xl border border-brand-copper/25 bg-white/75 p-7 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
      <h2 className="text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">Workshop interest form</h2>
      <p className="mt-4 text-base leading-7 text-ink-700 dark:text-ink-300">
        Share your details and what you want to learn or build.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">Name</label>
          <input
            value={formState.name}
            onChange={(event) => setFormState({ ...formState, name: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">Email</label>
          <input
            type="email"
            value={formState.email}
            onChange={(event) => setFormState({ ...formState, email: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">Current experience</label>
          <input
            value={formState.currentLevel}
            onChange={(event) => setFormState({ ...formState, currentLevel: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Beginner, curious, building already..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">What interests you most?</label>
          <textarea
            value={formState.interests}
            onChange={(event) => setFormState({ ...formState, interests: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Tell me what you want to build or learn"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">Anything else to share?</label>
          <textarea
            value={formState.message}
            onChange={(event) => setFormState({ ...formState, message: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Your background, goals, or preferred project domain"
            rows={4}
          />
        </div>

        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
        {status === 'success' ? <p className="text-sm font-medium text-brand-blue">Thank you — your interest is recorded.</p> : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Show interest'}
        </button>
      </form>
    </article>
  );
}
