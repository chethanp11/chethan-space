import Link from 'next/link';
import { ContentCard } from '@/components/cards';
import { Section } from '@/components/section';
import { getFeatured } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const focusAreas = [
  'Agentic AI platforms',
  'Knowledge systems',
  'Workflow orchestration',
  'Context engineering',
  'Governance-first architectures',
  'Enterprise intelligence systems'
];

const principles = [
  ['Governance in execution', 'Control, auditability, and traceability should be designed into AI workflows from the first iteration.'],
  ['Modular capability design', 'Useful AI systems are composed from reusable capabilities, not one-off demos.'],
  ['Enterprise realism', 'Architecture must account for adoption friction, data quality, accountability, and operational constraints.'],
  ['Intelligence orchestration', 'The durable value is in how models, data, tools, context, and humans coordinate.']
];

export default function HomePage() {
  const projects = getFeatured('projects', 3);
  const insights = getFeatured('insights', 3);

  return (
    <>
      <section className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-ink-500 dark:text-ink-400">Enterprise AI · Analytics Transformation · Governance</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-ink-950 dark:text-white sm:text-6xl lg:text-7xl">
            Chethan builds governance-first AI and analytics systems for enterprise execution.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-ink-600 dark:text-ink-300">
            Enterprise AI systems architect focused on agentic workflows, knowledge platforms, intelligent orchestration, and analytics modernization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-950" href="/projects">Explore Projects</Link>
            <Link className="rounded-full border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:text-ink-100" href="/insights">Read Insights</Link>
            <Link className="rounded-full border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:text-ink-100" href={siteConfig.links.resume}>View Resume</Link>
            <Link className="rounded-full border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:text-ink-100" href={siteConfig.links.linkedin}>LinkedIn</Link>
            <Link className="rounded-full border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:text-ink-100" href={siteConfig.links.github}>GitHub</Link>
          </div>
        </div>
        <div className="rounded-3xl border border-ink-200 bg-ink-50 p-7 dark:border-ink-800 dark:bg-ink-900/50">
          <div className="mb-6 h-28 w-28 rounded-2xl border border-ink-300 bg-white p-4 dark:border-ink-700 dark:bg-ink-950">
            <div className="grid h-full grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, index) => <span key={index} className="rounded bg-ink-900 dark:bg-ink-100" />)}
            </div>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Current role</p>
          <p className="mt-2 text-2xl font-semibold text-ink-950 dark:text-white">Enterprise AI & Analytics Transformation Leader</p>
          <div className="mt-6 grid gap-3 text-sm text-ink-600 dark:text-ink-300">
            <p>Architecting systems that connect models, context, workflows, controls, and business outcomes.</p>
            <p>Publishing architecture memos and implementation patterns for serious AI adoption.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Current Focus" title="Building enterprise intelligence systems with durable foundations.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => <div key={area} className="rounded-2xl border border-ink-200 p-5 text-lg font-medium dark:border-ink-800">{area}</div>)}
        </div>
      </Section>

      <Section eyebrow="Evidence" title="Featured projects" description="Systems, products, and frameworks that demonstrate architecture thinking and execution discipline.">
        <div className="grid gap-5 md:grid-cols-3">{projects.map((item) => <ContentCard key={item.slug} item={item} href={`/projects/${item.slug}`} />)}</div>
      </Section>

      <Section eyebrow="Writing" title="Latest insights" description="Architecture memos and implementation notes on enterprise AI, governance, context, and analytics transformation.">
        <div className="grid gap-5 md:grid-cols-3">{insights.map((item) => <ContentCard key={item.slug} item={item} href={`/insights/${item.slug}`} />)}</div>
      </Section>

      <Section eyebrow="Principles" title="How I think about intelligent systems.">
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-ink-200 p-6 dark:border-ink-800">
              <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-ink-600 dark:text-ink-300">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
