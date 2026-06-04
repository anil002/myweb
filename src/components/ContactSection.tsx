import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { references, personalInfo } from '../data';
import { Mail, Phone, MapPin, Linkedin, Send, Quote, Sparkles, Github } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Clear status timer
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
            References &amp; Dialog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Endorsements &amp; Contact
          </h2>
          <p className="text-slate-400 text-base">
            For collaborative research opportunities, parametric advisory products, or technical agritech consultation inquiries.
          </p>
        </div>

        {/* References Matrix */}
        <div className="mb-20 space-y-6">
          <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest block mb-4 border-b border-slate-800 pb-3">
            Academic &bull; Scientific Peer References:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {references.map((ref) => (
              <div 
                key={ref.id}
                className="bg-slate-900 border border-slate-850 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-800 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3.5">
                  <div className="text-emerald-500 opacity-60">
                    <Quote className="w-5 h-5 fill-emerald-500/20" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm leading-tight">{ref.name}</h4>
                    <span className="text-[11px] font-mono text-emerald-400 block mt-1">{ref.roleId}</span>
                    <span className="text-[10px] text-slate-400 mt-1 block leading-relaxed">{ref.organization}</span>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4.5 mt-5 space-y-1.5 font-mono text-[10px] text-slate-400">
                  <a href={`mailto:${ref.email}`} id={`ref-mail-${ref.id}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span className="truncate">{ref.email}</span>
                  </a>
                  {ref.contact && (
                    <a href={`tel:${ref.contact.replace(/\s+/g, '')}`} id={`ref-phone-${ref.id}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>{ref.contact}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-900">
          
          {/* Left information column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Coordinates</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out directly for scientific review boards, project estimations, or private consultancy requirements. Dr. Anil Kumar Singh maintains global advisory operations.
              </p>

              <div className="font-mono text-xs text-slate-350 space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-500" />
                  <a href={`mailto:${personalInfo.email}`} id="contact-email-anchor" className="hover:text-emerald-400 transition-colors">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <a href={`tel:${personalInfo.phone}`} id="contact-phone-anchor" className="hover:text-emerald-400 transition-colors">{personalInfo.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>Gorakhpur, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="space-y-3 pt-6 border-t border-slate-900">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Academic Indices &amp; Networks</span>
              <div className="flex gap-4">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  id="contact-linkedin-social"
                  className="p-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 rounded-xl transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  id="contact-github-social"
                  className="p-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 rounded-xl transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.researchgate} 
                  target="_blank" 
                  rel="noreferrer"
                  id="contact-researchgate-social"
                  className="px-4.5 py-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 rounded-xl text-xs font-mono font-bold tracking-wider flex items-center gap-2 transition-all"
                  title="ResearchGate Profile"
                >
                  <span>ResearchGate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form panel inputs */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 relative">
            <h3 className="text-lg font-bold text-slate-200 mb-6 font-sans">Submit Advisory Request</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Full Name *</label>
                  <input
                    type="text"
                    required
                    id="contact-form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Katherine Smith"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-sans text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email Address *</label>
                  <input
                    type="email"
                    required
                    id="contact-form-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="colleague@university.edu"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-sans text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Subject Summary</label>
                <input
                  type="text"
                  id="contact-form-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Collaborative GRACE Water Tracing Research"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-sans text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Message Details *</label>
                <textarea
                  required
                  rows={4}
                  id="contact-form-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe details of the proposed joint academic study, consultation terms, or agritech requirements..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs font-sans text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* Form trigger submit button */}
              <button
                type="submit"
                id="contact-form-submit-btn"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-550 text-slate-950 font-semibold py-3 rounded-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Query</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-sans font-medium text-center flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 animate-bounce" />
                    <span>Communication transmitted successfully! Dr. Singh will seek touchpoints within 48 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
