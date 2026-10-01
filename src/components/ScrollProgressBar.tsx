import React, { useState, useEffect } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

const COLOR_STOPS: { stop: number; color: RGB }[] = [
  { stop: 0, color: { r: 203, g: 232, b: 44 } },   // #cbe82c (Brand Neon Lime)
  { stop: 35, color: { r: 56, g: 189, b: 248 } },  // #38bdf8 (Electric Cyan)
  { stop: 70, color: { r: 168, g: 85, b: 247 } },  // #a855f7 (Vibrant Purple)
  { stop: 100, color: { r: 244, g: 63, b: 94 } },  // #f43f5e (Neon Rose)
];

function getInterpolatedColor(percentage: number): string {
  const clamped = Math.max(0, Math.min(100, percentage));

  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    const current = COLOR_STOPS[i];
    const next = COLOR_STOPS[i + 1];

    if (clamped >= current.stop && clamped <= next.stop) {
      const range = next.stop - current.stop;
      const factor = range === 0 ? 0 : (clamped - current.stop) / range;
      const r = Math.round(current.color.r + (next.color.r - current.color.r) * factor);
      const g = Math.round(current.color.g + (next.color.g - current.color.g) * factor);
      const b = Math.round(current.color.b + (next.color.b - current.color.b) * factor);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }

  const last = COLOR_STOPS[COLOR_STOPS.length - 1].color;
  return `rgb(${last.r}, ${last.g}, ${last.b})`;
}

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight <= 0) {
        setScrollProgress(0);
      } else {
        const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(pct);
      }
      rafId = null;
    };

    const handleScrollOrResize = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const startColor = getInterpolatedColor(scrollProgress * 0.25);
  const midColor = getInterpolatedColor(scrollProgress * 0.65);
  const activeColor = getInterpolatedColor(scrollProgress);
  const barWidth = scrollProgress * 10; // Scaled to 0 - 1000 viewBox width

  return (
    <div
      id="scroll-progress-bar"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none overflow-visible"
    >
      <svg
        viewBox="0 0 1000 3"
        preserveAspectRatio="none"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          <linearGradient id="scroll-progress-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="55%" stopColor={midColor} />
            <stop offset="100%" stopColor={activeColor} />
          </linearGradient>
          <filter id="scroll-progress-glow" x="-5%" y="-200%" width="110%" height="500%">
            <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor={activeColor} floodOpacity="0.9" />
          </filter>
        </defs>

        {/* Subtle full-width track */}
        <rect x="0" y="0" width="1000" height="3" fill="rgba(255, 255, 255, 0.05)" />

        {/* Dynamic color-changing progress bar */}
        {barWidth > 0 && (
          <rect
            x="0"
            y="0"
            width={barWidth}
            height="3"
            fill="url(#scroll-progress-grad)"
            filter="url(#scroll-progress-glow)"
          />
        )}
      </svg>
    </div>
  );
}
