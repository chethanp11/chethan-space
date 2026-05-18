import Image from 'next/image';
import Link from 'next/link';
import { ContentCard } from '@/components/cards';
import { Icon, type IconName } from '@/components/icons';
import { Section } from '@/components/section';
import { getFeatured } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const focusAreas: Array<{ title: string; body: string; icon: IconName; href: string }> = [
  {
    title: 'Enterprise AI transformation',
    body: 'Practical adoption patterns that connect use cases, controls, workflows, and measurable business outcomes.',
    icon: 'ai',
    href: '/insights/ai-transformation-is-operating-model-work'
  },
  {
    title: 'Analytics and decision systems',
    body: 'Trusted metrics, remediation analytics, dashboards, and platforms that improve judgment and execution.',
    icon: 'analytics',
    href: '/projects'
  },
  {
    title: 'Governance and knowledge systems',
    body: 'Responsible AI, context engineering, human review, and reusable knowledge foundations for serious work.',
    icon: 'governance',
    href: '/insights/governance-first-ai'
  }
];

const impactStats = [
  ['17+', 'years across analytics, AML, remediation, and transformation'],
  ['$300M', 'penalty exposure avoided through major AML MRA execution'],
  ['35 FTE', 'multi-location financial-crimes analytics delivery team built']
];

const principles: Array<[string, string, IconName]> = [
  ['Build with purpose', 'Technology should clarify work, improve decisions, and respect the people who depend on it.', 'spark'],
  ['Think in systems', 'Durable outcomes come from understanding relationships between people, process, data, tools, and incentives.', 'systems'],
  ['Stay grounded', 'The best professional work remains connected to real-world responsibility, learning, and community.', 'farm'],
  ['Make knowledge reusable', 'Thoughts, frameworks, and projects should compound into assets others can learn from and apply.', 'analytics'],
];

export default function HomePage() {
  const projects = getFeatured('projects', 3);
  const insights = getFeatured('insights', 3);

  return (
    <>
      <section className="relative mx-auto grid max-w-content gap-12 overflow-hidden px-5 py-20 sm:py-28 lg:grid-cols-[400px_1fr] lg:items-center">
        <div className="absolute right-8 top-10 -z-10 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 -z-10 h-72 w-72 rounded-full bg-brand-copper/10 blur-3xl" />
        <aside className="group overflow-hidden rounded-[2rem] border border-brand-copper/25 bg-white/75 shadow-xl shadow-brand-navy/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-navy/15">
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
        <div>
          <div className="mb-6 rounded-[2rem] border border-brand-copper/20 bg-white/55 p-6 shadow-sm shadow-brand-navy/5 backdrop-blur">
            <h1 className="text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">Chethan Puttegowda</h1>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-copper/25 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue shadow-sm shadow-ink-900/5">
              <Icon name="spark" className="h-4 w-4" />
              AI Leadership · Analytics · Governance · Systems
            </p>
          </div>
          <div className="grid gap-8 divide-y divide-brand-copper/20">
            <div className="space-y-4 py-8">
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-brand-navy">Vision</h2>
              <p className="text-lg leading-8 text-ink-700">
                Build practical, responsible AI and analytics systems that help enterprises make better decisions, strengthen trust, and turn complex work into clear, executable outcomes.
              </p>
            </div>
            <div className="space-y-4 py-8">
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-brand-navy">Mission</h2>
              <p className="text-lg leading-8 text-ink-700">
                Use my experience across delivery, AML, remediation, analytics, and AI transformation to create reusable frameworks, share practical lessons, and help teams adopt intelligent systems with discipline, governance, and human accountability.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-navy" href="/projects">Explore Work <Icon name="arrow" className="h-4 w-4" /></Link>
            <Link className="rounded-full border border-brand-copper/50 bg-white/70 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-sky" href="/insights">Read Thoughts</Link>
            <Link className="rounded-full border border-ink-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-navy" href="/journey">Professional Journey</Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-navy" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" className="h-4 w-4" /> LinkedIn</Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-navy" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" className="h-4 w-4" /> GitHub</Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {impactStats.map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-brand-copper/20 bg-white/70 p-4 shadow-sm shadow-ink-900/5">
                <p className="text-2xl font-semibold text-brand-blue">{value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Current Focus" title="Where my work is focused" description="The work is broader than AI alone, but AI leadership is an important thread: how intelligent systems, analytics, governance, people, and execution come together responsibly.">
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <Link key={area.title} href={area.href} className="group rounded-3xl border border-brand-copper/20 bg-white/70 p-5 text-brand-navy shadow-sm shadow-ink-900/5 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-brand-sky/70 hover:shadow-lg hover:shadow-brand-navy/10">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-brand-sand text-brand-navy transition group-hover:bg-white"><Icon name={area.icon} /></span>
              <span className="block text-lg font-semibold">{area.title}</span>
              <span className="mt-3 block text-sm leading-6 text-ink-700">{area.body}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">More <Icon name="arrow" className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected Work" title="Projects and systems" description="A portfolio of serious work: AI platforms, analytics products, knowledge systems, workflow patterns, and practical experiments.">
        <div className="grid gap-5 md:grid-cols-3">{projects.map((item) => <ContentCard key={item.slug} item={item} href={`/projects/${item.slug}`} />)}</div>
        <div className="mt-8"><Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-brand-copper/30 bg-white/70 px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky">More projects <Icon name="arrow" className="h-4 w-4" /></Link></div>
      </Section>

      <Section eyebrow="Thoughts" title="Latest notes and insights" description="Professional thoughts on technology, leadership, enterprise AI, analytics, governance, systems thinking, and practical execution.">
        <div className="grid gap-5 md:grid-cols-3">{insights.map((item) => <ContentCard key={item.slug} item={item} href={`/insights/${item.slug}`} />)}</div>
        <div className="mt-8"><Link href="/insights" className="inline-flex items-center gap-2 rounded-full border border-brand-copper/30 bg-white/70 px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky">More thoughts <Icon name="arrow" className="h-4 w-4" /></Link></div>
      </Section>

      <Section eyebrow="Principles" title="What guides the work">
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map(([title, body, icon]) => (
            <div key={title} className="rounded-2xl border border-brand-copper/20 bg-white/60 p-6 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-brand-sand text-brand-navy dark:bg-ink-950 dark:text-brand-sand"><Icon name={icon} className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-ink-700 dark:text-ink-300">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><Link href="/journey" className="inline-flex items-center gap-2 rounded-full border border-brand-copper/30 bg-white/70 px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky">More about the journey <Icon name="arrow" className="h-4 w-4" /></Link></div>
      </Section>
    </>
  );
}
