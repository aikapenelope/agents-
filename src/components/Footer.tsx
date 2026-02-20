import { Bot, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Agent Development", href: "#services" },
    { label: "Agent Maintenance", href: "#services" },
    { label: "Custom Dashboards", href: "#services" },
    { label: "RAG Engineering", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
  Technology: [
    { label: "OpenClaw", href: "#frameworks" },
    { label: "Google ADK", href: "#frameworks" },
    { label: "LangChain", href: "#frameworks" },
    { label: "CrewAI", href: "#frameworks" },
    { label: "AI Models", href: "#models" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[var(--background)]">
      {/* CTA Banner */}
      <div id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Build Your AI Agent Fleet?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your use case and we&apos;ll design a custom solution.
            Free consultation — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@standartagents.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/25"
            >
              <Mail className="w-5 h-5" />
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 text-white font-bold text-lg mb-4"
            >
              <Bot className="w-6 h-6 text-indigo-400" />
              <span>
                Standart<span className="text-indigo-400">Agents</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enterprise-grade AI agents — built, deployed, and maintained by
              experts.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Standart Agents. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
