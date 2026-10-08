import { Workflow, ShieldCheck } from 'lucide-react';

export default function Competencies() {
  return (
        <section id="competencies" className="py-16 md:py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] dark:text-zinc-500 mb-2 block">Core Competencies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4">
              Release Governance &amp; Leadership.
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-base leading-relaxed">
              Two fundamental pillars of end-to-end program execution, structured directly from over a decade of complex enterprise delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Pillar 1: Program & Release Delivery */}
            <div className="rounded-2xl p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block">Pillar 01</span>
                  <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white">Program &amp; Release Delivery</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#424245] dark:text-zinc-300">
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Release Lifecycle Governance</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">End-to-end governance across requirements, architectural checkpoints, and deployment gates.</p>
                </div>
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Release Calendars &amp; Milestone Planning</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Multi-quarter release cadence scheduling, dependency critical-path analysis, and milestone tracking.</p>
                </div>
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">CI/CD Pipeline Alignment</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Coordinating release trains with continuous integration and automated build verification.</p>
                </div>
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Code &amp; Experiment Freeze Execution</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Enforcing code stabilization windows and branch management ahead of major production launches.</p>
                </div>
                <div>
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Deployment Risk &amp; Post-Release Monitoring</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Risk registers, rollback protocols, telemetry dashboards, and Root Cause Analysis (RCA).</p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Change & Stakeholder Leadership */}
            <div className="rounded-2xl p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Pillar 02</span>
                  <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white">Change &amp; Stakeholder Leadership</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#424245] dark:text-zinc-300">
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Go-Live Readiness &amp; Cross-Functional Alignment</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Bridging development, product, operations, legal, support engineering, and business teams.</p>
                </div>
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Matrixed Team Leadership</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Leading up to 20 engineering groups concurrently through influence, clarity, and shared KPIs.</p>
                </div>
                <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">SOPs, RACI &amp; Process Design</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Standardising operational procedures and responsibility frameworks from scratch.</p>
                </div>
                <div>
                  <strong className="text-[#1d1d1f] dark:text-white block font-medium mb-1">Agile, Scrum &amp; Retrospectives</strong>
                  <p className="text-xs text-[#6e6e73] dark:text-zinc-400">Facilitating continuous improvement cycles that measurably decrease defects and elevate velocity.</p>
                </div>
              </div>
            </div>

          </div>

        </section>
  );
}
