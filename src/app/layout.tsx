import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Standart Agents | Enterprise AI Agent Development & Maintenance",
  description:
    "We build, deploy, and maintain enterprise-grade AI agents powered by OpenClaw, Google ADK, LangChain, and more. Custom dashboards, RAG pipelines, and 50+ integrations including WhatsApp, Slack, Discord, and Google Workspace.",
  keywords: [
    "AI agents",
    "enterprise AI",
    "LangChain",
    "Google ADK",
    "OpenClaw",
    "RAG",
    "AI development",
    "AI maintenance",
    "custom AI dashboards",
    "WhatsApp AI",
    "Slack AI",
    "Discord AI",
  ],
  openGraph: {
    title: "Standart Agents | Enterprise AI Agent Development",
    description:
      "Enterprise-grade AI agents built with OpenClaw, Google ADK, LangChain & more. 50+ integrations. Custom dashboards. End-to-end maintenance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Standart Agents | Enterprise AI Agent Development",
    description:
      "Enterprise-grade AI agents built with OpenClaw, Google ADK, LangChain & more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className={`${inter.className} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}>
        {children}
      </body>
    </html>
  );
}
