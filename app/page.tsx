'use client';

import { useState, useEffect } from 'react';

import SiteHeader, { type NavTab } from '../components/SiteHeader';
import Hero from '../components/Hero';
import Timeline, { type Filter } from '../components/Timeline';
import Competencies from '../components/Competencies';
import TechDepth from '../components/TechDepth';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact, { Footer } from '../components/Contact';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'adecco' | 'exxat' | 'google' | 'amazon'>('all');
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Track active section for single-page app navigation
  useEffect(() => {
    const sectionIds = ['overview', 'experience', 'competencies', 'technical-depth', 'certifications', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTabs = [
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'experience', label: 'Trajectory', href: '#experience' },
    { id: 'competencies', label: 'Competencies', href: '#competencies' },
    { id: 'technical-depth', label: 'Technical Depth', href: '#technical-depth' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-[#09090b] text-[#1d1d1f] dark:text-[#f5f5f7] font-sans relative selection:bg-blue-500/20 dark:selection:bg-white/20 selection:text-blue-900 dark:selection:text-white transition-colors duration-300">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025] dark:opacity-[0.03]" 
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      
      {/* Ambient Lighting Pulse */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[520px] pointer-events-none z-0 animate-hero-glow transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at 50% 12%, rgba(255, 255, 255, 0.07) 0%, rgba(41, 151, 255, 0.03) 30%, rgba(0, 0, 0, 0) 70%)'
        }}
      />
      <SiteHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navTabs={navTabs}
        activeSection={activeSection}
      />

      <main className="relative z-10 pt-28 pb-24 max-w-6xl mx-auto px-6">
        <Hero />
        <Timeline activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Competencies />
        <TechDepth />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
