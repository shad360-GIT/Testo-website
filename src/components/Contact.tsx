import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Twitter, Linkedin, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [selectedBudget, setSelectedBudget] = useState('$50k – $100k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const budgetOptions = [
    '<$25k',
    '$25k – $50k',
    '$50k – $100k',
    '$100k+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', message: '' });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 bg-brand-navy overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information & Socials */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-light border border-white/5 text-brand-cyan text-xs font-mono tracking-wider uppercase">
                <span>get in touch</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Let&apos;s <span className="font-serif italic font-normal text-gradient-cyan-purple">Create Together</span><span className="text-brand-cyan">.</span>
              </h2>
              <p className="font-sans text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                Have an ambitious challenge or a design concept ready to deploy? Fill out our custom project inquiry. Our lead designers respond within 24 hours.
              </p>
            </div>

            {/* Structured Info items */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl glass-panel-light border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">EMAIL US</span>
                  <a
                    href="mailto:admin@orphik.com"
                    className="font-sans text-sm sm:text-base text-slate-200 hover:text-white hover:underline transition-all mt-0.5 inline-block"
                  >
                    admin@orphik.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl glass-panel-light border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">CALL US</span>
                  <a
                    href="tel:9176996309"
                    className="font-sans text-sm sm:text-base text-slate-200 hover:text-white hover:underline transition-all mt-0.5 inline-block"
                  >
                    917.699.6309
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl glass-panel-light border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">VISIT STUDIO</span>
                  <p className="font-sans text-sm sm:text-base text-slate-200 mt-0.5 leading-relaxed">
                    288 Portage Avenue, SI, NY 10314
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">FOLLOW OUR DESIGNS</span>
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass-panel-light border border-white/10 hover:border-brand-cyan/40 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="GitHub Link"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass-panel-light border border-white/10 hover:border-brand-cyan/40 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter Link"
                >
                  <Twitter className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass-panel-light border border-white/10 hover:border-brand-cyan/40 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn Link"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form inside Frosted glass */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-3xl glass-panel border border-white/12 p-8 sm:p-10 shadow-2xl overflow-hidden">
              {/* Subtle visual gradient header Inside Form card */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple" />

              {submitSuccess ? (
                /* Success feedback state */
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-2">
                    <CheckCircle className="w-8 h-8 animate-bounce-slow" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
                    <p className="font-sans text-slate-400 text-sm max-w-md mx-auto font-light leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. We have saved your project budget parameters (<span className="text-brand-cyan font-mono">{selectedBudget}</span>) and details. One of our lead designers will contact you shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white border border-white/8 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                /* Main interactive form layout */
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="flex items-center space-x-2 text-brand-cyan mb-6">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-mono text-xs uppercase tracking-widest font-semibold">PROJECT PLANNER</span>
                  </div>

                  {/* Dual Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/8 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/8 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Company / Organization</label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="My Company Inc."
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/8 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300"
                    />
                  </div>

                  {/* Interactive Project Budget Bento select */}
                  <div className="space-y-3">
                    <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Project Budget Range</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {budgetOptions.map((opt) => {
                        const isSel = selectedBudget === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedBudget(opt)}
                            className={`py-3 px-2 rounded-xl text-xs font-mono tracking-wider text-center border transition-all duration-300 ${
                              isSel
                                ? 'bg-brand-cyan/20 border-brand-cyan text-white font-semibold'
                                : 'bg-brand-navy/40 border-white/5 hover:border-white/12 text-slate-400 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Project Scope & Guidelines</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your design objectives, requirements, target timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/8 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative inline-flex items-center justify-center py-4 rounded-xl overflow-hidden font-display font-semibold tracking-wide text-white group focus:outline-none cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" />
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Routing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
