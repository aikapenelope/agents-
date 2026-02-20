import { Check, ArrowRight, Star } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  highlighted: boolean;
  features: string[];
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description:
      "Perfect for teams exploring AI agents with a focused, single-use-case deployment.",
    price: "$4,900",
    priceNote: "one-time + $490/mo maintenance",
    highlighted: false,
    features: [
      "1 custom AI agent",
      "Up to 3 integrations",
      "Basic RAG pipeline",
      "Standard dashboard",
      "Email support (48h SLA)",
      "Monthly performance report",
      "1 model provider included",
      "Up to 10,000 interactions/mo",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description:
      "For growing businesses that need multi-agent systems with advanced integrations and analytics.",
    price: "$14,900",
    priceNote: "one-time + $1,490/mo maintenance",
    highlighted: true,
    features: [
      "Up to 5 AI agents",
      "Up to 15 integrations",
      "Advanced RAG with hybrid search",
      "Custom branded dashboard",
      "Priority support (12h SLA)",
      "Weekly performance reports",
      "Multi-model orchestration",
      "Up to 100,000 interactions/mo",
      "WhatsApp, Slack & Discord channels",
      "Google Workspace integration",
      "Human-in-the-loop workflows",
      "A/B testing & prompt optimization",
    ],
    cta: "Start Your Project",
  },
  {
    name: "Enterprise",
    description:
      "Full-scale AI agent infrastructure with unlimited capacity, dedicated support, and custom SLAs.",
    price: "Custom",
    priceNote: "tailored to your requirements",
    highlighted: false,
    features: [
      "Unlimited AI agents",
      "Unlimited integrations",
      "Enterprise RAG architecture",
      "Fully custom dashboard & controls",
      "Dedicated account manager",
      "24/7 support (1h SLA)",
      "All model providers included",
      "Unlimited interactions",
      "All messaging channels",
      "Full Google Workspace suite",
      "Multi-agent collaboration systems",
      "On-premise / private cloud deployment",
      "SOC 2 & GDPR compliance",
      "Custom training & onboarding",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every plan includes development, deployment, and ongoing
            maintenance. Pick the tier that matches your scale — or talk to us
            for a custom solution.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-indigo-500/50 bg-indigo-500/5 glow"
                  : "border-gray-800 bg-[var(--background)]"
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    <Star className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{tier.priceNote}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                  tier.highlighted
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25"
                    : "border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        tier.highlighted ? "text-indigo-400" : "text-gray-600"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All plans include source code ownership, deployment documentation,
            and a 30-day post-launch warranty.{" "}
            <a
              href="#contact"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
            >
              Need something custom?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
