import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Check } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative z-10 py-24 md:py-32 bg-brand-navy overflow-hidden">
      {/* Decorative ambient glowing grids */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-light border border-white/5 text-brand-cyan text-xs font-mono tracking-wider uppercase">
              <span>how we operate</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              The Process <span className="font-serif italic font-normal text-gradient-cyan-purple">Timeline</span><span className="text-brand-cyan">.</span>
            </h2>
            <p className="font-sans text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              We leverage an organized 6-stage lifecycle, ensuring transparent milestones, rigorous engineering, and total creative control.
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <span className="font-mono text-xs text-slate-500 block uppercase tracking-widest">TIMELINE FLOW</span>
            <span className="font-display text-sm text-slate-300 font-medium mt-1 inline-block">10 Weeks to Absolute Excellence</span>
          </div>
        </div>

        {/* Responsive Connector and steps */}
        <div className="relative">
          {/* Timeline continuous connecting horizontal line (Desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-white/5 z-0">
            <div className="w-full h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink" />
          </div>

          {/* Grid Layout (Translates to vertical on smaller screens, horizontal on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.id}
                className="relative rounded-3xl p-6 text-left border bg-brand-dark/90 border-brand-cyan/40 shadow-xl shadow-brand-cyan/5 glass-glow-cyan flex flex-col"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full border bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 font-bold uppercase">{step.duration}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Deliverables list (Always visible) */}
                <div className="text-left mt-auto pt-4 border-t border-white/5">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Deliverables:</p>
                  <div className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-300 font-sans leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
