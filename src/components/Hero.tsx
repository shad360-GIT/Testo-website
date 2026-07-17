import React, { useState, useEffect, useRef } from 'react';
import { HERO_ASSET } from '../data';
import { ArrowUpRight, Play, Sparkles, Check, ChevronRight } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          {/* Micro pill badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel-light border border-white/10 text-brand-cyan text-xs font-mono tracking-wider uppercase animate-bounce-slow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Award-Winning Creative Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
            We Design Digital{' '}
            <span className="relative">
              <span className="text-gradient-cyan-purple font-serif italic font-normal">Experiences</span>
              {/* Subtle underline glowing border */}
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-white/20 blur-[1px]" />
            </span>{' '}
            That Move Businesses Forward
          </h1>

          <p className="font-sans text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            We fuse cutting-edge glassmorphic UI design, high-performance creative development, and custom machine learning tools to shape industry leaders. No templates, no compromise.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
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
          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/5 w-full max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">98%</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">24</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">Design Awards</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">100%</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">Custom Crafted</div>
            </div>
          </div>
        </div>

        {/* Right Side Glass Illustration with Parallax */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
          <div
            className="relative w-full max-w-[440px] aspect-square flex items-center justify-center transition-all duration-300 ease-out"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
            }}
          >
            {/* Soft background glow underneath the illustration */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/30 rounded-full blur-[60px] opacity-75 z-0" />

            {/* Core floating illustration container */}
            <div className="relative w-full h-full rounded-3xl glass-panel border border-white/15 p-4 z-10 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src={HERO_ASSET}
                alt="Futuristic Glass Abstract Artwork"
                className="w-full h-full object-cover rounded-2xl opacity-90 brightness-110"
                referrerPolicy="no-referrer"
              />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            </div>

            {/* Floating Glass UI Card 1 */}
            <div
              className="absolute -top-6 -right-6 glass-panel-light border border-white/10 rounded-2xl p-4 shadow-xl z-20 max-w-[200px] flex items-start space-x-3 transition-transform duration-300"
              style={{ transform: `translate3d(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px, 30px)` }}
            >
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 shrink-0 text-brand-cyan">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-slate-400">Campaign ROI</p>
                <p className="text-base font-display font-bold text-white">+145%</p>
              </div>
            </div>

            {/* Floating Glass UI Card 2 (Dashboard Mockup excerpt) */}
            <div
              className="absolute -bottom-8 -left-8 glass-panel border border-white/15 rounded-2xl p-4 shadow-2xl z-20 max-w-[240px] text-left transition-transform duration-300"
              style={{ transform: `translate3d(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px, 50px)` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">NEBULA CORE</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono">LIVE</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="h-full w-2/3 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span>Throughput</span>
                <span className="text-white">942 tx/s</span>
              </div>
            </div>

            {/* Extra Floating Sparkle Blobs / Light sparkles */}
            <div
              className="absolute top-12 -left-10 w-6 h-6 rounded-full bg-brand-pink/40 blur-[4px] animate-pulse z-20"
              style={{ transform: `translate3d(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.3}px, 10px)` }}
            />
            <div
              className="absolute bottom-16 -right-12 w-4 h-4 rounded-full bg-brand-cyan/40 blur-[3px] animate-pulse z-20"
              style={{ transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * -0.3}px, 15px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
