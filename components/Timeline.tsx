export type Filter = 'all' | 'adecco' | 'exxat' | 'google' | 'amazon';

interface TimelineProps {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
}

export default function Timeline({ activeFilter, setActiveFilter }: TimelineProps) {
  return (
        <section id="experience" className="py-16 md:py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
          
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] dark:text-zinc-500 mb-2 block">Proven Track Record</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4">
              Career Trajectory.
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-base leading-relaxed max-w-2xl mb-8">
              A decade of high-stakes software delivery, release management, and cross-functional leadership across global technology leaders and high-growth SaaS.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button 
                type="button"
                onClick={() => setActiveFilter('all')}
                aria-pressed={activeFilter === 'all'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none ${
                  activeFilter === 'all'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs ring-2 ring-black/10 dark:ring-white/20'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white border border-black/[0.08] dark:border-white/[0.1]'
                }`}
              >
                All Roles
              </button>
              <button 
                type="button"
                onClick={() => setActiveFilter('adecco')}
                aria-pressed={activeFilter === 'adecco'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none ${
                  activeFilter === 'adecco'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs ring-2 ring-black/10 dark:ring-white/20'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white border border-black/[0.08] dark:border-white/[0.1]'
                }`}
              >
                Adecco (Google)
              </button>
              <button 
                type="button"
                onClick={() => setActiveFilter('exxat')}
                aria-pressed={activeFilter === 'exxat'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none ${
                  activeFilter === 'exxat'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs ring-2 ring-black/10 dark:ring-white/20'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white border border-black/[0.08] dark:border-white/[0.1]'
                }`}
              >
                Exxat Systems
              </button>
              <button 
                type="button"
                onClick={() => setActiveFilter('google')}
                aria-pressed={activeFilter === 'google'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none ${
                  activeFilter === 'google'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs ring-2 ring-black/10 dark:ring-white/20'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white border border-black/[0.08] dark:border-white/[0.1]'
                }`}
              >
                Google
              </button>
              <button 
                type="button"
                onClick={() => setActiveFilter('amazon')}
                aria-pressed={activeFilter === 'amazon'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none ${
                  activeFilter === 'amazon'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs ring-2 ring-black/10 dark:ring-white/20'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white border border-black/[0.08] dark:border-white/[0.1]'
                }`}
              >
                Amazon
              </button>
            </div>
          </div>

          {/* Vertical Timeline Stream */}
          <div className="relative pl-6 sm:pl-8 border-l border-black/[0.1] dark:border-white/[0.1] space-y-12">
            
            {/* ROLE 1: ADECCO (GOOGLE SYDNEY) */}
            {(activeFilter === 'all' || activeFilter === 'adecco' || activeFilter === 'google') && (
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-[#fbfbfd] dark:ring-[#09090b]" />
                
                <div className="rounded-2xl p-6 md:p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                        <span>Adecco — Supporting Google</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white">
                        Technical Program Manager (Contract)
                      </h3>
                    </div>
                    <div className="flex flex-col md:items-end text-xs text-[#86868b] dark:text-zinc-400 font-mono">
                      <span>Mar 2023 – Sep 2023 · 7 months</span>
                      <span className="text-[#6e6e73] dark:text-zinc-400 font-sans">Sydney, NSW, Australia</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#424245] dark:text-zinc-300 mb-5 leading-relaxed">
                    First Australian role following relocation to Sydney. Ran two concurrent compliance programs in a regulated environment across Google Payments and Google Wallet.
                  </p>

                  <ul className="space-y-3 text-sm text-[#424245] dark:text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Delivered two concurrent compliance programs—a risk rating platform for <strong className="text-black dark:text-white font-medium">Google Payments</strong> and an identity verification integration supporting <strong className="text-black dark:text-white font-medium">Google Wallet&apos;s Brazil launch</strong>, coordinating 10+ cross-functional stakeholders across engineering, product, legal, and operations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Maintained release governance through rigorous milestone tracking, risk registers, and regular stakeholder reporting as international regulatory requirements shifted.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Led go-live readiness for the identity verification integration within the Google Wallet Brazil launch, aligning teams on release schedules, pre-launch validation, and post-release monitoring—delivered on time with zero disruption to users.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* ROLE 2: EXXAT SYSTEMS */}
            {(activeFilter === 'all' || activeFilter === 'exxat') && (
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-600 dark:bg-emerald-400 ring-4 ring-[#fbfbfd] dark:ring-[#09090b]" />
                
                <div className="rounded-2xl p-6 md:p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        <span>Exxat Systems</span>
                        <span>·</span>
                        <span className="normal-case font-normal text-zinc-500">US-based SaaS startup</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white">
                        Technical Program Manager
                      </h3>
                    </div>
                    <div className="flex flex-col md:items-end text-xs text-[#86868b] dark:text-zinc-400 font-mono">
                      <span>Feb 2021 – Jan 2023 · 2 years</span>
                      <span className="text-[#6e6e73] dark:text-zinc-400 font-sans">Pune, India</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#424245] dark:text-zinc-300 mb-5 leading-relaxed">
                    Led end-to-end release management across the software development lifecycle (SDLC) for multiple engineering teams, improving delivery predictability, sprint velocity, and data migration scale.
                  </p>

                  <ul className="space-y-3 text-sm text-[#424245] dark:text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Led end-to-end release management across the SDLC (planning, implementation, testing, and deployment) for multiple engineering teams, improving delivery predictability and sprint velocity.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Facilitated sprint planning, stand-ups, retrospectives, and backlog grooming with <strong className="text-black dark:text-white font-medium">10+ engineering leaders</strong> in Azure DevOps.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Introduced retrospective-driven improvement cycles, reducing post-production bugs by <strong className="text-black dark:text-white font-medium">20%</strong> and significantly lifting sprint completion rates.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Scaled client data migration to the latest production environment by <strong className="text-black dark:text-white font-medium">10x</strong>, coordinating release timing, validation checkpoints, and rollback procedures with zero data loss.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Built release documentation and process playbooks from scratch, providing teams with a consistent, repeatable way of working across sprints.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* ROLE 3: GOOGLE */}
            {(activeFilter === 'all' || activeFilter === 'google') && (
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-[#fbfbfd] dark:ring-[#09090b]" />
                
                <div className="rounded-2xl p-6 md:p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                        <span>Google</span>
                        <span>·</span>
                        <span className="normal-case font-normal text-zinc-500">Global Engineering Operations</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white">
                        Program Manager, Global Engineering Operations
                      </h3>
                    </div>
                    <div className="flex flex-col md:items-end text-xs text-[#86868b] dark:text-zinc-400 font-mono">
                      <span>Jul 2019 – Mar 2020 · 9 months</span>
                      <span className="text-[#6e6e73] dark:text-zinc-400 font-sans">Hyderabad, India</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#424245] dark:text-zinc-300 mb-5 leading-relaxed">
                    Directed high-stakes compliance and vendor operations programs, driving telephony compliance architectures and operational quality for Google Maps.
                  </p>

                  <ul className="space-y-3 text-sm text-[#424245] dark:text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Led implementation of the <strong className="text-black dark:text-white font-medium">Speakeasy call recording compliance solution</strong>, coordinating engineering, legal, and operations to meet regulatory requirements on schedule.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Optimised vendor operations for Google Maps user-generated content (UGC), delivering a <strong className="text-black dark:text-white font-medium">10% productivity improvement</strong> and a <strong className="text-black dark:text-white font-medium">15% uplift in quality KPIs</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Managed vendor relationships and governance accountability frameworks across engineering, learning and development, and product management.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* ROLE 4: AMAZON */}
            {(activeFilter === 'all' || activeFilter === 'amazon') && (
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-orange-500 ring-4 ring-[#fbfbfd] dark:ring-[#09090b]" />
                
                <div className="rounded-2xl p-6 md:p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">
                        <span>Amazon</span>
                        <span>·</span>
                        <span className="normal-case font-normal text-zinc-500">Promoted 4x Across 8 Years</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white">
                        Senior Program Manager
                      </h3>
                      <div className="text-xs text-[#86868b] dark:text-zinc-400 mt-1">
                        Progression: Support Engineer Consultant → Program Manager Consultant → Program Manager I → Program Manager II → Senior Program Manager
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-xs text-[#86868b] dark:text-zinc-400 font-mono">
                      <span>Apr 2011 – Jun 2019 · 8 yrs 3 mos</span>
                      <span className="text-[#6e6e73] dark:text-zinc-400 font-sans">Hyderabad, India &amp; Global</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#424245] dark:text-zinc-300 mb-5 leading-relaxed">
                    Owned complex software rollouts across 150+ fulfilment centres globally, coordinating up to 20 matrixed engineering teams from deployment planning through post-launch stabilisation.
                  </p>

                  <ul className="space-y-3 text-sm text-[#424245] dark:text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Owned complex software rollouts across <strong className="text-black dark:text-white font-medium">150+ fulfilment centres globally</strong>, coordinating up to <strong className="text-black dark:text-white font-medium">20 matrixed engineering teams</strong> from deployment planning through post-launch stabilisation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Designed and maintained release governance frameworks (SOPs, RACI matrices) for integrating <strong className="text-black dark:text-white font-medium">50+ software services</strong> per fulfilment centre, establishing a repeatable, low-risk site onboarding process.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Scaled sort centre software rollouts across North America &amp; Europe, deploying to <strong className="text-black dark:text-white font-medium">100+ sites within a 3-month window</strong> through release calendar management and dependency tracking.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Architected a hardware release and recovery process for decommissioned fulfilment centres, enabling systematic audit and redeployment and generating <strong className="text-black dark:text-white font-medium">$150K in monthly recurring savings per warehouse</strong> ($270M+ network impact).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Aligned product, engineering, operations, and business stakeholders on timelines, dependencies, and go-live criteria.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-400 dark:text-zinc-500 mt-1">―</span>
                      <span>Led root cause analyses (RCAs) on release defects and QA issues, driving corrective actions that systematically improved release quality.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>

        </section>
  );
}
