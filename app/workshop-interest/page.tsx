import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { WorkshopInterest } from '@/components/workshop-interest';

export default function WorkshopInterestPage() {
  return (
    <>
      <HomeBack href="/beyond-work" label="Back to Beyond Work" />
      <PageBanner
        tone="beyond"
        eyebrow="10-Week Workshop"
        title="Build with Codex and practical AI tools"
        description="A hands-on mentorship program for young builders who want to learn how to use AI to design, prototype, and deliver real projects."
      />

      <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <div className="rounded-3xl border border-brand-copper/25 bg-white/80 p-8 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">What this program is about</h2>
              <p className="mt-4 text-lg leading-8 text-ink-700 dark:text-ink-300">
                This 10-week workshop is designed to help young builders learn how to use AI tools like Codex in a practical way. Participants will move from idea discovery to working prototype, learning prompt strategy, collaborative coding, and responsible AI habits along the way.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-brand-copper/25 bg-white/80 p-8 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">Week-by-week curriculum</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 1</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">AI tools, Codex fundamentals, and prompt strategy.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 2</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Idea discovery, use case selection, and project scope.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 3</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Collaborating with Codex for code structure and scaffolding.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 4</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Designing prototype architecture and wireframes.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 5</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Building interactive features and AI-assisted workflows.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 6</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Testing, debugging, and iterative refinement.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 7</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">UX, data handling, and responsible AI guardrails.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 8</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Integrations, automation, and workflow polish.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 9</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Demo preparation, storytelling, and presentation skills.</p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-sand/50 p-4">
                  <p className="font-semibold text-brand-blue">Week 10</p>
                  <p className="mt-2 text-ink-700 dark:text-ink-300">Launch-ready delivery, feedback, and next steps.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-brand-copper/25 bg-white/80 p-8 shadow-sm shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900/40">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy dark:text-white">Prerequisites</h2>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-ink-700 dark:text-ink-300">
                <li>Curiosity about AI, coding, and how tools like Codex can speed development.</li>
                <li>Basic familiarity with programming concepts or willingness to learn through practice.</li>
                <li>A desire to build real projects, not just read about them.</li>
                <li>Commitment to weekly sessions and follow-up project work.</li>
              </ul>
            </div>

            <div className="mt-8">
              <WorkshopInterest />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
