import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { Section } from '@/components/section';

export const metadata: Metadata = { title: 'About', description: 'Professional narrative, personal values, expertise, leadership areas, and current mission.' };

const expertise = ['Technology Leadership', 'Enterprise AI', 'Analytics Transformation', 'Workflow Architecture', 'Governance Systems', 'Knowledge Platforms', 'Product Thinking', 'Context Engineering'];

const passions = [
  {
    title: 'Natural farming at SiriBhoomi',
    summary:
      'SiriBhoomi keeps me connected to patience, observation, soil, food, and long-term systems thinking.',
    story:
      'The farm is listed on Google Maps as SiriBhoomi Organic Farm in Chibukahalli, Karnataka 571617. I think of it as a natural farm and a living classroom: a place to learn from soil, seasons, water, biodiversity, and the discipline of growing without forcing. It reflects the same belief I bring to technology work — durable systems are cultivated, observed, improved, and trusted over time.',
    link: 'https://maps.app.goo.gl/5siHVkXdPcaBcJKt6?g_st=ac'
  },
  {
    title: 'Teaching AI and technology to kids',
    summary:
      'I want children to see AI and technology as tools they can understand, question, shape, and use responsibly.',
    story:
      'Teaching kids keeps the work honest. The goal is not to make technology feel magical or intimidating, but to make it understandable: how ideas become prototypes, how data becomes answers, how AI needs judgment, and how young builders can use these tools with curiosity, care, and confidence.',
    link: ''
  }
];

const stack = {
  'Leadership & strategy': ['platform strategy', 'technology roadmaps', 'stakeholder alignment', 'adoption design'],
  'AI & orchestration': ['LLM applications', 'agent workflows', 'RAG patterns', 'evaluation', 'guardrails'],
  'Data & analytics': ['semantic layers', 'BI modernization', 'metrics design', 'data products'],
  'Delivery craft': ['Next.js', 'TypeScript', 'Python', 'APIs', 'cloud-native delivery']
};

export default function AboutPage() {
  return (
    <>
      <HomeBack />
      <PageBanner
        tone="about"
        eyebrow="About"
        title="I build systems, write to clarify thinking, and stay grounded in practical outcomes"
        description="I work at the intersection of technology leadership, AI architecture, analytics transformation, workflow design, and enterprise governance."
      />
      <section className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:py-16 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="prose prose-ink max-w-prose dark:prose-invert">
          <p>I care about systems that survive contact with real organizations: constraints, accountability, data quality, adoption friction, and measurable outcomes.</p>
          <p>This website is where I share the work, notes, frameworks, and personal commitments that shape my professional journey. My AI work is an important part of that story, but it is not the whole story. I am interested in how technology, people, learning, and responsibility come together over time.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-brand-copper/25 bg-white/70 shadow-lg shadow-brand-navy/10 dark:border-ink-800 dark:bg-ink-900/40">
          <div className="relative aspect-[4/5]">
            <Image src="/images/chethan-formal.jpg" alt="Chethan Puttegowda in formal attire" fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover object-center" />
          </div>
          <div className="border-t border-brand-copper/20 bg-brand-sand/70 p-5 text-sm leading-6 text-ink-700 dark:border-ink-800 dark:bg-ink-900/80 dark:text-ink-300">
            Technology, analytics, AI, governance, education, and grounded systems thinking.
          </div>
        </div>
      </section>
      <Section eyebrow="Journey" title="Career journey">
        <div className="space-y-5">
          {['Analytics modernization and data product foundations', 'Enterprise workflow and reporting transformation', 'Responsible AI systems and intelligent orchestration'].map((item, index) => (
            <div key={item} className="rounded-2xl border border-brand-copper/20 bg-white/60 p-6 dark:border-ink-800 dark:bg-ink-900/40">
              <p className="font-mono text-sm text-brand-blue dark:text-brand-sand">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-brand-navy dark:text-white">{item}</h3>
              <p className="mt-3 text-ink-700 dark:text-ink-300">A phase focused on building reusable capabilities, improving decision systems, and aligning technical delivery with enterprise operating models.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Expertise" title="Areas of expertise">
        <div className="flex flex-wrap gap-3">{expertise.map((item) => <span key={item} className="rounded-full border border-brand-copper/25 bg-white/60 px-4 py-2 text-brand-navy dark:border-ink-800 dark:bg-ink-900/40 dark:text-ink-100">{item}</span>)}</div>
      </Section>
      <Section eyebrow="Beyond work" title="The interests that keep the work grounded" description="I want the site to feel professional, but also human. These commitments influence how I think about responsibility, growth, education, and long-term systems.">
        <div className="grid gap-5 md:grid-cols-2">
          {passions.map((passion) => (
            <div key={passion.title} className="rounded-3xl border border-brand-copper/25 bg-white/70 p-7 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <h3 className="text-2xl font-semibold text-brand-navy dark:text-white">{passion.title}</h3>
              <p className="mt-4 text-lg leading-8 text-ink-800 dark:text-ink-200">{passion.summary}</p>
              <p className="mt-4 leading-7 text-ink-700 dark:text-ink-300">{passion.story}</p>
              {passion.link ? (
                <Link href={passion.link} className="mt-6 inline-flex text-sm font-semibold text-brand-blue underline underline-offset-4 dark:text-brand-sand">
                  View SiriBhoomi Organic Farm on Google Maps
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Capabilities" title="Technical stack and leadership areas">
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-brand-copper/20 bg-white/60 p-6 dark:border-ink-800 dark:bg-ink-900/40">
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white">{group}</h3>
              <ul className="mt-4 space-y-2 text-ink-700 dark:text-ink-300">{items.map((item) => <li key={item}>— {item}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Mission" title="What I am building toward">
        <div className="rounded-3xl border border-brand-copper/25 bg-brand-sand/70 p-8 dark:border-ink-800 dark:bg-ink-900/40">
          <p className="max-w-3xl text-xl leading-9 text-ink-800 dark:text-ink-200">I want to build a credible, useful, and evolving body of work around technology leadership, practical AI, analytics transformation, responsible systems, and personal learning.</p>
          <Link href="/journey" className="mt-6 inline-flex rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue dark:bg-brand-sand dark:text-ink-950">View Professional Journey</Link>
        </div>
      </Section>
    </>
  );
}
