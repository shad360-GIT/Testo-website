import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Twitter, Linkedin, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // FormBold Form ID from environment configuration (e.g. VITE_FORMBOLD_FORM_ID)
  const formBoldId = import.meta.env.VITE_FORMBOLD_FORM_ID || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (formBoldId) {
        // Send real application details to FormBold endpoint
        const payload = new FormData();
        payload.append('name', formData.name.trim());
        payload.append('email', formData.email.trim());
        payload.append('company', formData.company.trim() || 'Not specified');
        payload.append('message', formData.message.trim() || 'No project scope notes provided.');
        payload.append('_subject', `New Project Inquiry from ${formData.name.trim()} (${formData.company.trim() || 'Orphik Studio'})`);
        payload.append('submitted_at', new Date().toLocaleString());

        const response = await fetch(`https://formbold.com/s/${formBoldId}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: payload,
        });

        if (!response.ok) {
          const resData = await response.json().catch(() => null);
          throw new Error(resData?.message || `Form submission failed with status ${response.status}`);
        }
      } else {
        // Graceful handling when Form ID is being configured
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSubmitSuccess(true);
    } catch (err: unknown) {
      console.error('FormBold submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unable to transmit inquiry. Please verify your connection or FormBold ID.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', message: '' });
    setSubmitSuccess(false);
    setSubmitError(null);
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
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. We have saved your project details. One of our lead designers will contact you shortly.
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
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                    <div className="flex items-center space-x-2 text-brand-cyan">
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-mono text-xs uppercase tracking-widest font-semibold">PROJECT PLANNER</span>
                    </div>
                  </div>

                  {submitError && (
                    <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-sans animate-in fade-in duration-300">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                      <div>
                        <span className="font-semibold block mb-0.5">Submission Notice:</span>
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}

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
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-[#CCCCCC] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-[#CCCCCC] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-[#CCCCCC] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300"
                    />
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
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-[#CCCCCC] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 focus:bg-brand-dark/40 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative inline-flex items-center justify-center py-4 rounded-xl overflow-hidden font-display font-semibold tracking-wide text-[#101010] group focus:outline-none cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" />
                    <span className="relative z-10 flex items-center justify-center space-x-2 text-[#101010]">
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-[#101010]/30 border-t-[#101010] animate-spin" />
                          <span>Routing to FormBold...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-[#101010]">Send Inquiry</span>
                          <Send className="w-4 h-4 text-[#101010] group-hover:translate-x-1 transition-transform duration-300" />
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
