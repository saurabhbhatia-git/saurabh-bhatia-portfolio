import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
        <section id="education" className="py-16 md:py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] dark:text-zinc-500 mb-2 block">Academic Foundation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4">
              Education.
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-base leading-relaxed">
              Undergraduate engineering degree providing quantitative foundation in electronics, digital systems, and instrumentation.
            </p>
          </div>

          <div className="max-w-3xl rounded-2xl p-8 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.08] dark:border-white/[0.1] shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  Accredited 4-Year Engineering Degree
                </span>
                <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-base text-[#424245] dark:text-zinc-300 font-medium mt-1">
                  Electronics and Instrumentation Engineering
                </p>
              </div>
              <div className="text-xs font-mono text-[#86868b] dark:text-zinc-400 sm:text-right">
                <span className="block">2006 – 2010</span>
                <span className="text-zinc-500">Graduated</span>
              </div>
            </div>

            <p className="text-sm text-[#6e6e73] dark:text-zinc-400 leading-relaxed mb-6">
              Skyline Institute of Engineering and Technology. Core coursework covered hardware architectures, control systems, computational logic, microprocessors, signal processing, and enterprise instrumentation engineering.
            </p>

            <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-black dark:text-white" />
                <span>Bachelor of Technology in Engineering</span>
              </span>
              <span>4-Year Full-Time</span>
            </div>
          </div>

        </section>
  );
}
