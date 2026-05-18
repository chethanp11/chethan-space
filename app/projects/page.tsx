import type { Metadata } from 'next';
import { ContentCard } from '@/components/cards';
import { ContentIndex } from '@/components/content-index';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Projects', description: 'Selected projects, frameworks, systems, and experiments from Chethan Puttegowda.' };

const projectSections = [
  { href: '#systems', label: 'Systems' },
  { href: '#frameworks', label: 'Frameworks' },
  { href: '#lab', label: 'Lab' }
];

export default function ProjectsPage() {
  const frameworks = getCollection('frameworks');
  const lab = getCollection('lab');

  return <>
    <HomeBack />
    <PageBanner
      tone="projects"
      eyebrow="Projects"
      title="Projects, frameworks, and experiments"
      description="A single place for the systems I build, the frameworks I use to explain my thinking, and the experiments that help me learn in public."
    >
      <div className="flex flex-wrap gap-2">
        {projectSections.map((section) => (
          <a key={section.href} href={section.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-brand-copper/30 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-100 dark:hover:bg-brand-sand dark:hover:text-ink-950">
            {section.label}
          </a>
        ))}
      </div>
    </PageBanner>

    <section id="systems" className="scroll-mt-28 mx-auto max-w-content px-5 py-14">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">Systems</p>
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy dark:text-white">Selected systems and project archive</h2>
      </div>
      <ContentIndex items={getCollection('projects')} basePath="/projects" />
    </section>

    <section id="frameworks" className="scroll-mt-28 mx-auto max-w-content px-5 py-14">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">Frameworks</p>
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy dark:text-white">Reusable ways of thinking</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-300">Practical frameworks, operating models, product strategy notes, and whitepaper-style summaries.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{frameworks.map((item) => <ContentCard key={item.slug} item={item} href="#frameworks" />)}</div>
    </section>

    <section id="lab" className="scroll-mt-28 mx-auto max-w-content px-5 py-14">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">Lab</p>
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy dark:text-white">Experiments and learning in public</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-300">Prototypes, MVPs, visual demos, small tools, and exploratory ideas before they become polished work.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{lab.map((item) => <ContentCard key={item.slug} item={item} href="#lab" />)}</div>
    </section>
  </>;
}
