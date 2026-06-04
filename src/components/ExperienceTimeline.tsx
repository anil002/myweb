import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences, consultancies } from '../data';
import { Briefcase, Landmark, ShieldAlert, Calendar, MapPin, Sparkles, Building, Satellite } from 'lucide-react';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'industry' | 'consultancy'>('industry');
  const [selectedId, setSelectedId] = useState<string>(activeTab === 'industry' ? experiences[0].id : consultancies[0].id);

  const handleTabChange = (type: 'industry' | 'consultancy') => {
    setActiveTab(type);
    setSelectedId(type === 'industry' ? experiences[0].id : consultancies[0].id);
  };

  const getActiveList = () => {
    if (activeTab === 'industry') {
      return experiences;
    }
    return consultancies.map(c => ({
      id: c.id,
      title: c.role,
      company: c.client,
      duration: "Strategic Consultant",
      location: "Varies",
      logoType: c.logoType,
      points: c.points,
    }));
  };

  const activeList = getActiveList();
  const selectedRecord = activeList.find(x => x.id === selectedId) || activeList[0];

  const getCompanyColor = (logoType: string) => {
    switch (logoType) {
      case 'shriram': return 'border-amber-500/30 text-amber-400 bg-amber-950/20';
      case 'aidash': return 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20';
      case 'neurafarms': return 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20';
      case 'dehaat': return 'border-green-500/30 text-green-400 bg-green-950/20';
      case 'farmguide': return 'border-orange-500/30 text-orange-400 bg-orange-950/20';
      case 'imd': return 'border-sky-500/30 text-sky-400 bg-sky-950/20';
      case 'uprsac': return 'border-indigo-500/30 text-indigo-400 bg-indigo-950/20';
      case 'adb': return 'border-blue-500/30 text-blue-400 bg-blue-950/20';
      case 'bisa': return 'border-amber-500/30 text-amber-400 bg-amber-950/20';
      case 'plutas': return 'border-teal-500/30 text-teal-400 bg-teal-950/20';
      default: return 'border-slate-500/30 text-slate-400 bg-slate-950/20';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
            Career Journey &amp; Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consulting &amp; Professional Timeline
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdown of Dr. Singh&apos;s senior researcher roles, agritech scientist positions, and high-level structural consultations.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-900 border border-slate-800 p-1.5 rounded-2xl shadow-xl">
            <button
              onClick={() => handleTabChange('industry')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'industry' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' : 'text-slate-400 hover:text-white'}`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional &amp; R&amp;D Positions</span>
            </button>
            <button
              onClick={() => handleTabChange('consultancy')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'consultancy' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' : 'text-slate-400 hover:text-white'}`}
            >
              <Landmark className="w-4 h-4" />
              <span>Institutional Consultancies</span>
            </button>
          </div>
        </div>

        {/* Layout: Sidebar + Details Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Navigation List */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
            {activeList.map((item) => {
              const worksAs = item.title;
              const isSelected = item.id === selectedId;
              const companyColor = getCompanyColor(item.logoType);
              
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex gap-4 ${isSelected ? 'bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-500/5' : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60'}`}
                >
                  <div className={`p-2.5 rounded-lg border h-11 w-11 flex-shrink-0 flex items-center justify-center ${companyColor}`}>
                    {activeTab === 'industry' ? <Briefcase className="w-5 h-5" /> : <Building className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1 overflow-hidden">
                    <h4 className="font-extrabold text-sm text-slate-100 truncate">{worksAs}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <span className="font-bold text-slate-300">{item.company}</span>
                    </div>
                    {item.duration && (
                      <span className="text-[10px] font-mono text-emerald-400 block pt-0.5">{item.duration}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Position Detail Screen */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedRecord && (
                <motion.div
                  key={selectedRecord.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Top title area */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-medium">
                          Active Selection &bull; Details
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                          {selectedRecord.title}
                        </h3>
                        <p className="text-slate-350 text-sm font-semibold flex items-center gap-1.5 font-mono">
                          <Building className="w-4 h-4 text-emerald-400" />
                          <span>{selectedRecord.company}</span>
                        </p>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex self-start sm:self-center items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{selectedRecord.duration}</span>
                      </div>
                    </div>

                    {/* Responsibilities list / project specs */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">Project Focus &amp; Responsibilities:</h4>
                      <ul className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                        {selectedRecord.points.map((pt, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                            <p>{pt}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Location indicator */}
                  {selectedRecord.location && selectedRecord.location !== "Varies" && (
                    <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-slate-400 font-mono text-xs">
                      <MapPin className="w-4 h-4 text-emerald-500" />
                      <span>Operating Region: <strong className="text-slate-300">{selectedRecord.location}</strong></span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
