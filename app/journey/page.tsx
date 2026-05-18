import type { Metadata } from 'next';
import { HomeBack } from '@/components/home-back';
import { Icon } from '@/components/icons';
import { PageBanner } from '@/components/page-banner';

export const metadata: Metadata = {
  title: 'Professional Journey',
  description: 'A timeline of Chethan Puttegowda’s professional journey across analytics leadership, financial crimes, remediation analytics, AI transformation, and independent systems work.'
};

const journey = [
  {
    period: 'Early career',
    years: 'Foundation',
    organization: 'HSBC and Target',
    role: 'Analytics and business technology foundation',
    context: 'Built the early foundation in analytics, business problem solving, delivery discipline, and stakeholder-centered execution.',
    details: [
      'Developed a practical understanding of how analytics work must connect to real business decisions.',
      'Built habits around execution quality, communication, measurement, and operational usefulness.',
      'Established the base for later leadership across financial services, risk, analytics, and transformation.'
    ]
  },
  {
    period: '2012 to 2018',
    years: '2012–2018',
    organization: 'Bank of America',
    role: 'Analytics delivery and transformation',
    context: 'Worked on large-scale analytics and operational transformation in a highly governed enterprise environment.',
    details: [
      'Strengthened experience in analytics delivery, controls, operational rigor, and business impact.',
      'Contributed to repeatable execution models across complex stakeholder and data environments.',
      'Deepened financial-services domain experience across analytics, risk, and transformation work.'
    ]
  },
  {
    period: '2018 to 2021',
    years: '2018–2021',
    organization: 'Citi — Anti Money Laundering',
    role: 'AML analytics and financial-crimes focus',
    context: 'Focused on anti-money-laundering analytics, financial-crimes risk monitoring, control discipline, and governance-oriented execution.',
    details: [
      'Worked in a domain where explainability, traceability, and control quality matter deeply.',
      'Built stronger judgment around risk analytics, data reliability, and accountable decision systems.',
      'Connected analytical delivery with operational and regulatory expectations.'
    ]
  },
  {
    period: '2021 to 2024',
    years: '2021–2024',
    organization: 'Citi',
    role: 'Remediation Data Analytics leader',
    context: 'Led remediation data analytics work with focus on data quality, governance, measurement, stakeholder trust, and scalable execution.',
    details: [
      'Led analytics work where business decisions depended on data quality, consistency, and clear interpretation.',
      'Focused on remediation execution, operating cadence, stakeholder alignment, and governance needs.',
      'Built reusable ways to turn complex data into trusted business understanding.'
    ]
  },
  {
    period: '2024 to Now',
    years: '2024–Now',
    organization: 'Citi',
    role: 'Remediation Business Analytics leader',
    context: 'Leading business analytics for remediation, connecting analytics execution with business outcomes, governance needs, and operating decisions.',
    details: [
      'Bridging analytical depth with business-facing interpretation and action.',
      'Helping teams reason through performance, quality, remediation progress, and decision tradeoffs.',
      'Continuing to strengthen the operating model around analytics, trust, and execution.'
    ]
  },
  {
    period: '2025 to Now',
    years: '2025–Now',
    organization: 'Citi AI Transformation workgroup',
    role: 'AI transformation contributor',
    context: 'Contributing to AI transformation work, practical use cases, responsible adoption, and the enterprise operating model needed for AI-enabled execution.',
    details: [
      'Contributing to AI transformation from the lens of analytics, governance, workflows, and real enterprise adoption.',
      'Focusing on practical AI use cases that improve work without weakening accountability.',
      'Exploring how AI can become a responsible capability layer across business and analytics workflows.'
    ]
  },
  {
    period: '2024 to Now',
    years: '2024–Now',
    organization: 'Independent work',
    role: 'Systems, frameworks, experimentation, and AI community contribution',
    context: 'Developing independent systems, frameworks, experiments, and public thinking that contribute to practical AI learning and community knowledge.',
    details: [
      'Building systems and frameworks to clarify how AI, analytics, knowledge, and human review can work together.',
      'Experimenting with practical implementations and documenting lessons for reuse.',
      'Contributing to AI community learning through thoughts, prototypes, and applied systems thinking.'
    ]
  }
];

function anchorFor(value: string) {
  return value.toLowerCase().replaceAll(' ', '-').replaceAll('—', '').replaceAll('–', '-');
}

export default function JourneyPage() {
  return (
    <>
      <HomeBack />
      <PageBanner
        tone="journey"
        eyebrow="Professional Journey"
        title="A career shaped by analytics, remediation leadership, governance, and practical AI transformation"
        description="The timeline connects my formal enterprise roles with independent systems work, experimentation, and contributions to the AI community."
      />
      <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-brand-copper/25 bg-white/75 p-5 shadow-lg shadow-brand-navy/10 backdrop-blur dark:border-ink-800 dark:bg-ink-900/45">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy dark:text-white"><Icon name="briefcase" className="h-4 w-4" /> Timeline</p>
              <div className="mt-5 space-y-1 border-l border-brand-copper/40 pl-4 dark:border-ink-700">
                {journey.map((item) => (
                  <a key={`${item.years}-${item.organization}`} href={`#${anchorFor(item.period)}`} className="block rounded-xl px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-sand hover:text-brand-navy focus:bg-brand-navy focus:text-white dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white">
                    <span className="block font-semibold text-brand-blue dark:text-brand-sand">{item.years}</span>
                    {item.organization}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="relative space-y-6 before:absolute before:bottom-8 before:left-4 before:top-8 before:w-px before:bg-brand-copper/35 dark:before:bg-ink-700 sm:before:left-5">
            {journey.map((item, index) => (
              <article key={`${item.years}-${item.role}`} id={anchorFor(item.period)} className="relative scroll-mt-28 rounded-3xl border border-brand-copper/25 bg-white/80 p-7 pl-14 shadow-sm shadow-ink-900/5 transition duration-300 hover:-translate-y-1 hover:border-brand-copper/55 hover:shadow-xl hover:shadow-brand-navy/10 dark:border-ink-800 dark:bg-ink-900/45 sm:pl-16">
                <span className="absolute left-[3px] top-8 grid h-8 w-8 place-items-center rounded-full border border-brand-copper/35 bg-brand-sand text-sm font-bold text-brand-navy shadow-sm dark:border-ink-700 dark:bg-ink-950 dark:text-brand-sand sm:left-1">{index + 1}</span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-sand">
                  <span>{item.years}</span>
                  <span>·</span>
                  <span>{item.organization}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">{item.role}</h2>
                <p className="mt-5 text-lg leading-8 text-ink-700 dark:text-ink-300">{item.context}</p>
                <ul className="mt-5 space-y-3 text-ink-700 dark:text-ink-300">
                  {item.details.map((detail) => <li key={detail} className="flex gap-3"><Icon name="spark" className="mt-1 h-4 w-4 shrink-0 text-brand-copper" /> <span>{detail}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
