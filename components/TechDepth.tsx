import { LayoutGrid, Server, Sparkles } from 'lucide-react';

export default function TechDepth() {
  return (
        <section id="technical-depth" className="py-16 md:py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] dark:text-zinc-500 mb-2 block">Technical Depth</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4">
              Hands-On Systems &amp; Tooling Stack.
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-base leading-relaxed">
              Technical fluency built through enterprise program orchestration and practical hands-on work across containerised infrastructure, release tooling, and Generative AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Domain 1: Delivery & Lifecycle Management */}
            <div className="rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  <LayoutGrid className="w-4 h-4" />
                  <span>Delivery &amp; Lifecycle</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-3">Enterprise Governance Tools</h3>
                <ul className="space-y-2 text-xs text-[#424245] dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Azure DevOps:</strong> Sprint planning, backlog grooming, CI/CD train alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Jira Cloud &amp; Confluence:</strong> Enterprise portfolio management, release calendars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Power BI &amp; SharePoint:</strong> Delivery metrics, KPI telemetry &amp; reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Planning Disciplines:</strong> Capacity planning, resource forecasting, OKRs &amp; KPIs</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] text-[#86868b] dark:text-zinc-500 font-mono">
                SDLC · Agile · Scrum Discipline
              </div>
            </div>

            {/* Domain 2: Infrastructure & Containerisation */}
            <div className="rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">
                  <Server className="w-4 h-4" />
                  <span>Infrastructure &amp; Edge</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-3">Containerisation &amp; Networks</h3>
                <ul className="space-y-2 text-xs text-[#424245] dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Docker:</strong> Containerisation, multi-service compose, deployment pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Reverse Proxies:</strong> Nginx, Traefik, Caddy reverse proxy orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Cloudflare Tunnels:</strong> Zero-Trust access control, edge routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Cloud Platforms:</strong> AWS, Microsoft Azure &amp; Google Cloud (GCP) — core services, architecture &amp; program delivery literacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Languages:</strong> Python scripting, SQL query verification &amp; data validation</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] text-[#86868b] dark:text-zinc-500 font-mono">
                Homelab Tested · Zero Trust
              </div>
            </div>

            {/* Domain 3: Applied Generative AI Tooling */}
            <div className="rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Applied Generative AI</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-3">AI Tooling &amp; Workflows</h3>
                <ul className="space-y-2 text-xs text-[#424245] dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Agentic Pipelines:</strong> Multi-step workflows, tool-calling frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">RAG Systems:</strong> Retrieval-Augmented Generation context management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Local Tooling:</strong> Ollama, llama.cpp model inference &amp; evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Foundation Tooling:</strong> Claude, Gemini API, Prompt Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Amazon Bedrock:</strong> Managed foundation-model platforms &amp; enterprise GenAI adoption patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400">•</span>
                    <span><strong className="text-black dark:text-white">Model Context Protocol (MCP):</strong> Standardised tool &amp; context integration patterns for AI agent ecosystems</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] text-[#86868b] dark:text-zinc-500 font-mono">
                Credentialed across Google Cloud, AWS &amp; Anthropic
              </div>
            </div>

          </div>

        </section>
  );
}
