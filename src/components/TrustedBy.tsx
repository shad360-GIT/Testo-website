import React from 'react';
import { Sparkles, Layers, Cpu, Code2, Globe, Disc, Command } from 'lucide-react';

export default function TrustedBy() {
  const logos = [
    { name: 'Acrux Digital', icon: Command, text: 'ACRUX' },
    { name: 'Cygnus Labs', icon: Layers, text: 'CYGNUS' },
    { name: 'Polaris Web3', icon: Cpu, text: 'POLARIS' },
    { name: 'Zenit Capital', icon: Globe, text: 'ZENIT' },
    { name: 'Vesper Luxury', icon: Disc, text: 'VESPER' },
    { name: 'Aether Group', icon: Code2, text: 'AETHER' },
  ];

  return (
    <section id="trusted-by" className="relative z-10 py-10 bg-brand-navy overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Glass Strip Container */}
        <div className="w-full glass-panel-light border border-white/8 rounded-2xl py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 shadow-xl">
          <div className="shrink-0 text-center md:text-left">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">TRUSTED BY INNOVATORS</p>
            <p className="text-xs text-slate-400 mt-1 font-sans">Powering premium campaigns and platforms.</p>
          </div>

          <div className="w-full md:w-auto overflow-hidden">
            {/* Grid of monochrome logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center">
              {logos.map((logo, i) => {
                const IconComponent = logo.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center space-x-1.5 opacity-40 hover:opacity-100 text-slate-400 hover:text-white transition-all duration-300 group cursor-default"
                  >
                    <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-brand-cyan transition-colors duration-300" />
                    <span className="font-display font-bold tracking-widest text-xs">{logo.text}</span>
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
