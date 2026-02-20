import { Code2, Layers, Network, Database, Cpu, GitBranch } from "lucide-react";
import type { ReactNode } from "react";

interface FrameworkItem {
  icon: ReactNode;
  name: string;
  description: string;
  tags: string[];
}

const frameworks: FrameworkItem[] = [
  {
    icon: <Code2 className="w-7 h-7" />,
    name: "OpenClaw",
    description:
      "Our primary framework for building robust, production-ready AI agents with advanced tool-use, planning, and multi-step reasoning capabilities.",
    tags: ["Tool Use", "Planning", "Multi-Step Reasoning", "Production-Ready"],
  },
  {
    icon: <Network className="w-7 h-7" />,
    name: "Google ADK",
    description:
      "Leverage Google's Agent Development Kit for seamless integration with Gemini models, Vertex AI, and the entire Google Cloud ecosystem.",
    tags: ["Gemini", "Vertex AI", "Google Cloud", "Grounding"],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    name: "LangChain",
    description:
      "The industry-standard framework for composable LLM applications — chains, agents, memory, and retrieval all in one modular toolkit.",
    tags: ["Chains", "Agents", "Memory", "Retrieval"],
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    name: "LangGraph",
    description:
      "Build stateful, multi-actor agent workflows as graphs. Ideal for complex orchestration with cycles, branching, and human-in-the-loop patterns.",
    tags: ["Stateful Graphs", "Multi-Actor", "Human-in-the-Loop", "Cycles"],
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    name: "CrewAI",
    description:
      "Orchestrate teams of specialized AI agents that collaborate autonomously — each with defined roles, goals, and tools.",
    tags: ["Multi-Agent Teams", "Role-Based", "Autonomous", "Collaboration"],
  },
  {
    icon: <Database className="w-7 h-7" />,
    name: "RAG Pipelines",
    description:
      "Custom Retrieval-Augmented Generation architectures that ground every response in your proprietary data for accuracy and trust.",
    tags: ["Vector Search", "Hybrid Retrieval", "Embeddings", "Knowledge Bases"],
  },
];

export default function Frameworks() {
  return (
    <section id="frameworks" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Tech Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Frameworks & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We specialize in the most powerful agent frameworks available,
            selecting the right tool for each use case to deliver maximum
            performance and reliability.
          </p>
        </div>

        {/* Framework cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="card-hover group relative p-8 rounded-2xl border border-gray-800 bg-[var(--background)]"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                {fw.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{fw.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {fw.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {fw.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            We also work with{" "}
            <span className="text-gray-300">AutoGen</span>,{" "}
            <span className="text-gray-300">Semantic Kernel</span>,{" "}
            <span className="text-gray-300">Haystack</span>,{" "}
            <span className="text-gray-300">LlamaIndex</span>, and other
            emerging frameworks based on your project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
