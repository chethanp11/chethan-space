import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = { title: 'About', description: 'Professional narrative, expertise, leadership areas, and current mission.' };

const expertise = ['Enterprise AI', 'Analytics Transformation', 'Agentic Systems', 'Workflow Architecture', 'Governance Systems', 'Knowledge Platforms', 'Context Engineering'];
const stack = {
  'AI & orchestration': ['LLM applications', 'agent workflows', 'RAG patterns', 'evaluation', 'guardrails'],
  'Data & analytics': ['semantic layers', 'BI modernization', 'metrics design', 'data products'],
  'Platforms': ['Next.js', 'TypeScript', 'Python', 'APIs', 'cloud-native delivery'],
  'Operating model': ['governance', 'adoption strategy', 'roadmaps', 'stakeholder enablement']
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title="Strategic operator for enterprise AI and analytics modernization." description="I focus on turning fragmented data, tools, workflows, and AI capabilities into governed systems that teams can trust and reuse.">
        <div className="prose prose-ink max-w-prose dark:prose-invert">
          <p>My work sits at the intersection of AI architecture, analytics transformation, workflow design, and enterprise governance. I care about systems that survive contact with real organizations: constraints, accountability, data quality, adoption friction, and measurable outcomes.</p>
          <p>This site is a living resume and technical publishing system for the frameworks, projects, and ideas shaping that work.</p>
        </div>
      </Section>
      <Section eyebrow="Journey" title="Career journey">
        <div className="space-y-5">
          {['Analytics modernization and data product foundations', 'Enterprise workflow and reporting transformation', 'Governance-first AI systems and intelligent orchestration'].map((item, index) => (
            <div key={item} className="rounded-2xl border border-ink-200 p-6 dark:border-ink-800">
              <p className="font-mono text-sm text-ink-500">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-950 dark:text-white">{item}</h3>
              <p className="mt-3 text-ink-600 dark:text-ink-300">A phase focused on building reusable capabilities, improving decision systems, and aligning technical delivery with enterprise operating models.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Expertise" title="Areas of expertise">
        <div className="flex flex-wrap gap-3">{expertise.map((item) => <span key={item} className="rounded-full border border-ink-200 px-4 py-2 dark:border-ink-800">{item}</span>)}</div>
      </Section>
      <Section eyebrow="Capabilities" title="Technical stack and leadership areas">
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-ink-200 p-6 dark:border-ink-800">
              <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{group}</h3>
              <ul className="mt-4 space-y-2 text-ink-600 dark:text-ink-300">{items.map((item) => <li key={item}>— {item}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Mission" title="Current mission">
        <div className="rounded-3xl border border-ink-200 bg-ink-50 p-8 dark:border-ink-800 dark:bg-ink-900/40">
          <p className="max-w-3xl text-xl leading-9 text-ink-700 dark:text-ink-200">Build and document practical enterprise AI architectures that are modular, auditable, context-aware, and useful for real business execution.</p>
          <Link href={siteConfig.links.resume} className="mt-6 inline-flex rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-950">Download Resume</Link>
        </div>
      </Section>
    </>
  );
}
