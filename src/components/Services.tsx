import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Figma, Layers, Sparkles, Code2, Cpu, Play, ArrowRight, Check } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Figma: Figma,
  Layers: Layers,
  Sparkles: Sparkles,
  Code2: Code2,
  Cpu: Cpu,
  Play: Play
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleLearnMore = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    if (expandedId === serviceId) {
      setExpandedId(null);
    } else {
      setExpandedId(serviceId);
    }
  };

  const handleInquire = (serviceName: string) => {
    // Fill contact form subject and scroll to it
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement;
    if (messageInput) {
      messageInput.value = `Hi Aura! We would love to collaborate on a ${serviceName} project. Let's discuss details...`;
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
    <section
      id="services"
      className="relative z-10 bg-brand-navy overflow-hidden"
      style={{ paddingTop: '60px', paddingBottom: '128px' }}
    >
      {/* Decorative gradient light */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-light border border-white/5 text-brand-cyan text-xs font-mono tracking-wider uppercase">
              <span>capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              What We <span className="font-serif italic font-normal text-gradient-cyan-purple">Do</span><span className="text-brand-cyan">.</span>
            </h2>
            <p className="font-sans text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              We design, build, and scale exceptional digital products. Every deliverable is bespoke, engineered to outshine competitors and captivate your audience.
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <span className="font-mono text-xs text-slate-500 block uppercase tracking-widest">Aura Core Method</span>
            <span className="font-display text-sm text-slate-300 font-medium mt-1 inline-block">Absolute Polish & Performance</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const isHovered = hoveredIndex === index;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`relative rounded-3xl glass-card transition-all duration-500 overflow-hidden flex flex-col h-full cursor-default ${
                  isHovered ? 'glass-glow-cyan -translate-y-2 border-white/20' : 'border-white/8'
                } ${isExpanded ? 'lg:col-span-1 border-brand-cyan/30 bg-brand-dark/60' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Visual top border glow */}
                <div
                  className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="p-8 flex-grow flex flex-col space-y-5">
                  {/* Icon Frame */}
                  <div className="relative w-14 h-14 rounded-2xl glass-panel-light border border-white/10 flex items-center justify-center overflow-hidden shrink-0 group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 transition-all duration-500 ${
                        isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
                      }`}
                    />
                    <IconComponent
                      className={`w-6 h-6 transition-all duration-300 ${
                        isHovered ? 'text-white scale-110' : 'text-brand-cyan'
                      }`}
                    />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="font-sans text-slate-400 text-sm font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Expandable Features list */}
                  <div
                    className={`transition-all duration-500 overflow-hidden text-left ${
                      isExpanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-white/5 space-y-3">
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Deliverables:</p>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 font-sans">{feature}</span>
                        </div>
                      ))}

                      <button
                        onClick={() => handleInquire(service.title)}
                        className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan/15 to-brand-purple/15 hover:from-brand-cyan/25 hover:to-brand-purple/25 text-xs text-brand-cyan hover:text-white font-mono uppercase tracking-wider font-semibold border border-brand-cyan/25 transition-all duration-300"
                      >
                        Inquire About {service.title}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Action bar */}
                  <div className="pt-4 flex items-center justify-between mt-auto">
                    <button
                      onClick={(e) => handleLearnMore(e, service.id)}
                      className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-wider text-brand-cyan hover:text-white transition-colors duration-300"
                    >
                      <span>{isExpanded ? 'Collapse Info' : 'Learn More'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </button>
                    <span className="font-mono text-xs text-slate-600 font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
