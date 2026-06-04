import { motion } from 'motion/react';
import { skills, educations, certifications } from '../data';
import { GraduationCap, Award, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

export default function EducationSkills() {
  const technicalSkills = skills.filter(s => s.category === 'technical');
  const agritechSkills = skills.filter(s => s.category === 'agritech');
  const competencySkills = skills.filter(s => s.category === 'competency');

  return (
    <section id="education" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-emerald-500/[0.01] rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
            Credentials &amp; Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Core Science Skills
          </h2>
          <p className="text-slate-400 text-base">
            Review Dr. Singh&apos;s doctoral and technological educational milestones, alongside a catalog of spatial certifications and publications.
          </p>
        </div>

        {/* Layout: Grid containing Education vs Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left: Education Timeline */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <GraduationCap className="w-5.5 h-5.5 text-emerald-400" />
              <span>Academic Milestones</span>
            </h3>
            
            <div className="relative border-l border-slate-800 pl-6 space-y-8 ml-3">
              {educations.map((edu, idx) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline bullet indicator node */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-400 transition-colors duration-300" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 inline-block mb-1">
                      {edu.duration}
                    </span>
                    <h4 className="text-base font-black text-slate-100 group-hover:text-white transition-colors">
                      {edu.degree} &bull; <span className="text-slate-350">{edu.field}</span>
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Capabilities Grid */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Award className="w-5.5 h-5.5 text-emerald-400" />
              <span>Technical &amp; Applied Agritech Skills</span>
            </h3>

            <div className="space-y-6">
              {/* Category: Telemetry & Earth Science Systems */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Geospatial Telemetry (GIS &amp; RS)</span>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((sk, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                      {sk.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Smart Agritech Fields */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Smart Agritech &amp; Sustainability Solutions</span>
                <div className="flex flex-wrap gap-2">
                  {agritechSkills.map((sk, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-emerald-500/5 border border-emerald-500/15 text-emerald-400 rounded-xl text-xs hover:border-emerald-500/30 hover:text-emerald-300 transition-all cursor-default">
                      {sk.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Competency */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Professional Key Competencies</span>
                <div className="flex flex-wrap gap-2">
                  {competencySkills.map((sk, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-sky-500/5 border border-sky-500/15 text-sky-455 rounded-xl text-xs hover:border-sky-500/30 hover:text-sky-350 transition-all cursor-default">
                      {sk.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications & Licenses segment */}
        <div className="pt-12 border-t border-slate-800/60">
          <h3 className="text-lg font-mono text-emerald-400 mb-6 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-5 h-5 font-bold" /> Certifications &amp; Professional Licenses:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex gap-2.5 items-start text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
