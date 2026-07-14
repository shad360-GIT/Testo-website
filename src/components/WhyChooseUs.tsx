import React, { useState } from 'react';
import { WORKSPACE_ASSET, BENEFITS } from '../data';
import { Award, Users, Smile, CheckCircle, Flame, Target } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeBenefitId, setActiveBenefitId] = useState<string | null>(BENEFITS[0].id);

  const icons: Record<string, React.ComponentType<any>> = {
    years: Flame,
    projects: Target,
    satisfaction: Smile,
    awards: Award
  };

  return (
    <section id="why-choose-us" className="relative z-10 py-24 md:py-32 bg-brand-navy overflow-hidden">
      {/* Visual lighting mesh */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Agency Image and Floating Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group">
              <img
                src={WORKSPACE_ASSET}
                alt="Orphik Creative Workspace"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

              {/* Floating interactive card inside image */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel border border-white/10 rounded-2xl p-5 shadow-2xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-brand-cyan tracking-wider uppercase">DESIGN STUDIO</p>
                  <p className="text-base font-display font-bold text-white mt-1">Orphik Studio, NYC</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono text-slate-300">Operational</span>
                </div>
              </div>
            </div>

            {/* Glowing orb accent behind image */}
            <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-brand-cyan/20 blur-[50px] pointer-events-none z-0" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-brand-purple/20 blur-[50px] pointer-events-none z-0" />
          </div>

          {/* Right Column: Benefits & Animated Statistics */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-light border border-white/5 text-brand-cyan text-xs font-mono tracking-wider uppercase">
                <span>why partner with us</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Uncompromising <span className="font-serif italic font-normal text-gradient-cyan-purple">Quality</span><span className="text-brand-cyan">.</span>
              </h2>
              <p className="font-sans text-slate-400 text-base sm:text-lg font-light leading-relaxed">
                We believe that premium software requires extreme precision. We don&apos;t build cookie-cutter websites; we orchestrate immersive digital journeys that scale.
              </p>
            </div>

            {/* Benefits Stack */}
            <div className="space-y-4">
              {BENEFITS.map((benefit) => {
                const IconComponent = icons[benefit.id] || CheckCircle;
                const isActive = activeBenefitId === benefit.id;

                return (
                  <div
                    key={benefit.id}
                    onMouseEnter={() => setActiveBenefitId(benefit.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex items-start space-x-5 ${
                      isActive
                        ? 'bg-brand-dark/80 border-brand-cyan/40 glass-glow-cyan'
                        : 'bg-white/3 border-white/5 hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-cyan/25 border-brand-cyan/40 text-brand-cyan'
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline space-x-3">
                        <span className="font-display text-2xl font-bold text-white leading-none">
                          {benefit.value}
                        </span>
                        <span className="font-display text-base font-semibold text-slate-200">
                          {benefit.label}
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
