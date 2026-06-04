import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Menu, X, Landmark, GraduationCap, FileText, Briefcase, Info, Compass } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Biography', icon: Info },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'simulator', label: 'Climate Simulator', icon: Compass },
    { id: 'education', label: 'Education & Skills', icon: GraduationCap },
    { id: 'contact', label: 'Endorsements & Contact', icon: Landmark },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xl font-bold font-sans text-slate-100 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 mt-0.5 tracking-wider uppercase">
              {personalInfo.title}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === item.id ? 'bg-emerald-500/10 text-emerald-300 border-b-2 border-emerald-500' : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'}`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Direct Links */}
          <div className="hidden xl:flex items-center gap-4 text-xs font-mono text-slate-300 border-l border-slate-700 pl-4">
            <a href={`mailto:${personalInfo.email}`} id="header-email-link" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>Email</span>
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} id="header-phone-link" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="p-2 rounded-lg text-slate-300 hover:text-slate-100 hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-emerald-500/20 text-slate-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-item-${item.id}`}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-md text-base font-medium ${activeTab === item.id ? 'bg-emerald-500/10 text-emerald-400 font-semibold border-l-4 border-emerald-500' : 'hover:bg-slate-900 hover:text-slate-100'}`}
                >
                  <Icon className="w-5 h-5 text-emerald-500" />
                  {item.label}
                </button>
              );
            })}
            <div className="border-t border-slate-800 mt-4 pt-4 flex justify-around px-4">
              <a href={`mailto:${personalInfo.email}`} id="mobile-email-link" className="flex flex-col items-center gap-1 text-xs hover:text-emerald-400 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-500 mb-1" />
                <span>Email</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} id="mobile-phone-link" className="flex flex-col items-center gap-1 text-xs hover:text-emerald-400 text-slate-400">
                <Phone className="w-5 h-5 text-emerald-500 mb-1" />
                <span>Call Scientist</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
