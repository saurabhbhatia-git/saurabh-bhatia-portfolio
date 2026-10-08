import { ExternalLink, CheckCircle, Award, Sparkles, LayoutGrid, GitMerge, Layers } from 'lucide-react';

export default function Certifications() {
  return (
        <section id="certifications" className="py-16 md:py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] dark:text-zinc-500 mb-2 block">Professional Credentials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4">
              Certifications &amp; Verification.
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-base leading-relaxed">
              Professional credentials in Generative AI leadership, Agile orchestration, and technical project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            
            {/* Cert 1: Google Cloud Gen AI Leader */}
            <a 
              href="https://coursera.org/share/23d293f5257edaa6a49af79d7bfd975c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.25] shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-500 font-mono mb-4">
                  <span>Google Cloud</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Credential</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Generative AI Leader
                </h3>
                <p className="text-xs text-[#6e6e73] dark:text-zinc-400 leading-relaxed">
                  Executive &amp; technical leadership certification in enterprise AI strategy, infrastructure readiness, model alignment, and responsible AI governance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#6e6e73] dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="font-medium inline-flex items-center gap-1.5">
                  View on Coursera
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </a>

            {/* Cert 2: AWS Generative AI Applications */}
            <a 
              href="https://coursera.org/share/e713141f39238c423575f89169ca9d0a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.25] shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-500 font-mono mb-4">
                  <span>Amazon Web Services</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Verified Credential</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  AWS Generative AI Applications
                </h3>
                <p className="text-xs text-[#6e6e73] dark:text-zinc-400 leading-relaxed">
                  Practical validation in architecting, building, and deploying production Foundation Models and Generative AI applications on AWS cloud infrastructure.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#6e6e73] dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="font-medium inline-flex items-center gap-1.5">
                  View on Coursera
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            </a>

            {/* Cert 3: Anthropic & AWIT - Real-World AI with Claude */}
            <a 
              href="https://coursera.org/share/4bfcf88a12f9e727ab62ab7309e9b2de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.25] shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-500 font-mono mb-4">
                  <span>Anthropic &amp; AWIT</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Specialization</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Real-World AI with Claude
                </h3>
                <p className="text-xs text-[#6e6e73] dark:text-zinc-400 leading-relaxed">
                  Advanced prompt engineering, tool calling, reasoning pipeline design, API integration, and enterprise safety guardrails for production LLMs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#6e6e73] dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                <span className="font-medium inline-flex items-center gap-1.5">
                  View on Coursera
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
            </a>

            {/* Cert 4: Jira Agile */}
            <a 
              href="https://www.linkedin.com/learning/certificates/b7b102cd373e76b1ff12cd14e358eaf3abb36eb864c436767e4b898fd12b7830?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDIQGTP1HQPCaa2pUZ2KfKg%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.25] shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-500 font-mono mb-4">
                  <span>LinkedIn Learning</span>
                  <span className="text-[#6e6e73] dark:text-zinc-400 font-medium">Verified Credential</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Agile Project Management with Jira Cloud
                </h3>
                <p className="text-xs text-[#6e6e73] dark:text-zinc-400 leading-relaxed">
                  Lean and Agile processes: advanced Jira workflows, sprint cadences, team velocity metrics, backlog grooming, and enterprise portfolio alignment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#6e6e73] dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="font-medium inline-flex items-center gap-1.5">
                  View on LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <LayoutGrid className="w-4 h-4 text-[#86868b] dark:text-zinc-400" />
              </div>
            </a>

            {/* Cert 5: Project Management: Technical Projects */}
            <a 
              href="https://www.linkedin.com/learning/certificates/1c899dc764c5af187c3fdc2a04ad23af9dfd5c6bf64a2825f25e3c5b50c8499c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.25] shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-500 font-mono mb-4">
                  <span>LinkedIn Learning</span>
                  <span className="text-[#6e6e73] dark:text-zinc-400 font-medium">Verified Credential</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Project Management: Technical Projects
                </h3>
                <p className="text-xs text-[#6e6e73] dark:text-zinc-400 leading-relaxed">
                  Rigorous technical program execution: scoping complex software requirements, architecture reviews, dependency mapping, and release risk registers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#6e6e73] dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="font-medium inline-flex items-center gap-1.5">
                  View on LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <GitMerge className="w-4 h-4 text-[#86868b] dark:text-zinc-400" />
              </div>
            </a>

            {/* Additional Credentials Card */}
            <div className="rounded-2xl p-6 bg-white/80 dark:bg-zinc-950/70 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-zinc-500 font-mono mb-4">
                  <span>Continuous Learning</span>
                  <span>Foundations</span>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white mb-2">
                  Agile, Program &amp; Process
                </h3>
                <p className="text-xs text-[#6e6e73] dark:text-zinc-400 leading-relaxed">
                  Scrum: Advanced &amp; The Basics · Creating a Program Strategy · Six Sigma Foundations · Responsible AI for Digital Leaders (Google Cloud).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#6e6e73] dark:text-zinc-400">
                <span>Practitioner Discipline</span>
                <Layers className="w-4 h-4 text-[#86868b] dark:text-zinc-400" />
              </div>
            </div>

          </div>

        </section>
  );
}
