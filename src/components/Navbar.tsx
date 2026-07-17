import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import orphikLogo from '../assets/images/orphik_logo_1784264317690.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-5 bg-brand-navy/85 backdrop-blur-lg border-b border-white/8 shadow-lg shadow-black/25'
          : 'py-10 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center space-x-4 group focus:outline-none"
          id="nav-logo"
        >
          {/* Note: If you want to restore the dashed empty placeholder, swap the code below with:
              <div className="w-[150px] h-[60px] bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-[10px] tracking-widest text-slate-500 font-mono">
                [LOGO]
              </div>
          */}
          <img
            src={orphikLogo}
            alt="Orphik Logo"
            className="w-[150px] h-[60px] object-contain mix-blend-screen group-hover:scale-105 transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className="font-sans text-base lg:text-lg font-medium text-slate-300 hover:text-brand-cyan hover:scale-105 hover:shadow-[0_2px_0_rgba(203,232,44,0.8)] transition-all duration-300 py-1"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleLinkClick(e, 'portfolio')}
            className="font-sans text-base lg:text-lg font-medium text-slate-300 hover:text-brand-cyan hover:scale-105 hover:shadow-[0_2px_0_rgba(203,232,44,0.8)] transition-all duration-300 py-1"
          >
            Portfolio
          </a>
          <a
            href="#why-choose-us"
            onClick={(e) => handleLinkClick(e, 'why-choose-us')}
            className="font-sans text-base lg:text-lg font-medium text-slate-300 hover:text-brand-cyan hover:scale-105 hover:shadow-[0_2px_0_rgba(203,232,44,0.8)] transition-all duration-300 py-1"
          >
            Why Us
          </a>
          <a
            href="#process"
            onClick={(e) => handleLinkClick(e, 'process')}
            className="font-sans text-base lg:text-lg font-medium text-slate-300 hover:text-brand-cyan hover:scale-105 hover:shadow-[0_2px_0_rgba(203,232,44,0.8)] transition-all duration-300 py-1"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="font-sans text-base lg:text-lg font-medium text-slate-300 hover:text-brand-cyan hover:scale-105 hover:shadow-[0_2px_0_rgba(203,232,44,0.8)] transition-all duration-300 py-1"
          >
            Contact
          </a>
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden font-display text-base font-bold tracking-wide text-white group focus:outline-none shadow-lg shadow-brand-cyan/10"
            id="nav-cta"
          >
            <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-brand-cyan/30 rounded-full transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center space-x-1.5">
              <span>Start Your Project</span>
              <span className="text-brand-cyan group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl glass-panel-light text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 ${
          isScrolled ? 'top-[92px]' : 'top-[112px]'
        } glass-panel border-b border-white/10 transition-all duration-300 origin-top overflow-hidden z-40 ${
          isMobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className="font-sans text-lg text-slate-300 hover:text-white py-2"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleLinkClick(e, 'portfolio')}
            className="font-sans text-lg text-slate-300 hover:text-white py-2"
          >
            Portfolio
          </a>
          <a
            href="#why-choose-us"
            onClick={(e) => handleLinkClick(e, 'why-choose-us')}
            className="font-sans text-lg text-slate-300 hover:text-white py-2"
          >
            Why Us
          </a>
          <a
            href="#process"
            onClick={(e) => handleLinkClick(e, 'process')}
            className="font-sans text-lg text-slate-300 hover:text-white py-2"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="font-sans text-lg text-slate-300 hover:text-white py-2"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="w-full text-center py-3 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/30 rounded-xl font-display text-sm font-semibold text-white mt-4 block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </nav>
  );
}
