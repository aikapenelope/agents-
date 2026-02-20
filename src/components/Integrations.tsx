import {
  MessageCircle,
  Send,
  Hash,
  Mail,
  Calendar,
  FileSpreadsheet,
  HardDrive,
  Video,
  Phone,
  Globe,
  Database,
  ShoppingCart,
  Headphones,
  BarChart3,
  Users,
  Webhook,
  Plug,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";

interface Integration {
  icon: ReactNode;
  name: string;
}

interface IntegrationCategory {
  title: string;
  description: string;
  integrations: Integration[];
}

const categories: IntegrationCategory[] = [
  {
    title: "Messaging & Communication",
    description: "Deploy agents across every channel your customers use.",
    integrations: [
      { icon: <MessageCircle className="w-5 h-5" />, name: "WhatsApp" },
      { icon: <Send className="w-5 h-5" />, name: "Telegram" },
      { icon: <Hash className="w-5 h-5" />, name: "Discord" },
      { icon: <Hash className="w-5 h-5" />, name: "Slack" },
      { icon: <MessageCircle className="w-5 h-5" />, name: "Microsoft Teams" },
      { icon: <MessageCircle className="w-5 h-5" />, name: "Facebook Messenger" },
      { icon: <MessageCircle className="w-5 h-5" />, name: "Instagram DM" },
      { icon: <MessageCircle className="w-5 h-5" />, name: "LINE" },
      { icon: <MessageCircle className="w-5 h-5" />, name: "WeChat" },
      { icon: <Phone className="w-5 h-5" />, name: "Twilio (SMS/Voice)" },
      { icon: <Phone className="w-5 h-5" />, name: "Vonage" },
      { icon: <Globe className="w-5 h-5" />, name: "Web Chat Widget" },
    ],
  },
  {
    title: "Google Workspace",
    description: "Deep integration with the entire Google productivity suite.",
    integrations: [
      { icon: <Mail className="w-5 h-5" />, name: "Gmail" },
      { icon: <Calendar className="w-5 h-5" />, name: "Google Calendar" },
      { icon: <HardDrive className="w-5 h-5" />, name: "Google Drive" },
      { icon: <FileSpreadsheet className="w-5 h-5" />, name: "Google Sheets" },
      { icon: <FileSpreadsheet className="w-5 h-5" />, name: "Google Docs" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "Google Slides" },
      { icon: <Video className="w-5 h-5" />, name: "Google Meet" },
      { icon: <Database className="w-5 h-5" />, name: "Google Forms" },
      { icon: <Globe className="w-5 h-5" />, name: "Google Analytics" },
      { icon: <Database className="w-5 h-5" />, name: "BigQuery" },
      { icon: <Globe className="w-5 h-5" />, name: "Google Ads" },
      { icon: <Database className="w-5 h-5" />, name: "Firebase" },
    ],
  },
  {
    title: "CRM & Sales",
    description: "Connect agents to your revenue engine.",
    integrations: [
      { icon: <Users className="w-5 h-5" />, name: "Salesforce" },
      { icon: <Users className="w-5 h-5" />, name: "HubSpot" },
      { icon: <Users className="w-5 h-5" />, name: "Pipedrive" },
      { icon: <Users className="w-5 h-5" />, name: "Zoho CRM" },
      { icon: <ShoppingCart className="w-5 h-5" />, name: "Stripe" },
      { icon: <ShoppingCart className="w-5 h-5" />, name: "Shopify" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "Monday.com" },
      { icon: <Users className="w-5 h-5" />, name: "Close CRM" },
    ],
  },
  {
    title: "Productivity & Project Management",
    description: "Agents that work where your team works.",
    integrations: [
      { icon: <FileSpreadsheet className="w-5 h-5" />, name: "Notion" },
      { icon: <FileSpreadsheet className="w-5 h-5" />, name: "Airtable" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "Jira" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "Asana" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "Trello" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "ClickUp" },
      { icon: <BarChart3 className="w-5 h-5" />, name: "Linear" },
      { icon: <FileSpreadsheet className="w-5 h-5" />, name: "Confluence" },
    ],
  },
  {
    title: "Customer Support",
    description: "Supercharge your support stack with AI agents.",
    integrations: [
      { icon: <Headphones className="w-5 h-5" />, name: "Zendesk" },
      { icon: <Headphones className="w-5 h-5" />, name: "Intercom" },
      { icon: <Headphones className="w-5 h-5" />, name: "Freshdesk" },
      { icon: <Headphones className="w-5 h-5" />, name: "ServiceNow" },
      { icon: <Headphones className="w-5 h-5" />, name: "Help Scout" },
      { icon: <Headphones className="w-5 h-5" />, name: "LiveChat" },
      { icon: <Headphones className="w-5 h-5" />, name: "Crisp" },
      { icon: <Headphones className="w-5 h-5" />, name: "Drift" },
    ],
  },
  {
    title: "Data, DevOps & Automation",
    description: "Connect to your data layer and automate everything.",
    integrations: [
      { icon: <Database className="w-5 h-5" />, name: "PostgreSQL" },
      { icon: <Database className="w-5 h-5" />, name: "MongoDB" },
      { icon: <Database className="w-5 h-5" />, name: "Supabase" },
      { icon: <Database className="w-5 h-5" />, name: "Pinecone" },
      { icon: <Database className="w-5 h-5" />, name: "Weaviate" },
      { icon: <Database className="w-5 h-5" />, name: "Qdrant" },
      { icon: <Webhook className="w-5 h-5" />, name: "Zapier" },
      { icon: <Webhook className="w-5 h-5" />, name: "Make (Integromat)" },
      { icon: <Webhook className="w-5 h-5" />, name: "n8n" },
      { icon: <Plug className="w-5 h-5" />, name: "REST APIs" },
      { icon: <Plug className="w-5 h-5" />, name: "GraphQL" },
      { icon: <Plug className="w-5 h-5" />, name: "Webhooks" },
    ],
  },
];

export default function Integrations() {
  const totalIntegrations = categories.reduce(
    (sum, cat) => sum + cat.integrations.length,
    0
  );

  return (
    <section id="integrations" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Integrations
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
            {totalIntegrations}+ Integrations &{" "}
            <span className="gradient-text">Growing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your AI agents connect seamlessly to the tools your team already
            uses — from messaging platforms to CRMs, databases, and everything
            in between.
          </p>
        </div>

        {/* Integration categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--background)]"
            >
              <h3 className="text-lg font-bold mb-1">{category.title}</h3>
              <p className="text-gray-500 text-sm mb-5">
                {category.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[var(--surface)] border border-gray-800 hover:border-indigo-500/30 transition-colors"
                  >
                    <span className="text-indigo-400 shrink-0">
                      {integration.icon}
                    </span>
                    <span className="text-sm text-gray-300 truncate">
                      {integration.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Don&apos;t see your tool?{" "}
            <span className="text-white font-medium">
              We build custom integrations.
            </span>
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            Talk to us about your stack
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
