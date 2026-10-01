import React from 'react';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

export default function CTA() {
  const handleScrollToContact = (subject?: string) => {
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement;
    if (messageInput && subject) {
      messageInput.value = `Hi Aura! We are looking to ${subject}. Let's setup a call to plan the next steps...`;
    }
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cta" className="relative z-10 py-24 md:py-32 bg-brand-navy overflow-hidden px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative">
        {/* Animated Gradient Backdrop Frame */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/25 via-brand-purple/20 to-brand-pink/20 rounded-3xl blur-[80px] opacity-40 pointer-events-none" />

        {/* Core Glass Card Box */}
        <div className="relative rounded-3xl glass-panel border border-white/12 p-8 sm:p-16 md:p-20 text-center overflow-hidden shadow-2xl">
          {/* Animated Mesh gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_60%)] animate-pulse-slow" />

          {/* Micro pill */}
          <div className="relative z-10 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel-light border border-white/10 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-6 md:mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>let&apos;s collaborate</span>
          </div>

          <h2 className="relative z-10 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Ready to Build Something{' '}
            <span className="font-serif italic font-normal text-gradient-cyan-purple">Extraordinary</span>?
          </h2>

          <p className="relative z-10 font-sans text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mt-6 mb-10">
            Let&apos;s combine your industry insight with our design mastery. Together we can craft high-converting, unforgettable interactive masterpieces that set new industry benchmarks.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Start Project CTA */}
            <button
              onClick={() => handleScrollToContact('launch a brand new digital experience')}
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden font-display font-semibold tracking-wide text-[#101010] group focus:outline-none cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl transition-transform duration-500 group-hover:scale-105" />
              <span className="relative z-10 flex items-center justify-center space-x-2 text-[#101010]">
                <span className="text-[#101010]">Start Project</span>
                <ArrowUpRight className="w-5 h-5 text-[#101010] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Schedule Call CTA */}
            <button
              onClick={() => handleScrollToContact('schedule a quick discovery & brainstorming call')}
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden font-display font-semibold tracking-wide text-white group focus:outline-none border border-white/10 hover:border-brand-cyan/40 transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Calendar className="w-4.5 h-4.5 text-brand-cyan" />
                <span>Schedule Call</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
