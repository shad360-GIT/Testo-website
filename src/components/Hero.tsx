import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import AIStatsChart from './AIStatsChart';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 35; // Sensitivity factor
      const y = (e.clientY - top - height / 2) / 35;
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
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
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden bg-brand-navy"
      style={{ paddingBottom: '20px' }}
    >
      {/* Animated Gradient Mesh / Background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-cyan/15 blur-[120px] animate-pulse-slow"
          style={{ transform: `translate3d(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px, 0)` }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-brand-purple/15 blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '3s', transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)` }}
        />
        {/* Subtle Floating Particles / Dots background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Micro pill badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel-light border border-white/10 text-brand-cyan text-xs font-mono tracking-wider uppercase animate-bounce-slow mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Award-Winning Creative Studio</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8 md:mb-10 max-w-5xl">
          We Design Digital{' '}
          <span className="relative">
            <span className="text-gradient-cyan-purple font-serif italic font-normal">Experiences</span>
            {/* Subtle underline glowing border */}
            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-white/20 blur-[1px]" />
          </span>{' '}
          That Move Businesses Forward
        </h1>

        {/* Below the Header: Text with chart merged and floated to the right */}
        <div className="w-full relative" style={{ height: '550px' }}>
          {/* Chart floated to the right on md+ screens so paragraph and surrounding elements wrap around it */}
          <div
            className="md:float-right md:ml-8 md:mb-6 lg:ml-12 mb-8 w-full sm:max-w-[380px] md:max-w-[400px] lg:max-w-[440px] transition-transform duration-300"
            style={{
              transform: `translate3d(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px, 0)`
            }}
          >
            <AIStatsChart />
          </div>

          <p className="font-sans text-slate-400 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl">
            We fuse cutting-edge glassmorphic UI design, high-performance creative development, and custom machine learning tools to shape industry leaders. No templates, no compromise.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            {/* Primary CTA */}
            <button
              onClick={() => handleScrollTo('portfolio')}
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden font-display font-semibold tracking-wide text-brand-navy group focus:outline-none cursor-pointer"
              id="hero-primary-cta"
            >
              <div className="absolute inset-0 bg-brand-cyan rounded-xl transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden font-display font-semibold tracking-wide text-white group focus:outline-none border border-white/10 hover:border-brand-cyan/40 transition-colors duration-300 cursor-pointer"
              id="hero-secondary-cta"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                <span>Book Discovery Call</span>
              </span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div
            className="grid grid-cols-3 gap-8 border-t border-white/5 text-center"
            style={{
              paddingTop: '0px',
              marginTop: '240px',
              marginBottom: '0px',
              marginLeft: '100px',
              width: '712px',
              maxWidth: '712px'
            }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white text-center">98%</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1 text-center">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white text-center">24</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1 text-center">Design Awards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white text-center">100%</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1 text-center">Custom Crafted</div>
            </div>
          </div>

          <div className="clear-both" />
        </div>
      </div>
    </section>
  );
}
