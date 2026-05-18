import Image from 'next/image';
import Link from 'next/link';
import { ContentCard } from '@/components/cards';
import { Icon, type IconName } from '@/components/icons';
import { Section } from '@/components/section';
import { getFeatured } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const focusAreas: Array<{ title: string; icon: IconName }> = [
  { title: 'Technology leadership and platform thinking', icon: 'briefcase' },
  { title: 'Enterprise AI and analytics modernization', icon: 'ai' },
  { title: 'Knowledge systems and workflow design', icon: 'systems' },
  { title: 'Governance, trust, and responsible adoption', icon: 'governance' }
];

const principles: Array<[string, string, IconName]> = [
  ['Build with purpose', 'Technology should clarify work, improve decisions, and respect the people who depend on it.', 'spark'],
  ['Think in systems', 'Durable outcomes come from understanding relationships between people, process, data, tools, and incentives.', 'systems'],
  ['Stay grounded', 'The best professional work remains connected to real-world responsibility, learning, and community.', 'farm'],
  ['Make knowledge reusable', 'Writing, frameworks, and projects should compound into assets others can learn from and apply.', 'analytics']
];

export default function HomePage() {
  const projects = getFeatured('projects', 3);
  const insights = getFeatured('insights', 3);

  return (
    <>
      <section className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1fr_400px] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-copper/25 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue shadow-sm shadow-ink-900/5">
            <Icon name="spark" className="h-4 w-4" />
            AI Leadership · Analytics · Governance · Systems
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-brand-navy sm:text-5xl lg:text-6xl">
            I help shape practical AI, analytics, and technology systems for serious enterprise work.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-ink-700">
            My work sits at the intersection of AI leadership, analytics transformation, governance, workflow architecture, and enterprise execution. I use this space to share the systems I build, the lessons I learn, and the thinking behind my professional journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-blue" href="/projects" target="_blank" rel="noopener noreferrer">Explore Work <Icon name="arrow" className="h-4 w-4" /></Link>
            <Link className="rounded-full border border-brand-copper/50 bg-white/70 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5 hover:border-brand-copper" href="/insights" target="_blank" rel="noopener noreferrer">Read Writing</Link>
            <Link className="rounded-full border border-ink-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5" href="/journey" target="_blank" rel="noopener noreferrer">Professional Journey</Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" className="h-4 w-4" /> LinkedIn</Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" className="h-4 w-4" /> GitHub</Link>
          </div>
        </div>
        <aside className="overflow-hidden rounded-[2rem] border border-brand-copper/25 bg-white/75 shadow-xl shadow-brand-navy/10 backdrop-blur">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/chethan-portrait.jpg"
              alt="Chethan Puttegowda"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="border-t border-brand-copper/20 bg-brand-sand/70 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">Chethan Puttegowda</p>
            <p className="mt-2 text-2xl font-semibold text-brand-navy">Technology leader, AI practitioner, systems thinker</p>
            <p className="mt-4 text-sm leading-6 text-ink-700">I care about AI that is useful, analytics that drives judgment, and systems that remain accountable in real operating environments.</p>
          </div>
        </aside>
      </section>

      <Section eyebrow="Current Focus" title="Where my work is focused" description="The work is broader than AI alone, but AI leadership is an important thread: how intelligent systems, analytics, governance, people, and execution come together responsibly.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-3xl border border-brand-copper/20 bg-white/70 p-5 text-lg font-medium text-brand-navy shadow-sm shadow-ink-900/5 transition hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-lg hover:shadow-brand-navy/10">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-brand-sand text-brand-navy"><Icon name={area.icon} /></span>
              {area.title}
            </div>
          ))}
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
          {principles.map(([title, body, icon]) => (
            <div key={title} className="rounded-2xl border border-brand-copper/20 bg-white/60 p-6 dark:border-ink-800 dark:bg-ink-900/40">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-brand-sand text-brand-navy dark:bg-ink-950 dark:text-brand-sand"><Icon name={icon} className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-ink-700 dark:text-ink-300">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
