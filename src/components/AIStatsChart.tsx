import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles } from 'lucide-react';

interface DataPoint {
  x: number; // 0 - 100
  y: number; // 0 - 100 (0 is top, 100 is bottom)
  year: string;
  value: string;
  metric: string;
}

// Points accurately mapping the curve from the reference image
const POINTS: DataPoint[] = [
  { x: 2, y: 88, year: '2018 Q1', value: '12%', metric: 'AI Adoption' },
  { x: 5, y: 86, year: '2018 Q2', value: '14%', metric: 'AI Adoption' },
  { x: 9, y: 87, year: '2018 Q3', value: '13%', metric: 'AI Adoption' },
  { x: 13, y: 85, year: '2018 Q4', value: '15%', metric: 'AI Adoption' },
  { x: 17, y: 88, year: '2018 Q4', value: '13%', metric: 'AI Adoption' },
  { x: 21, y: 85, year: '2019 Q1', value: '16%', metric: 'Compute Growth' },
  { x: 25, y: 84, year: '2019 Q2', value: '17%', metric: 'Compute Growth' },
  { x: 29, y: 82, year: '2019 Q3', value: '19%', metric: 'Compute Growth' },
  { x: 33, y: 80, year: '2019 Q4', value: '22%', metric: 'Compute Growth' },
  { x: 37, y: 83, year: '2019 Q4', value: '18%', metric: 'Compute Growth' },
  { x: 41, y: 78, year: '2020 Q1', value: '24%', metric: 'Parameters (B)' },
  { x: 45, y: 72, year: '2020 Q2', value: '31%', metric: 'Parameters (B)' },
  { x: 49, y: 77, year: '2020 Q3', value: '26%', metric: 'Parameters (B)' },
  { x: 53, y: 75, year: '2020 Q4', value: '28%', metric: 'Parameters (B)' },
  { x: 57, y: 71, year: '2020 Q4', value: '33%', metric: 'Model Velocity' },
  { x: 61, y: 62, year: '2021 Q1', value: '44%', metric: 'Model Velocity' },
  { x: 65, y: 58, year: '2021 Q2', value: '49%', metric: 'Model Velocity' },
  { x: 69, y: 48, year: '2021 Q3', value: '62%', metric: 'Global Investment' },
  { x: 73, y: 36, year: '2021 Q4', value: '75%', metric: 'Global Investment' },
  { x: 77, y: 42, year: '2021 Q4', value: '69%', metric: 'Global Investment' },
  { x: 81, y: 28, year: '2022 Q1', value: '84%', metric: 'Enterprise Impact' },
  { x: 85, y: 34, year: '2022 Q2', value: '78%', metric: 'Enterprise Impact' },
  { x: 89, y: 22, year: '2022 Q3', value: '91%', metric: 'Enterprise Impact' },
  { x: 93, y: 14, year: '2022 Q4', value: '96%', metric: 'Production Deploy' },
  { x: 96, y: 19, year: '2022 Q4', value: '92%', metric: 'Production Deploy' },
  { x: 99, y: 6, year: '2022 Q4', value: '99.4%', metric: 'Production Deploy' }
];

// Generate SVG Path data
const svgWidth = 360;
const svgHeight = 220;

function getCoordinates(pt: { x: number; y: number }) {
  const x = (pt.x / 100) * svgWidth;
  const y = (pt.y / 100) * svgHeight;
  return { x, y };
}

const linePathData = POINTS.reduce((acc, pt, index) => {
  const { x, y } = getCoordinates(pt);
  return index === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
}, '');

const lastPt = getCoordinates(POINTS[POINTS.length - 1]);
const firstPt = getCoordinates(POINTS[0]);
const areaPathData = `${linePathData} L ${lastPt.x} ${svgHeight} L ${firstPt.x} ${svgHeight} Z`;

export default function AIStatsChart() {
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
    
    // Find closest data point
    let closest = POINTS[0];
    let minDiff = 100;
    for (const pt of POINTS) {
      const diff = Math.abs(pt.x - relativeX);
      if (diff < minDiff) {
        minDiff = diff;
        closest = pt;
      }
    }
    setHoveredPoint(closest);
    const coords = getCoordinates(closest);
    setMousePos({ x: (coords.x / svgWidth) * rect.width, y: (coords.y / svgHeight) * rect.height });
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
    setMousePos(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[420px] mx-auto group"
      id="hero-ai-stats-chart"
    >
      {/* Outer ambient frosted glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Glassmorphic Card Container */}
      <div className="relative rounded-[24px] backdrop-blur-2xl bg-gradient-to-b from-white/[0.12] via-slate-900/70 to-slate-950/85 p-3.5 sm:p-4 border border-white/20 border-t-white/35 border-l-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.05)] overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_24px_60px_rgba(56,189,248,0.18),inset_0_1px_2px_rgba(255,255,255,0.4)]">
        
        {/* Prismatic Top Glass Specular Highlight */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent pointer-events-none" />
        
        {/* Subtle diagonal glass light streak */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* SVG Chart Container */}
        <div className="relative w-full aspect-[360/220] rounded-2xl overflow-hidden pt-1 bg-black/20 backdrop-blur-md border border-white/10 shadow-inner">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-full cursor-crosshair overflow-visible"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              {/* Glass Area Gradient */}
              <linearGradient id="ai-chart-glass-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#60a5fa" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#818cf8" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.00" />
              </linearGradient>

              {/* Glowing Line Stroke Gradient */}
              <linearGradient id="ai-chart-glass-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>

              {/* Glass Glow Filter */}
              <filter id="glass-line-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.75" />
                <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#2563eb" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Horizontal Dashed Glass Grid Lines */}
            <g stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 4">
              <line x1="0" y1="35" x2={svgWidth} y2="35" />
              <line x1="0" y1="75" x2={svgWidth} y2="75" />
              <line x1="0" y1="120" x2={svgWidth} y2="120" />
              <line x1="0" y1="165" x2={svgWidth} y2="165" />
            </g>

            {/* Diagonal perspective glass ray backdrop */}
            <path
              d={`M 0 ${svgHeight} L ${svgWidth} 35 L ${svgWidth} ${svgHeight} Z`}
              fill="rgba(255,255,255,0.02)"
            />

            {/* Animated Glass Area Fill */}
            <motion.path
              d={areaPathData}
              fill="url(#ai-chart-glass-area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />

            {/* Animated Main Neon Curve Line */}
            <motion.path
              d={linePathData}
              fill="none"
              stroke="url(#ai-chart-glass-line)"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glass-line-glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Active Live Pulse Point at the Peak */}
            <g transform={`translate(${lastPt.x}, ${lastPt.y})`}>
              <circle r="9" fill="#38bdf8" opacity="0.3" className="animate-ping" />
              <circle r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" className="shadow-[0_0_12px_#38bdf8]" />
              <circle r="2" fill="#ffffff" />
            </g>

            {/* Hovered Point Indicator */}
            {hoveredPoint && (
              <g>
                {/* Vertical Cursor Guide Line */}
                <line
                  x1={getCoordinates(hoveredPoint).x}
                  y1="0"
                  x2={getCoordinates(hoveredPoint).x}
                  y2={svgHeight}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                  opacity="0.8"
                />
                {/* Highlight Point */}
                <circle
                  cx={getCoordinates(hoveredPoint).x}
                  cy={getCoordinates(hoveredPoint).y}
                  r="6"
                  fill="#38bdf8"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  className="shadow-[0_0_14px_#38bdf8]"
                />
              </g>
            )}
          </svg>

          {/* Interactive Frosted Glass Tooltip on hover */}
          {hoveredPoint && mousePos && (
            <div
              className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3"
              style={{ left: mousePos.x, top: Math.max(30, mousePos.y) }}
            >
              <div className="bg-slate-900/90 backdrop-blur-xl text-white text-[11px] font-sans px-3 py-1.5 rounded-xl shadow-2xl border border-white/25 flex flex-col items-center min-w-[105px]">
                <span className="font-mono text-cyan-300 font-semibold text-xs drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">{hoveredPoint.value}</span>
                <span className="text-slate-300 text-[10px] whitespace-nowrap font-mono">{hoveredPoint.year}</span>
              </div>
            </div>
          )}
        </div>

        {/* X-Axis Timeline Labels */}
        <div className="flex justify-between items-center px-3 pt-2 pb-2 text-[11px] font-mono font-medium text-slate-400 select-none">
          <span className="hover:text-cyan-300 transition-colors">2018</span>
          <span className="hover:text-cyan-300 transition-colors">2019</span>
          <span className="hover:text-cyan-300 transition-colors">2020</span>
          <span className="hover:text-cyan-300 transition-colors">2021</span>
          <span className="hover:text-cyan-300 transition-colors">2022</span>
        </div>

        {/* Card Footer Banner with Frosted Glass styling */}
        <div className="pt-2.5 mt-0.5 border-t border-white/10 flex items-center justify-between px-1">
          <div className="flex items-center space-x-2 text-left">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
            <h3 className="font-sans font-medium text-slate-200 text-xs sm:text-sm tracking-tight">
              NEW Artificial Intelligence Statistics...
            </h3>
          </div>
          <div className="flex items-center space-x-1 text-cyan-300 font-mono text-[11px] font-semibold bg-white/[0.08] backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full shadow-sm">
            <TrendingUp className="w-3 h-3 text-cyan-400" />
            <span>+340%</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
