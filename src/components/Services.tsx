import {
  Bot,
  Wrench,
  LayoutDashboard,
  BrainCircuit,
  Shield,
  Rocket,
} from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="card-hover group relative p-8 rounded-2xl border border-gray-800 bg-[var(--surface)] hover:bg-[var(--surface-light)]">
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-5 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-gray-400"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Custom Agent Development",
    description:
      "End-to-end design and development of AI agents tailored to your business workflows, from single-purpose bots to complex multi-agent systems.",
    features: [
      "Multi-agent orchestration & collaboration",
      "Conversational AI with memory & context",
      "Task automation & decision-making agents",
      "Voice, text, and multimodal interfaces",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Agent Maintenance & Optimization",
    description:
      "Continuous monitoring, fine-tuning, and evolution of your deployed agents to ensure peak performance and reliability.",
    features: [
      "24/7 uptime monitoring & alerting",
      "Model retraining & prompt optimization",
      "Performance analytics & reporting",
      "Version management & rollback",
    ],
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Custom Dashboards & Control Panels",
    description:
      "Bespoke management interfaces that give your team full visibility and control over every agent in your fleet.",
    features: [
      "Real-time agent activity monitoring",
      "Conversation analytics & insights",
      "User management & access control",
      "Custom KPI tracking & reporting",
    ],
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "RAG Pipeline Engineering",
    description:
      "Design and implementation of Retrieval-Augmented Generation pipelines that ground your agents in your proprietary data.",
    features: [
      "Vector database setup & optimization",
      "Document ingestion & chunking strategies",
      "Hybrid search (semantic + keyword)",
      "Knowledge base management tools",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security & Compliance",
    description:
      "Hardened agent deployments that meet the strictest enterprise security and regulatory requirements.",
    features: [
      "Data encryption at rest & in transit",
      "Role-based access control (RBAC)",
      "Audit logging & compliance reporting",
      "Private cloud & on-premise deployment",
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Strategy & Consulting",
    description:
      "Expert guidance to identify high-impact AI agent use cases and build a roadmap for autonomous operations.",
    features: [
      "AI readiness assessment",
      "Use case identification & prioritization",
      "Architecture design & tech selection",
      "Team training & knowledge transfer",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Enterprise AI Agent Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From initial strategy to ongoing maintenance, we cover every stage
            of the AI agent lifecycle so you can focus on what matters — your
            business.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
