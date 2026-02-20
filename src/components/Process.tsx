import {
  Search,
  PenTool,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";
import type { ReactNode } from "react";

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Strategy",
    description:
      "We audit your workflows, identify high-impact automation opportunities, and define the agent architecture that fits your business.",
    deliverables: [
      "Use-case prioritization matrix",
      "Technical feasibility report",
      "ROI projection & timeline",
    ],
  },
  {
    number: "02",
    icon: <PenTool className="w-6 h-6" />,
    title: "Design & Architecture",
    description:
      "Our engineers design the agent system — selecting models, frameworks, data sources, and integration points tailored to your stack.",
    deliverables: [
      "System architecture diagram",
      "Data flow & security plan",
      "Integration specification",
    ],
  },
  {
    number: "03",
    icon: <Code2 className="w-6 h-6" />,
    title: "Build & Iterate",
    description:
      "Agile development with weekly demos. We build your agents, RAG pipelines, dashboards, and integrations in rapid sprints.",
    deliverables: [
      "Working agent prototypes",
      "Custom dashboard & controls",
      "Integration testing suite",
    ],
  },
  {
    number: "04",
    icon: <Rocket className="w-6 h-6" />,
    title: "Deploy & Launch",
    description:
      "Production deployment with zero-downtime rollout, monitoring setup, and team onboarding to ensure a smooth launch.",
    deliverables: [
      "Production deployment",
      "Monitoring & alerting setup",
      "Team training & documentation",
    ],
  },
  {
    number: "05",
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Maintain & Evolve",
    description:
      "Continuous optimization — we monitor performance, retrain models, update integrations, and evolve your agents as your business grows.",
    deliverables: [
      "24/7 monitoring & SLA",
      "Monthly performance reports",
      "Ongoing model optimization",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            From Idea to Production in Weeks
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our battle-tested process takes you from initial concept to
            fully-deployed, maintained AI agents — with full transparency at
            every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8 group">
                {/* Step indicator */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all z-10">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-indigo-500 font-mono text-sm font-bold">
                      STEP {step.number}
                    </span>
                    {/* Mobile icon */}
                    <div className="md:hidden w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--surface)] border border-gray-800 text-gray-300"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
