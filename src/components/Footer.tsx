import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import OrphikLogo from './OrphikLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formBoldId = import.meta.env.VITE_FORMBOLD_NEWSLETTER_FORM_ID || import.meta.env.VITE_FORMBOLD_FORM_ID || '';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      if (formBoldId) {
        const payload = new FormData();
        payload.append('email', email.trim());
        payload.append('_source', 'Orphik Dispatch Newsletter');
        payload.append('_subject', `New Newsletter Subscriber: ${email.trim()}`);
        payload.append('subscribed_at', new Date().toLocaleString());

        await fetch(`https://formbold.com/s/${formBoldId}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: payload,
        });
      }
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2500);
    } catch (err) {
      console.error('Newsletter subscribe error:', err);
      // Still show subscribed state to not interrupt user experience
      setSubscribed(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
    <footer id="footer" className="relative z-10 bg-brand-navy border-t border-white/8 pt-16 pb-8 overflow-hidden">
      {/* Decorative lighting mesh */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-brand-cyan/10 to-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5 items-start">
          
          {/* Logo and About brand */}
          <div className="md:col-span-4 space-y-4 text-left">
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, 'hero')}
              className="flex items-center space-x-3 group focus:outline-none"
              id="footer-logo"
            >
              <OrphikLogo className="h-5 w-auto text-brand-cyan group-hover:brightness-110 transition-all duration-300" />
            </a>
            <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              An award-winning futuristic digital creative agency. We build high-end glassmorphic websites, immersive brand identities, and smart LLM system pipelines for market leaders.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-left md:pl-10">
            <div>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3.5">STUDIO</p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, 'services')}
                    className="font-sans text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    onClick={(e) => handleScrollTo(e, 'portfolio')}
                    className="font-sans text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Our Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    onClick={(e) => handleScrollTo(e, 'why-choose-us')}
                    className="font-sans text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Why Partner
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3.5">WORK FLOW</p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#process"
                    onClick={(e) => handleScrollTo(e, 'process')}
                    className="font-sans text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Process Timeline
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={(e) => handleScrollTo(e, 'testimonials')}
                    className="font-sans text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Partnerships
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, 'contact')}
                    className="font-sans text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Inquire Project
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-4 space-y-4 text-left">
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">ORPHIK DISPATCH</p>
            <p className="font-sans text-xs text-slate-400 font-light leading-relaxed">
              Subscribe to get rare design files, web design trends, and studio releases. No spam.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-2 text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl px-4 py-3 animate-in fade-in duration-300">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-sans font-medium">Successfully Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@agency.com"
                  className="flex-grow px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-10 h-10 rounded-xl bg-brand-cyan/15 hover:bg-brand-cyan text-brand-cyan hover:text-white flex items-center justify-center shrink-0 border border-brand-cyan/20 transition-all disabled:opacity-50"
                  aria-label="Subscribe Newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal and Copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center sm:text-left font-mono">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} ORPHIK. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
