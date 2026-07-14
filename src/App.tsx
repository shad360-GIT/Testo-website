import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ProcessTimeline from './components/ProcessTimeline';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global listener to check if we are hovering over an interactive element (button, link, input, card)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glass-card') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div className="relative min-h-screen bg-brand-navy font-sans text-slate-200 overflow-x-hidden selection:bg-white/20 selection:text-white">
      
      {/* Premium Custom Glass Cursor (Hidden on Touch devices / Mobile) */}
      <div
        className={`hidden sm:block fixed pointer-events-none z-50 rounded-full transition-all duration-300 mix-blend-difference -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHoveringInteractive
            ? 'w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-sm'
            : 'w-4 h-4 bg-white border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transitionProperty: 'width, height, background-color, border, opacity',
          transitionDuration: '250ms'
        }}
      />

      {/* Decorative ambient lighting streaks across the screen */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none z-0" />

      {/* Structured Sections layout */}
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <ProcessTimeline />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
