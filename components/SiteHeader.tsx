import { X, Menu } from 'lucide-react';

export interface NavTab {
  id: string;
  label: string;
  href: string;
}

interface SiteHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navTabs: NavTab[];
  activeSection: string;
}

export default function SiteHeader({ mobileMenuOpen, setMobileMenuOpen, navTabs, activeSection }: SiteHeaderProps) {
  return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Wordmark */}
          <a href="#overview" className="text-base font-semibold tracking-tight text-[#1d1d1f] dark:text-white hover:opacity-80 transition-opacity">
            Saurabh Bhatia
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-medium tracking-wide">
            {navTabs.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`py-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-black dark:text-white font-semibold'
                      : 'text-[#6e6e73] dark:text-[#a1a1a6] hover:text-black dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#6e6e73] dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black/[0.06] dark:border-white/[0.08] bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl px-6 py-4 transition-colors">
            <div className="flex flex-col gap-3 text-sm font-medium text-[#6e6e73] dark:text-zinc-300">
              {navTabs.map((tab) => (
                <a 
                  key={tab.id}
                  href={tab.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-1 transition-colors ${activeSection === tab.id ? 'text-black dark:text-white font-semibold' : 'hover:text-black dark:hover:text-white'}`}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
  );
}
