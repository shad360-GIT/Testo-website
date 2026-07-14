import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="relative z-10 py-24 md:py-32 bg-brand-navy overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Visual neon light orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-light border border-white/5 text-brand-cyan text-xs font-mono tracking-wider uppercase">
            <span>testimonials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Our <span className="font-serif italic font-normal text-gradient-cyan-purple">Partners Say</span><span className="text-brand-cyan">.</span>
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            We measure our own success entirely by the rapid growth, technical milestones, and high-end aesthetics achieved by our clients.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative max-w-4xl mx-auto min-h-[320px]">
          {/* Main Card */}
          <div className="relative w-full rounded-3xl glass-panel border border-white/12 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/18">
            {/* Ambient subtle decorative light inside card */}
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-brand-cyan/10 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-brand-purple/10 blur-[60px] pointer-events-none" />

            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 w-10 h-10 sm:w-16 sm:h-16 text-white/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 text-left">
              {/* Photo & Identity Column */}
              <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left space-y-3 w-full md:w-auto">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-cyan/30 shadow-lg shadow-brand-cyan/15">
                  <img
                    src={TESTIMONIALS[activeIndex].avatarUrl}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-0.5">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                  <p className="font-mono text-[10px] text-brand-cyan tracking-wider uppercase mt-1">
                    {TESTIMONIALS[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Star Rating and Quote Column */}
              <div className="flex-grow space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 justify-start">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>

                <blockquote className="font-sans text-base sm:text-lg md:text-xl text-slate-200 font-light italic leading-relaxed">
                  &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Controls (Absolute or Floating over desktop) */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass-panel-light border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center focus:outline-none transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slides Indicators */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex ? 'w-6 bg-brand-cyan' : 'w-2.5 bg-white/20 hover:bg-white/45'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass-panel-light border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center focus:outline-none transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
