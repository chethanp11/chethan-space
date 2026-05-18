import Image from 'next/image';
import Link from 'next/link';
import { ContentCard } from '@/components/cards';
import { Section } from '@/components/section';
import { getFeatured } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const focusAreas = [
  'Technology leadership and platform thinking',
  'Enterprise AI and analytics modernization',
  'Knowledge systems and workflow design',
  'Governance, trust, and responsible adoption',
  'Natural farming and grounded systems learning',
  'Technology education for young builders'
];

const principles = [
  ['Build with purpose', 'Technology should clarify work, improve decisions, and respect the people who depend on it.'],
  ['Think in systems', 'Durable outcomes come from understanding relationships between people, process, data, tools, and incentives.'],
  ['Stay grounded', 'The best professional work remains connected to real-world responsibility, learning, and community.'],
  ['Make knowledge reusable', 'Writing, frameworks, and projects should compound into assets others can learn from and apply.']
];

export default function HomePage() {
  const projects = getFeatured('projects', 3);
  const insights = getFeatured('insights', 3);

  return (
    <>
      <section className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1fr_400px] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue dark:text-brand-sand">Technology · Leadership · AI · Analytics · Systems</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-brand-navy dark:text-white sm:text-6xl lg:text-7xl">
            I build practical technology systems and write about the thinking behind them.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-ink-700 dark:text-ink-300">
            I work at the intersection of enterprise AI, analytics transformation, workflow architecture, and responsible systems. This is where I share my work, my writing, and the ideas that shape how I build.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue dark:bg-brand-sand dark:text-ink-950" href="/projects">Explore Work</Link>
            <Link className="rounded-full border border-brand-copper/50 bg-white/60 px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-copper dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-100" href="/insights">Read Writing</Link>
            <Link className="rounded-full border border-ink-300 bg-white/60 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-100" href={siteConfig.links.resume}>View Resume</Link>
            <Link className="rounded-full border border-ink-300 bg-white/60 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-100" href={siteConfig.links.linkedin}>LinkedIn</Link>
            <Link className="rounded-full border border-ink-300 bg-white/60 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-100" href={siteConfig.links.github}>GitHub</Link>
          </div>
        </div>
        <aside className="overflow-hidden rounded-[2rem] border border-brand-copper/25 bg-white/75 shadow-xl shadow-brand-navy/10 backdrop-blur dark:border-ink-800 dark:bg-ink-900/50">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/chethan-portrait.jpg"
              alt="Chethan P"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="border-t border-brand-copper/20 bg-brand-sand/70 p-6 dark:border-ink-800 dark:bg-ink-900/80">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue dark:text-brand-sand">Chethan P</p>
            <p className="mt-2 text-2xl font-semibold text-brand-navy dark:text-white">Technology leader, AI practitioner, systems thinker</p>
            <p className="mt-4 text-sm leading-6 text-ink-700 dark:text-ink-300">I care about useful systems, clear execution, responsible AI, and work that remains grounded beyond the screen.</p>
          </div>
        </aside>
      </section>

      <Section eyebrow="Current Focus" title="What I am focused on now" description="My work spans professional systems, practical AI adoption, knowledge workflows, writing, and learning that stays connected to the real world.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => <div key={area} className="rounded-2xl border border-brand-copper/20 bg-white/60 p-5 text-lg font-medium text-brand-navy dark:border-ink-800 dark:bg-ink-900/40 dark:text-white">{area}</div>)}
        </div>
      </Section>

      <Section eyebrow="Selected Work" title="Projects and systems" description="A portfolio of serious work: AI platforms, analytics products, knowledge systems, workflow patterns, and practical experiments.">
        <div className="grid gap-5 md:grid-cols-3">{projects.map((item) => <ContentCard key={item.slug} item={item} href={`/projects/${item.slug}`} />)}</div>
      </Section>

      <Section eyebrow="Writing" title="Latest notes and insights" description="Professional writing on technology, leadership, enterprise AI, analytics, governance, systems thinking, and practical execution.">
        <div className="grid gap-5 md:grid-cols-3">{insights.map((item) => <ContentCard key={item.slug} item={item} href={`/insights/${item.slug}`} />)}</div>
      </Section>

      <Section eyebrow="Principles" title="What guides the work">
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-brand-copper/20 bg-white/60 p-6 dark:border-ink-800 dark:bg-ink-900/40">
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-ink-700 dark:text-ink-300">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
