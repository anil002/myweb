/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import ExperienceTimeline from './components/ExperienceTimeline';
import PublicationsList from './components/PublicationsList';
import BlogSection from './components/BlogSection';
import AgritechDemo from './components/AgritechDemo';
import EducationSkills from './components/EducationSkills';
import ContactSection from './components/ContactSection';
import { personalInfo, publications } from './data';
import { ArrowUp } from 'lucide-react';
import type { BlogPost } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);

      // Simple intersection observer equivalent for active tab highlighting
      const sections = ['about', 'experience', 'publications', 'blog', 'simulator', 'education', 'contact'];
      let currentSection = 'about';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is around the top viewport area
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      const savedPosts = window.localStorage.getItem('scientificBlogPosts');
      if (savedPosts) {
        setBlogPosts(JSON.parse(savedPosts));
        return;
      }
    } catch (error) {
      console.warn('Unable to load saved blog posts', error);
    }

    setBlogPosts([
      {
        id: 'blog-default-1',
        title: 'Satellite-Based Climate Insights',
        summary: 'A short scientific post on how remote sensing advances climate resilience.',
        content:
          'Explore the latest scientific findings in satellite-enabled agricultural monitoring, including vegetation indices, soil moisture analytics, and climate risk predictions for resilient farming systems.',
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts((prevPosts) => {
      const nextPosts = [post, ...prevPosts];
      try {
        window.localStorage.setItem('scientificBlogPosts', JSON.stringify(nextPosts));
      } catch (error) {
        console.warn('Unable to save blog post', error);
      }
      return nextPosts;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      
      {/* Fixed top Header Navbar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main layout contents */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Biography & Scientific Dossier Section */}
        <ProfileSummary />

        {/* Experience Timeline details */}
        <ExperienceTimeline />

        {/* Scholarly publications catalog */}
        <PublicationsList />

        {/* Scientific Blog posts and content creation */}
        <BlogSection posts={blogPosts} onCreate={addBlogPost} />

        {/* Interactive Climate Discomfort & Telemetry Grid Simulator */}
        <AgritechDemo />

        {/* Education & skills matrices */}
        <EducationSkills />

        {/* Expert Endorsements & Interactive Contact */}
        <ContactSection />
      </main>

      {/* Academic Footer */}
      <footer className="bg-slate-955 border-t border-slate-900 py-12 text-slate-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 items-center md:items-start text-center md:text-left">
              <span className="text-slate-305 font-bold tracking-tight text-sm font-sans flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-500" />
                {personalInfo.name} Portfolio
              </span>
              <span>Lead Climate Risk &amp; Agriculture Technology Specialist</span>
              <span className="text-[10px] text-slate-600 mt-1">&copy; {new Date().getFullYear()} Dr. Anil Kumar Singh. All Scientific Rights Reserved.</span>
            </div>

            {/* Links and index handles references */}
            <div className="flex flex-wrap gap-4.5 justify-center">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" id="footer-linkedin-link" className="hover:text-emerald-400 pb-0.5 border-b border-transparent hover:border-emerald-500/30 transition-all font-semibold">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" id="footer-github-link" className="hover:text-emerald-400 pb-0.5 border-b border-transparent hover:border-emerald-500/30 transition-all font-semibold">GitHub</a>
              <a href={personalInfo.researchgate} target="_blank" rel="noreferrer" id="footer-researchgate-link" className="hover:text-emerald-400 pb-0.5 border-b border-transparent hover:border-emerald-500/30 transition-all font-semibold">ResearchGate</a>
              <a href="#about" className="hover:text-emerald-400 pb-0.5 border-b border-transparent hover:border-emerald-500/30 transition-all">Biography</a>
              <a href="#publications" className="hover:text-emerald-400 pb-0.5 border-b border-transparent hover:border-emerald-500/30 transition-all">Publications ({publications.length})</a>
              <a href="#blog" className="hover:text-emerald-400 pb-0.5 border-b border-transparent hover:border-emerald-500/30 transition-all">Blog</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Slide UP button indicator */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-300 transform scale-105 hover:-translate-y-1 z-40 active:scale-95"
          title="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
