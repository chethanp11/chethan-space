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
    period: '2024 to Now AI Community Contributions',
    years: '2024–Now',
    organization: 'AI Community Contributions',
    role: 'Independent AI systems, frameworks, experimentation, and community contribution',
    context: 'Developing practical AI systems, reusable frameworks, experiments, and public thinking that help others understand how AI, analytics, knowledge, and human review can work together responsibly.',
    details: [
      'Building independent systems and frameworks around practical AI adoption, knowledge workflows, governance, and analytics transformation.',
      'Publishing applied thoughts and prototypes that translate enterprise analytics, AML, remediation, and AI transformation experience into reusable learning.',
      'Contributing to AI community learning through hands-on examples, responsible tool-use patterns, and systems thinking.'
    ]
  },
  {
    period: '2025 to Now',
    years: '2025–Now',
    organization: 'Citi AI Transformation workgroup',
    role: 'AI transformation contributor',
    context: 'Contributing to enterprise AI transformation with focus on practical use cases, responsible adoption, workflow design, and governance-aware operating models.',
    details: [
      'Contributing to AI transformation from the lens of analytics leadership, governance, workflow design, and enterprise adoption.',
      'Helping identify practical AI use cases that improve work while preserving accountability, traceability, and review discipline.',
      'Connecting AI adoption with data quality, stakeholder engagement, change management, and scalable operating practices.'
    ]
  },
  {
    period: '2024 to Now',
    years: '2024–Now',
    organization: 'Citi Business Analysis',
    role: 'Remediation Business Analytics leader',
    context: 'Leading business analytics for remediation by connecting analytics execution, operating cadence, data interpretation, governance needs, and business decisions.',
    details: [
      'Translate complex remediation data into business-facing insights, decisions, performance measures, and action-oriented narratives.',
      'Strengthen stakeholder trust through clear metric definitions, issue visibility, quality interpretation, and repeatable operating rhythm.',
      'Apply change management, stakeholder engagement, resource planning, implementation discipline, and stabilization practices to analytics transformation work.'
    ]
  },
  {
    period: '2021 to 2024',
    years: '2021–2024',
    organization: 'CITI Remediation data Analytics',
    role: 'Remediation Data Analytics leader',
    context: 'Led remediation data analytics with focus on data quality, governance, measurement discipline, stakeholder trust, and scalable analytics execution.',
    details: [
      'Built trusted analytics approaches where business decisions depended on data quality, consistency, lineage, and clear interpretation.',
      'Applied data quality and governance discipline to remediation execution, measurement, and stakeholder reporting.',
      'Drove analytics transformation through structured delivery, operating cadence, stakeholder engagement, implementation, and stabilization.'
    ]
  },
  {
    period: '2018 to 2021',
    years: '2018–2021',
    organization: 'Citi — Anti Money Laundering',
    role: 'Regional Lead — AML Model Validation',
    context: 'Served as APAC Regional Lead managing Independent Validation for AML scenarios, KYC risk scoring tools, and predictive models across multiple locations.',
    details: [
      'Managed an Independent Validation team of 15 FTE statisticians across Bangalore, Pune, and Kuala Lumpur.',
      'Validated AML scenarios, KYC risk scoring tools, and predictive models with focus on explainability, traceability, and governance.',
      'Worked across Anti-Money Laundering, Model Validation, Transaction Monitoring, KYC, Watch-list, Sanctions, Risk Rating Methodology, and Compliance Testing.'
    ]
  },
  {
    period: '2012 to 2018',
    years: '2012–2018',
    organization: 'TCS - Bank of America',
    role: 'Delivery Head — Financial Crimes and AML Transformation',
    context: 'Led Financial Crimes and Operational Analytics delivery for Bank of America, transforming manual risk monitoring into an analytics-driven, technology-managed AML application program.',
    details: [
      'Set up a diverse 35 FTE team of risk managers, analysts, developers, and validators to transform manual Risk Monitoring through threshold analysis, validation, and implementation.',
      'Managed transformation within an $8 million budget and built a multi-location delivery model for Financial Crimes and Operational Analytics.',
      'Headed end-to-end execution for 3 major AML MRA projects covering OCC 11-12, 12 CFR Part 30, and 12 CFR 21.11, avoiding penalty exposure of approximately $300 million.'
    ]
  },
  {
    period: 'Early career',
    years: 'Foundation',
    organization: 'HSBC and Target',
    role: 'Analytics and business technology foundation',
    context: 'Built the foundation in analytics, business problem solving, customer intelligence, delivery discipline, and stakeholder-centered execution.',
    details: [
      'Drove HSBC strategic initiatives across Wealth Management, Customer Acquisition, and Cross/Up Selling wealth products to 2.4 million HNI customers.',
      'Contributed to initiatives that drove $360 million in incremental sales through customer analytics and wealth management focus.',
      'Built experience across customer acquisition, product propensity modelling, sales forecasting, wealth dashboards, market segmentation, clustering, and visual KPI dashboards.'
    ]
  }
];

function anchorFor(value: string) {
  return value.toLowerCase().replaceAll(' ', '-').replaceAll('—', '').replaceAll('–', '-');
}


const keyHighlights = [
  { value: '17+', label: 'Years of industry experience' },
  { value: '35 FTE', label: 'Multi-location analytics delivery team built at Bank of America' },
  { value: '$8M', label: 'Transformation delivery budget managed for risk monitoring modernization' },
  { value: '~$300M', label: 'Penalty exposure avoided through major AML MRA execution' }
];

const credentialsSections = [
  {
    title: 'Education',
    items: [
      'Master of Business Administration with specialisation in Finance, Christ College, Bangalore University, 2009.'
    ]
  },
  {
    title: 'Certifications',
    items: [
      'Certified SCRUM Master, SCRUM Alliance, 2017.',
      'Web Intelligence and Big Data, IIIT - Coursera, 2017.',
      'Certified Statistical Business Analyst Using SAS 9 – Regression and Modelling, SAS Institute, 2016.',
      'Practical Machine Learning, Johns Hopkins University - Coursera, 2015.',
      'Certified Advanced SAS Programmer for SAS 9, SAS Institute, 2013.',
      'Certified Base SAS Programmer for SAS 9, SAS Institute, 2013.',
      'NCFM: Derivatives Market, Capital Market, and Debt Market, NSE Academy, 2008.'
    ]
  },
  {
    title: 'Patents and publications',
    items: [
      'Patent filed on IBM Early Warning System tool for corporate risk exposure, 2017, TCSL.',
      'Patent filed on integrated AML tool for cognitive detection and visualization, 2017, TCSL.',
      'Presented white paper on “Big Data – Predictive Analytics using SAS”, 2013, TCSL.',
      'Academic thesis on “Comparative Analysis of Mutual Fund Schemes”, 2008, Christ College.'
    ]
  },
  {
    title: 'Awards',
    items: [
      'Received award by Executive Director for successful execution of 12 CFR – Part 30 Audit deliverable - TCS.',
      'Received annual award for AML tool for cognitive detection and visualization - TCS.',
      'Received SVP Award for end-to-end automation of forecast variance process - Target.',
      'Awarded university merit scholarship for best academic performance.'
    ]
  },
  {
    title: 'Affiliations',
    items: [
      'Member of Association of Mutual Funds of India (AMFI).',
      'Certified member of Insurance Regulatory Development Authority (IRDA).'
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
        title="A career shaped by analytics, remediation leadership, governance, and practical AI transformation"
        description="The timeline starts with current AI community contributions and connects them with enterprise roles across analytics, AML, remediation, governance, and transformation."
      />
      <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keyHighlights.map((highlight) => (
            <div key={highlight.label} className="rounded-3xl border border-brand-copper/20 bg-white/80 p-5 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/45">
              <p className="text-3xl font-semibold tracking-tight text-brand-blue">{highlight.value}</p>
              <p className="mt-2 text-sm leading-6 text-ink-700 dark:text-ink-300">{highlight.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-brand-copper/25 bg-white/75 p-5 shadow-lg shadow-brand-navy/10 backdrop-blur dark:border-ink-800 dark:bg-ink-900/45">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy dark:text-white"><Icon name="briefcase" className="h-4 w-4" /> Timeline</p>
              <div className="mt-5 space-y-1 border-l border-brand-copper/40 pl-4 dark:border-ink-700">
                {journey.map((item) => (
                  <a key={`${item.years}-${item.organization}`} href={`#${anchorFor(item.period)}`} className="block rounded-xl px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-sky hover:text-brand-navy focus:bg-brand-sky focus:text-brand-navy dark:text-ink-300 dark:hover:bg-brand-sky/20 dark:hover:text-white">
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

        <div className="mt-14">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">Beyond the timeline</p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-navy dark:text-white">Education, certifications, patents and publications, awards, and affiliations</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {credentialsSections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-brand-copper/20 bg-white/75 p-6 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/45">
                <h3 className="text-xl font-semibold text-brand-navy dark:text-white">{section.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-700 dark:text-ink-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3"><Icon name="spark" className="mt-1 h-4 w-4 shrink-0 text-brand-blue" /> <span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
