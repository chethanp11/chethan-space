import type { Metadata } from 'next';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { createPageMetadata } from '@/lib/content-metadata';

export const metadata: Metadata = createPageMetadata(
  'Beyond Work',
  'The interests and commitments that keep Chethan Puttegowda grounded beyond professional work.',
  '/beyond-work'
);

const hobbies = [
  {
    title: 'Natural farming at SiriBhoomi',
    summary: 'A living classroom for patience, observation, soil, seasons, food, biodiversity, and long-term thinking.',
    detail: 'SiriBhoomi keeps me close to the reality that meaningful systems are cultivated. The lessons from natural farming — observe carefully, intervene thoughtfully, respect constraints, and improve over time — also influence how I think about technology and organizations.',
    link: 'https://maps.app.goo.gl/5siHVkXdPcaBcJKt6?g_st=ac',
    linkLabel: 'View SiriBhoomi Organic Farm'
  },
  {
    title: 'Mentoring Young Builders',
    summary: 'Helping young learners see technology as something they can understand, question, build with, and use responsibly.',
    detail: 'I coach young makers through a structured 10-week workshop that uses AI tools like Codex to build real projects. The plan covers idea discovery, prompt design, code collaboration, prototype development, testing, iteration, and presentation so participants can confidently create with AI and learn the discipline behind responsible tool use.',
    link: '/workshop-interest',
    linkLabel: 'Know about the 10-week workshop'
  },
  {
    title: 'Thoughts and learning in public',
    summary: 'Turning work, reading, experiments, and reflections into notes that can compound over time.',
    detail: 'Sharing thoughts helps me clarify what I believe, test ideas, and make my thinking useful to others. This website is intended to become a steady record of that learning.',
    link: '/insights',
    linkLabel: 'Read my thoughts'
  }
];

export default function BeyondWorkPage() {
  return (
    <>
      <HomeBack />
      <PageBanner tone="beyond" eyebrow="Beyond Work" title="The interests that keep my work grounded" description="Professional work is only one part of the story. Farming, teaching, thoughts, and learning shape how I think about patience, responsibility, systems, and long-term impact." />
      <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <article key={hobby.title} className="rounded-3xl border border-brand-copper/25 bg-white/75 p-7 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">{hobby.title}</h2>
              <p className="mt-4 text-lg leading-8 text-ink-800 dark:text-ink-200">{hobby.summary}</p>
              {hobby.detail ? <p className="mt-4 leading-7 text-ink-700 dark:text-ink-300">{hobby.detail}</p> : null}
              {hobby.link ? (
                <a href={hobby.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-lg px-2 py-1 text-sm font-semibold text-brand-blue underline underline-offset-4 transition hover:bg-brand-sky hover:text-brand-navy dark:text-brand-sand dark:hover:bg-brand-sky/20 dark:hover:text-white">
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
