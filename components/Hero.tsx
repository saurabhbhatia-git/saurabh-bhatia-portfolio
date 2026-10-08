import { ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  return (
        <section id="overview" className="py-16 md:py-24 flex flex-col items-center text-center">
          
          {/* Status Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6] mb-6 tracking-wide px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sydney, NSW · Australian Permanent Resident</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white mb-6">
            Saurabh Bhatia<span className="text-zinc-400 dark:text-zinc-600">.</span>
          </h1>

          {/* Executive Sub-Headline */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#1d1d1f] dark:text-white max-w-3xl mb-8"
            style={{
              textShadow:
                '0 0 12px rgba(255, 255, 255, 0.4), 0 0 30px rgba(220, 230, 248, 0.2), 0 0 55px rgba(185, 205, 235, 0.1)',
              letterSpacing: '-0.02em',
            }}
          >
            Technical Program Manager · Ex-Amazon &amp; Google · Cloud Infrastructure &amp; Applied AI Integrations
          </p>

          {/* Executive Summary */}
          <p className="text-base sm:text-lg text-[#6e6e73] dark:text-[#a1a1a6] font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            11+ years taking end-to-end accountability for complex software rollouts across Amazon, Google, and Exxat Systems. Aligning engineering, business, product, QA, UX, and operations around shared delivery outcomes with repeatable release governance, Agile discipline, and cloud infrastructure &amp; AI literacy.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-20">
            <a 
              href="#experience" 
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <span>Explore Trajectory</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.08] dark:border-white/[0.12] rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <Mail className="w-4 h-4 text-[#86868b] dark:text-zinc-500" />
            </a>
          </div>

          {/* Balanced Enterprise Metrics Ribbon (Amazon, Google & SaaS Scale) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-8 px-6 rounded-2xl bg-white/80 dark:bg-zinc-950/60 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
            <div className="flex flex-col items-center justify-center text-center p-3">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white tabular-nums">11+</span>
              <span className="text-xs uppercase tracking-wider text-[#86868b] dark:text-zinc-500 font-medium mt-1">Years Enterprise Scale</span>
              <span className="text-[11px] text-[#86868b] dark:text-zinc-400 mt-0.5">Amazon &amp; Google Background</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white tabular-nums">150+</span>
              <span className="text-xs uppercase tracking-wider text-[#86868b] dark:text-zinc-500 font-medium mt-1">Sites Deployed Globally</span>
              <span className="text-[11px] text-[#86868b] dark:text-zinc-400 mt-0.5">Amazon Fulfilment Rollouts</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white tabular-nums">10x</span>
              <span className="text-xs uppercase tracking-wider text-[#86868b] dark:text-zinc-500 font-medium mt-1">Data Migration Scaled</span>
              <span className="text-[11px] text-[#86868b] dark:text-zinc-400 mt-0.5">Exxat Systems SaaS Platform</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white tabular-nums">15%</span>
              <span className="text-xs uppercase tracking-wider text-[#86868b] dark:text-zinc-500 font-medium mt-1">Google Maps Quality KPI</span>
              <span className="text-[11px] text-[#86868b] dark:text-zinc-400 mt-0.5">User-Generated Content Uplift</span>
            </div>
          </div>

        </section>
  );
}
