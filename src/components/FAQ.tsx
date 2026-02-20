"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of AI agents do you build?",
    answer:
      "We build everything from single-purpose chatbots to complex multi-agent systems. This includes customer support agents, sales automation agents, internal workflow agents, data analysis agents, content generation agents, and custom agents for any business process. Each agent is tailored to your specific use case and integrated with your existing tools.",
  },
  {
    question: "How long does it take to build and deploy an agent?",
    answer:
      "A typical single-agent project takes 2-4 weeks from kickoff to production. Multi-agent systems with complex integrations usually take 4-8 weeks. We work in agile sprints with weekly demos so you see progress from day one. Enterprise-scale deployments with custom dashboards and extensive integrations may take 8-12 weeks.",
  },
  {
    question: "Which AI models do you support?",
    answer:
      "We are fully model-agnostic. We work with OpenAI (GPT-4o, o1, o3), Anthropic (Claude 4), Google (Gemini 2.5), Meta (Llama 4), Groq, DeepSeek, Kimi, GLM, Mistral, Cohere, xAI, and more. We select the optimal model for each task based on performance, cost, latency, and your specific requirements. We also support self-hosted and fine-tuned models.",
  },
  {
    question: "What is RAG and why do I need it?",
    answer:
      "RAG (Retrieval-Augmented Generation) grounds your AI agents in your proprietary data — documents, databases, knowledge bases, and more. Without RAG, agents rely only on their training data and can hallucinate. With RAG, every response is backed by your actual business data, dramatically improving accuracy and trust.",
  },
  {
    question: "Can you integrate with our existing tools and systems?",
    answer:
      "Absolutely. We integrate with 60+ platforms out of the box including WhatsApp, Telegram, Discord, Slack, Microsoft Teams, the entire Google Workspace suite, Salesforce, HubSpot, Zendesk, Jira, and many more. We also build custom integrations via REST APIs, GraphQL, and webhooks for any system you use.",
  },
  {
    question: "Do we own the code and intellectual property?",
    answer:
      "Yes, 100%. All source code, configurations, trained models, and documentation are yours. We deliver everything in a private Git repository with full documentation. You are never locked into our platform — though most clients choose our maintenance plans for ongoing optimization.",
  },
  {
    question: "What does the maintenance plan include?",
    answer:
      "Our maintenance plans include 24/7 uptime monitoring, model retraining and prompt optimization, performance analytics and reporting, integration updates, security patches, and priority support. We proactively identify and resolve issues before they impact your operations.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security is built into every layer. We offer data encryption at rest and in transit, role-based access control, audit logging, SOC 2 compliance, GDPR compliance, and private cloud or on-premise deployment options. We never use your data to train third-party models without explicit consent.",
  },
  {
    question: "Can I manage agents from a custom dashboard?",
    answer:
      "Yes. Every Professional and Enterprise plan includes a custom-branded dashboard where you can monitor agent activity in real-time, review conversations, manage knowledge bases, track KPIs, control access, and configure agent behavior — all without touching code.",
  },
  {
    question: "What frameworks do you specialize in?",
    answer:
      "Our core specializations are OpenClaw, Google ADK, and LangChain/LangGraph. We also work extensively with CrewAI for multi-agent orchestration, and we build custom RAG pipelines using vector databases like Pinecone, Weaviate, and Qdrant. We select the right framework based on your specific requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-800 bg-[var(--surface)] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
