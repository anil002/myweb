import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { publications } from '../data';
import { Publication } from '../types';
import { Search, Book, FileText, Bookmark, Calendar, ArrowUpRight, Award, Flame } from 'lucide-react';

export default function PublicationsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'book' | 'article' | 'chapter'>('all');

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.publisherOrJournal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.authors && pub.authors.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesType = activeFilter === 'all' || pub.type === activeFilter || (activeFilter === 'book' && pub.type === 'journal_special');
    
    return matchesSearch && matchesType;
  });

  const getPubIcon = (type: string) => {
    switch (type) {
      case 'book': return Book;
      case 'journal_special': return Bookmark;
      case 'chapter': return FileText;
      default: return FileText;
    }
  };

  return (
    <section id="publications" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-500/[0.01] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
            Scholarly Assets &amp; Books
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peer-Reviewed Journal Publications
          </h2>
          <p className="text-slate-400 text-base">
            Search, filter, and access Dr. Singh&apos;s edited literature, research contributions, and book chapters on agritech geoinformatics models.
          </p>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono">8.2</span>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">Highest Journal IF (STOTEN)</p>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Book className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono">2</span>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">Edited Textbooks (Taylor/CRC)</p>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono">1</span>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">Elsevier Journal editor</p>
            </div>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono">25+</span>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">Peer-reviewed Papers</p>
            </div>
          </div>
        </div>

        {/* Search & Sort Panel */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch md:items-center justify-between mb-8 pb-6 border-b border-slate-800/60">
          
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Catalog' },
              { id: 'book', label: 'Edited Books & Journals' },
              { id: 'article', label: 'Research Articles' },
              { id: 'chapter', label: 'Book Chapters' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${activeFilter === f.id ? 'bg-emerald-600 text-white' : 'bg-slate-900 border border-slate-800 text-slate-455 hover:text-white hover:bg-slate-800/50'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Box inputs and properties */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="publication-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, journal..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-sans transition-all"
            />
          </div>

        </div>

        {/* Infinite Grid Lists of matching publications */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPublications.map((pub) => {
              const Icon = getPubIcon(pub.type);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={pub.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    {/* Header: Type and Year */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                        <Icon className="w-3.5 h-3.5" />
                        <span className="uppercase">{pub.type.replace('_', ' ')}</span>
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{pub.year}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-white leading-snug font-sans line-clamp-3">
                      {pub.title}
                    </h3>

                    {/* Authors description */}
                    {pub.authors && (
                      <p className="text-xs text-slate-400 line-clamp-2 font-sans font-medium">
                        {pub.authors}
                      </p>
                    )}
                  </div>

                  {/* Footer metadata details */}
                  <div className="border-t border-slate-800/80 pt-4 mt-5 flex items-center justify-between gap-2">
                    <span className="text-xs text-slate-400 font-sans truncate font-medium">
                      {pub.publisherOrJournal}
                    </span>

                    {pub.impactFactor ? (
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[10px] font-bold">
                        <span>IF {pub.impactFactor}</span>
                      </div>
                    ) : pub.isbn ? (
                      <div className="text-[9px] font-mono text-slate-500">
                        ISBN: {pub.isbn}
                      </div>
                    ) : null}

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 px-2 text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-lg text-xs font-mono font-semibold hover:shadow flex items-center gap-1"
                        id={`pub-link-${pub.id}`}
                      >
                        <span>Source</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Fallback empty view */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-sans">
            <span className="block text-2xl font-semibold mb-2">No publications match your criteria</span>
            <span>Refine your query or choose another category category.</span>
          </div>
        )}

      </div>
    </section>
  );
}
