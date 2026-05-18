import type { Metadata } from 'next';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';

export const metadata: Metadata = {
  title: 'Professional Journey',
  description: 'A timeline of Chethan Puttegowda’s professional journey across analytics leadership, financial crimes, model validation, AI, and enterprise systems.'
};

const journey = [
  {
    year: '2026',
    period: 'Current focus',
    organization: 'Independent work / Chethan Puttegowda',
    team: 'AI leadership, analytics transformation, knowledge systems',
    designation: 'Technology leader, AI practitioner, systems thinker',
    title: 'AI leadership, analytics transformation, and intelligent systems',
    context: 'My current focus is on responsible AI adoption, enterprise intelligence systems, workflow orchestration, knowledge systems, and practical frameworks for modern work.',
    details: [
      'Exploring how AI can improve enterprise workflows without weakening governance or accountability.',
      'Designing reusable patterns for context, knowledge, analytics, and human-in-the-loop execution.',
      'Writing and building in public to make the thinking more useful for colleagues and collaborators.'
    ]
  },
  {
    year: '2021',
    period: 'Regional leadership',
    organization: 'Citi',
    team: 'Independent Validation — Bangalore, Pune, Kuala Lumpur',
    designation: 'APAC Regional Lead',
    title: 'Regional analytics and model validation leadership',
    context: 'Managed regional teams validating AML scenarios, KYC risk scoring tools, predictive models, and financial-crimes analytics capabilities.',
    details: [
      'Led statisticians and analytics professionals across multiple locations.',
      'Worked across anti-money laundering, transaction monitoring, KYC, sanctions, watch-list, risk rating methodology, and model validation.',
      'Strengthened the discipline of independent review, explainability, traceability, and governance.'
    ]
  },
  {
    year: 'Pre-2021',
    period: 'Transformation scale',
    organization: 'Bank of America',
    team: 'Financial Crimes and Operational Analytics',
    designation: 'Analytics Delivery Head',
    title: 'Financial crimes and operational analytics delivery',
    context: 'Led large-scale analytics transformation in financial crimes and operational risk, moving manual risk monitoring toward technology-managed analytics programs.',
    details: [
      'Built and led multi-location analytics teams with delivery ownership and stakeholder accountability.',
      'Supported major AML, model risk, operational risk, and compliance-focused initiatives.',
      'Focused on repeatable execution, governance, data quality, controls, and measurable business impact.'
    ]
  },
  {
    year: 'Early career',
    period: 'Analytics foundation',
    organization: 'HSBC',
    team: 'Wealth Management, customer acquisition, and strategic analytics',
    designation: 'Analytics and strategic initiatives leader',
    title: 'Analytics, risk, and customer intelligence',
    context: 'Built a strong base in applied analytics across customer acquisition, wealth management, segmentation, sales forecasting, dashboards, and risk-oriented decision systems.',
    details: [
      'Worked on analytics initiatives spanning wealth products, customer engagement, and business growth.',
      'Developed a practical understanding of how data products must connect technical output with business adoption.',
      'Learned to balance modeling, measurement, stakeholder communication, and operational usefulness.'
    ]
  }
];

export default function JourneyPage() {
  return (
    <>
      <HomeBack />
      <PageBanner
        tone="journey"
        eyebrow="Professional Journey"
        title="A career shaped by analytics, governance, leadership, and practical AI systems"
        description="My journey has moved from analytics delivery to transformation leadership, model governance, and now AI-enabled enterprise systems. The consistent thread is building capabilities that are useful, accountable, and trusted."
      />
      <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-brand-copper/25 bg-white/70 p-5 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <p className="text-sm font-semibold text-brand-navy dark:text-white">Timeline</p>
              <div className="mt-5 space-y-1 border-l border-brand-copper/40 pl-4 dark:border-ink-700">
                {journey.map((item) => (
                  <a key={item.period} href={`#${item.period.toLowerCase().replaceAll(' ', '-')}`} className="block rounded-xl px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-sand hover:text-brand-navy focus:bg-brand-navy focus:text-white dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white">
                    <span className="block font-semibold text-brand-blue dark:text-brand-sand">{item.year}</span>
                    {item.organization}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            {journey.map((item) => (
              <article key={item.period} id={item.period.toLowerCase().replaceAll(' ', '-')} className="scroll-mt-28 rounded-3xl border border-brand-copper/25 bg-white/75 p-7 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-sand">
                  <span>{item.year}</span>
                  <span>·</span>
                  <span>{item.period}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">{item.title}</h2>
                <div className="mt-5 rounded-2xl border border-brand-copper/20 bg-brand-sand/50 p-5 dark:border-ink-800 dark:bg-ink-950/40">
                  <dl className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">Organization</dt>
                      <dd className="mt-1 font-semibold text-brand-navy dark:text-white">{item.organization}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">Team</dt>
                      <dd className="mt-1 font-semibold text-brand-navy dark:text-white">{item.team}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">Designation</dt>
                      <dd className="mt-1 font-semibold text-brand-navy dark:text-white">{item.designation}</dd>
                    </div>
                  </dl>
                </div>
                <p className="mt-5 text-lg leading-8 text-ink-700 dark:text-ink-300">{item.context}</p>
                <ul className="mt-5 space-y-3 text-ink-700 dark:text-ink-300">
                  {item.details.map((detail) => <li key={detail}>— {detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
