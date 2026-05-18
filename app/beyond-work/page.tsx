import type { Metadata } from 'next';
import { HomeBack } from '@/components/home-back';

export const metadata: Metadata = {
  title: 'Beyond Work',
  description: 'The interests and commitments that keep Chethan P grounded beyond professional work.'
};

const hobbies = [
  {
    title: 'Natural farming at SiriBhoomi',
    summary: 'A living classroom for patience, observation, soil, seasons, food, biodiversity, and long-term thinking.',
    detail: 'SiriBhoomi keeps me close to the reality that meaningful systems are cultivated. The lessons from natural farming — observe carefully, intervene thoughtfully, respect constraints, and improve over time — also influence how I think about technology and organizations.',
    link: 'https://maps.app.goo.gl/5siHVkXdPcaBcJKt6?g_st=ac',
    linkLabel: 'View SiriBhoomi Organic Farm'
  },
  {
    title: 'Teaching AI and technology to kids',
    summary: 'Helping young learners see technology as something they can understand, question, build with, and use responsibly.',
    detail: 'I enjoy making technology less intimidating and more creative. With kids, the focus is curiosity, confidence, judgment, and responsible use — not hype. Teaching also forces me to explain ideas simply, which improves how I think and communicate professionally.',
    link: '',
    linkLabel: ''
  },
  {
    title: 'Writing and learning in public',
    summary: 'Turning work, reading, experiments, and reflections into notes that can compound over time.',
    detail: 'Writing helps me clarify what I believe, test ideas, and make my thinking useful to others. This website is intended to become a steady record of that learning.',
    link: '/insights',
    linkLabel: 'Read my writing'
  }
];

export default function BeyondWorkPage() {
  return (
    <>
      <HomeBack />
      <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">Beyond Work</p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-navy dark:text-white sm:text-5xl">The interests that keep my work grounded.</h1>
          <p className="mt-5 text-lg leading-8 text-ink-700 dark:text-ink-300">Professional work is only one part of the story. Farming, teaching, writing, and learning shape how I think about patience, responsibility, systems, and long-term impact.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <article key={hobby.title} className="rounded-3xl border border-brand-copper/25 bg-white/75 p-7 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">{hobby.title}</h2>
              <p className="mt-4 text-lg leading-8 text-ink-800 dark:text-ink-200">{hobby.summary}</p>
              <p className="mt-4 leading-7 text-ink-700 dark:text-ink-300">{hobby.detail}</p>
              {hobby.link ? (
                <a href={hobby.link} className="mt-6 inline-flex text-sm font-semibold text-brand-blue underline underline-offset-4 dark:text-brand-sand">
                  {hobby.linkLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
