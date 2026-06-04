import { motion } from 'motion/react';
import { Mail, ShieldCheck, MapPin, Award, ArrowUpRight, GraduationCap, Radio, CloudRain } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 flex items-center bg-radial from-slate-900 via-slate-950 to-black overflow-hidden border-b border-slate-800">
      {/* Background Tech Grids */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Dynamic Glowing Radial Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Agritech &amp; Climate Risk Advisor
            </motion.div>

            {/* Title / Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-sm font-mono text-emerald-500 tracking-widest uppercase font-semibold block">
                {personalInfo.subTitle}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
                {personalInfo.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-medium">PhD</span>
              </h1>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Gorakhpur, India / Global</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-slate-800 pl-6">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>ISRO / IIRS Alumnus</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-slate-800 pl-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ADB Climate Specialist</span>
              </div>
            </motion.div>

            {/* Abstract Paragraph */}
            <motion.p variants={itemVariants} className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {personalInfo.bio}
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                id="hero-contact-button"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Connect / Consult</span>
              </a>
              <a 
                href="#publications" 
                id="hero-pubs-button"
                className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 px-6 py-3 rounded-xl transition-all duration-300 hover:text-white"
              >
                <span>Read Publications</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Affiliations list */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-slate-800/80 flex flex-col space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Selected Affiliations &amp; Clients:</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400 font-mono text-xs">
                <span>• Shriram General Insurance</span>
                <span>• Asian Development Bank (ADB)</span>
                <span>• India Meteorological Dept (IMD)</span>
                <span>• Borlaug Institute for South Asia</span>
                <span>• AiDash (USA)</span>
                <span>• DeHaat</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side - Interactive Telemetry Calibration matrix placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[380px] aspect-square rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-sm overflow-hidden group">
              {/* Spinning compass card background */}
              <div className="absolute inset-0 bg-radial-at-t from-emerald-500/5 via-transparent to-transparent opacity-50" />
              
              {/* Radar Grid Graphic */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full border border-slate-800 flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
                  <div className="w-3/4 h-3/4 rounded-full border border-slate-800 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full border border-slate-800/60 flex items-center justify-center">
                      <div className="w-1/4 h-1/4 rounded-full bg-emerald-500/20 flex items-center justify-center relative">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
                        <div className="w-2 h-2 rounded-full bg-emerald-400 relative" />
                      </div>
                    </div>
                  </div>
                  {/* Radar grid coordinates */}
                  <div className="absolute h-full w-[1px] bg-slate-800/50 left-1/2 top-0" />
                  <div className="absolute w-full h-[1px] bg-slate-800/50 top-1/2 left-0" />
                </div>
              </div>

              {/* Dynamic Radar Sweep Beam */}
              <div className="absolute inset-0 pointer-events-none origin-center animate-[spin_8s_linear_infinite]" style={{
                background: 'conic-gradient(from 0deg, rgba(16, 185, 129, 0.15) 0deg, rgba(16, 185, 129, 0) 90deg)'
              }} />

              {/* Top status bar overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-slate-400 font-mono text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>TEL_ORBIT_ACTIVE [ISRO]</span>
                </div>
                <span>97.2% ACC</span>
              </div>

              {/* Bottom stats overlay info */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-800 rounded-lg p-3 font-mono text-xs space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Telemetry:</span>
                  <span className="text-emerald-400 font-semibold">MULTISPECTRAL_VI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Latitude:</span>
                  <span>26° 45&apos; N (Gorakhpur)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scan Resolution:</span>
                  <span>10m Spatial Sentinel</span>
                </div>
                <div className="h-1 bg-slate-950 rounded overflow-hidden mt-1">
                  <div className="h-full bg-emerald-500 animate-[pulse_1.5s_infinite]" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Beautiful overlapping climate nodes */}
              <div className="absolute top-1/4 right-1/6 p-2 bg-slate-900 border border-slate-800 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-mono text-slate-350">
                <CloudRain className="w-3.5 h-3.5 text-sky-400" />
                <span>CHIRPS Res</span>
              </div>

              <div className="absolute bottom-1/3 left-6 p-2 bg-slate-900 border border-slate-800 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-mono text-slate-350">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>PhD Earth Sci</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats segment info */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/40">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="text-center md:text-left flex flex-col space-y-1"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
