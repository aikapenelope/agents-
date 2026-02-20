import { Sparkles } from "lucide-react";

interface ModelProvider {
  name: string;
  models: string[];
  tier: "flagship" | "standard";
}

const providers: ModelProvider[] = [
  {
    name: "OpenAI",
    models: ["GPT-4o", "GPT-4 Turbo", "GPT-o1", "GPT-o3", "Whisper", "DALL-E 3"],
    tier: "flagship",
  },
  {
    name: "Anthropic",
    models: ["Claude 4 Opus", "Claude 4 Sonnet", "Claude 3.5 Haiku"],
    tier: "flagship",
  },
  {
    name: "Google",
    models: ["Gemini 2.5 Pro", "Gemini 2.5 Flash", "Gemini Ultra", "PaLM 2"],
    tier: "flagship",
  },
  {
    name: "Meta",
    models: ["Llama 4 Maverick", "Llama 4 Scout", "Llama 3.3 70B", "Llama 3.1 405B"],
    tier: "flagship",
  },
  {
    name: "Groq",
    models: ["LPU Inference", "Ultra-Low Latency", "Llama on Groq", "Mixtral on Groq"],
    tier: "standard",
  },
  {
    name: "DeepSeek",
    models: ["DeepSeek-V3", "DeepSeek-R1", "DeepSeek Coder V2"],
    tier: "standard",
  },
  {
    name: "Kimi (Moonshot)",
    models: ["Kimi k2", "Kimi 128K Context", "Moonshot v1"],
    tier: "standard",
  },
  {
    name: "GLM (Zhipu AI)",
    models: ["GLM-4", "GLM-4V", "CogView", "CodeGeeX"],
    tier: "standard",
  },
  {
    name: "Mistral AI",
    models: ["Mistral Large", "Mistral Medium", "Mixtral 8x22B", "Codestral"],
    tier: "standard",
  },
  {
    name: "Cohere",
    models: ["Command R+", "Command R", "Embed v3", "Rerank 3"],
    tier: "standard",
  },
  {
    name: "xAI",
    models: ["Grok-2", "Grok-2 Mini"],
    tier: "standard",
  },
  {
    name: "Perplexity",
    models: ["Sonar Large", "Sonar Small", "Online Search Models"],
    tier: "standard",
  },
];

export default function Models() {
  const flagshipProviders = providers.filter((p) => p.tier === "flagship");
  const standardProviders = providers.filter((p) => p.tier === "standard");

  return (
    <section id="models" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Model Agnostic
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Every Leading AI Model at Your Disposal
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are model-agnostic by design. Your agents leverage the best model
            for each task — whether it&apos;s reasoning, speed, cost, or
            multimodal capabilities.
          </p>
        </div>

        {/* Flagship providers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {flagshipProviders.map((provider) => (
            <div
              key={provider.name}
              className="card-hover group relative p-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{provider.name}</h3>
                  <span className="text-xs text-indigo-400 font-medium">
                    Flagship Partner
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {provider.models.map((model) => (
                  <span
                    key={model}
                    className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Standard providers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {standardProviders.map((provider) => (
            <div
              key={provider.name}
              className="card-hover group p-5 rounded-xl border border-gray-800 bg-[var(--surface)]"
            >
              <h3 className="font-semibold mb-3">{provider.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {provider.models.map((model) => (
                  <span
                    key={model}
                    className="px-2 py-0.5 text-xs rounded bg-gray-800 text-gray-400"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center p-6 rounded-xl border border-gray-800 bg-[var(--surface)]">
          <p className="text-gray-400 text-sm">
            <span className="text-white font-medium">
              Need a model not listed?
            </span>{" "}
            We integrate with any LLM provider via API — including self-hosted
            open-source models, fine-tuned models, and private deployments on
            your own infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
