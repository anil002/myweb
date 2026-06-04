import { motion } from 'motion/react';
import { Award, BookOpen, Globe, TrendingUp, Cpu, Leaf } from 'lucide-react';

export default function ProfileSummary() {
  const categories = [
    {
      title: "Climate & Remote Sensing Expertise",
      icon: Globe,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Harnessing Multi-Spectral Satellite Arrays and Ground Station Networks",
      points: [
        "Spatio-Temporal Atmospheric Modeling: Leveraged satellite sensors to map and quantify long-term methane emissions from ecosystems and wetlands in India, Russia, Greece, and Armenia over multi-decade cycles.",
        "Groundwater Tracing via Telemetry: Pioneered utilizing GRACE gravity satellite streams to monitor macro-hydrologic groundwater anomalies during the Indian Summer Monsoon and Northeast Monsoon, translating readings directly into agricultural advice.",
        "Glacial Retreat & Cryosphere Scoping: Conducted morphometric and hazard zonation tracking on the Himalayan glaciers (such as Lhonak and Bara Shigri glaciers) utilizing SAR systems (Sentinel-1) to model climatic vulnerabilities and flood risk.",
        "Regional Microclimate Mapping: Computed localized 4 km resolution gridded thresholds tracking extreme temperature patterns and seasonal rain anomalies across challenging topographies including Sikkim and Uttarakhand."
      ]
    },
    {
      title: "Academic & Publications Mastery",
      icon: BookOpen,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      description: "Contributing Substantial Peer-Reviewed Literature to Leading Science Outlets",
      points: [
        "Prolific Author & Editor: Successfully authored over 25 Peer-Reviewed Research Articles and edited 2 industry textbooks on 'Smart Technologies in Sustainable Agriculture' and 'Geoinformatics' in sustainable farming.",
        "High-Impact Publications: Routinely published in top-quartile journals including 'Science of the Total Environment' (Impact Factor: 8.2) and 'Environmental Pollution' (Impact Factor: 7.6).",
        "Elsevier Journal Editor: Selected to curate and edit the Elsevier Special Issue Journal on 'Remote Sensing and GIS Applications in Global Warming and Climate Change'.",
        "Interdisciplinary Research: Integrated nanomaterial-plant bio-interaction studies, artificial intelligence, and big database models to formulate next-generation agricultural paradigms."
      ]
    },
    {
      title: "Agritech Solutions & AI Models",
      icon: Cpu,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description: "Developing Practical Software Products Bridging Research to Fields",
      points: [
        "Computer Vision for Crops: Engineered mobile crop-disease detection and classification models utilizing smartphone-based RGB photo telemetry for instant field diagnoses.",
        "Predictive Agronomic Analytics: Authored and refined crop yield predictive calculators including nitrogen crop stress alerts mapped dynamically under satellite and weather indices.",
        "Soil Health Tracking: Pioneered the scaling of multi-nation satellite-based models assessing soil organic carbon accumulation across agricultural surfaces throughout the EU and USA.",
        "Parametric Risk Engineering: Conceptualized grid-based climate threat calculators and parametric insurance frameworks to hedge smallholder finances against flash drought and heavy monsoons."
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
            Dossier &amp; Key Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Profile &amp; Research Core
          </h2>
          <p className="text-slate-400 text-base">
            Dr. Anil Kumar Singh synthesizes earth sciences, satellite observation telemetry, and numerical programming (Python) to evaluate risks, map resources, and advisor institutional policymakers.
          </p>
        </div>

        {/* Quick Summaries & Visual Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-sans">Research Paradigm</h3>
              <p className="text-slate-350 text-sm leading-relaxed">
                Evaluating the climate risk to crop yield requires a multifaceted approach. By combining long-range climate projection models (CMIP6), multi-spectral satellite constellations (Sentinel/GRACE), and ground agrometeorological advisory services, we can transition from historical observation to real-time, proactive risk mitigation.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800 mt-6 text-xs text-slate-400 font-mono">
              Dr. Anil Kumar Singh &bull; Gorakhpur
            </div>
          </div>

          <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-800/80 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-lg font-mono text-emerald-400 mb-6 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5" /> Executive Summary
            </h3>
            
            <p className="text-slate-300 text-lg leading-relaxed font-sans mb-6">
              Over his **15-year career**, Dr. Singh has established a unique academic identity that sits squarely at the transition of **Environmental Data Science and Modern Agritech**. He has leveraged spatial intelligence to safeguard crop areas, trace glaciers in the Sikkim Himalayas, and consult for global banks on how climate change affects food security pipelines.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div className="border-l-2 border-emerald-500 pl-4 py-1.5">
                <span className="text-slate-400 block uppercase">PhD Specialization</span>
                <span className="text-white font-bold text-sm mt-0.5 block">Earth &amp; Planetary Sci</span>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4 py-1.5">
                <span className="text-slate-400 block uppercase">Alumnus Link</span>
                <span className="text-white font-bold text-sm mt-0.5 block">ISRO - IIRS</span>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4 py-1.5 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block uppercase">Technical Focus</span>
                <span className="text-emerald-400 font-bold text-sm mt-0.5 block">Python &amp; ML Modeling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`p-2.5 rounded-xl border ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-100 font-sans tracking-tight leading-none text-base">{cat.title}</h4>
                    <span className="text-[10px] font-mono text-slate-500 mt-1 block">{cat.description}</span>
                  </div>
                </div>

                <ul className="space-y-4 text-xs text-slate-300 font-sans mt-4 flex-grow">
                  {cat.points.map((point, k) => {
                    const [titleText, descText] = point.split(': ');
                    return (
                      <li key={k} className="flex gap-2">
                        <span className="text-emerald-400 font-bold mt-0.5 font-mono select-none">&bull;</span>
                        <p className="leading-relaxed">
                          <strong className="text-slate-200">{titleText}: </strong>
                          {descText}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Focus Mode Selection CSS selector identifiers */}
        <div id="research-expertise-tag-anchor" className="hidden" />

      </div>
    </section>
  );
}
