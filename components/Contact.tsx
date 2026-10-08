import { Mail, ArrowDown, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
        <section id="contact" className="py-16 md:py-24 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] dark:text-zinc-500 mb-2 block">Contact</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6">
              Let&apos;s Connect.
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-base mb-10 leading-relaxed">
              Open to select Senior / Staff Technical Program Management, Release Governance, and Delivery Leadership conversations in Sydney and globally.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
              <a
                href="mailto:saurabhb307@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>saurabhb307@gmail.com</span>
              </a>

              <a
                href="/cv-saurabh-bhatia.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1d1d1f] dark:text-white bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.08] dark:border-white/[0.12] rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ArrowDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/saurabhbhatiaprofile/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1d1d1f] dark:text-white bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.08] dark:border-white/[0.12] rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

            </div>

            <div className="text-xs text-[#86868b] dark:text-zinc-500 flex items-center justify-center gap-3">
              <span>Sydney NSW</span>
              <span>·</span>
              <span>Australian Permanent Resident</span>
              
            </div>
          </div>
        </section>
  );
}

export function Footer() {
  return (
      <footer className="border-t border-black/[0.06] dark:border-white/[0.06] py-8 text-center text-xs text-[#86868b] dark:text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Saurabh Bhatia · Senior Technical Program Manager
          </div>
          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-black dark:hover:text-white transition-colors">Overview</a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Trajectory</a>
            <a href="#competencies" className="hover:text-black dark:hover:text-white transition-colors">Competencies</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
  );
}
