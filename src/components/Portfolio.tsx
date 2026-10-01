import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { X, CheckCircle, Award, Target, Settings, Calendar, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Extract unique categories and append 'All'
  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category.split(' & ')[0])))];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(activeCategory) || p.category.split(' & ')[0] === activeCategory);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = ''; // Unlock background scroll
  };

  return (
    <section id="portfolio" className="relative z-10 py-24 md:py-32 bg-brand-navy overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-light border border-white/5 text-brand-cyan text-xs font-mono tracking-wider uppercase">
              <span>Selected Works</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Portfolio <span className="font-serif italic font-normal text-gradient-cyan-purple">Showcase</span><span className="text-brand-cyan">.</span>
            </h2>
            <p className="font-sans text-slate-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Explore our record of high-end engineering, immersive art direction, and conversion-focused web masterpieces.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2.5 max-w-full overflow-x-auto pb-2 shrink-0 md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-[#101010] font-semibold shadow-lg shadow-brand-cyan/20 border-transparent'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-purple hover:text-[#101010] hover:font-semibold hover:shadow-lg hover:shadow-brand-cyan/20 hover:border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden glass-card h-full flex flex-col cursor-pointer border border-white/8 transition-all duration-500"
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => handleOpenCaseStudy(project)}
                style={{
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                  boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(6, 182, 212, 0.1)' : 'none'
                }}
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl bg-slate-950 shrink-0">
                  {/* Subtle glass grid overlay */}
                  <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:bg-black/20" />
                  
                  {/* Glowing neon corner overlays */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent z-10" />

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Light flare */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 via-transparent to-brand-purple/25 z-10 mix-blend-screen pointer-events-none transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                {/* Info and Hover Overlay details */}
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">{project.category}</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-brand-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-sans text-slate-400 text-sm font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    {/* View Case Study Button / Hover indication */}
                    <span className="inline-flex items-center space-x-2 font-mono text-[11px] uppercase tracking-wider text-slate-300 group-hover:text-white group-hover:shadow-[0_1px_0_rgba(6,182,212,0.6)] pb-0.5 transition-all duration-300">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>

                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Immersive Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-navy/90 backdrop-blur-xl">
          {/* Backdrop Close Click area */}
          <div className="absolute inset-0" onClick={handleCloseCaseStudy} />

          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl rounded-3xl glass-panel border border-white/15 bg-brand-dark/95 shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-400"
            id="case-study-modal"
          >
            {/* Top Bar Navigation inside drawer */}
            <div className="sticky top-0 left-0 w-full bg-brand-dark/80 backdrop-blur-md border-b border-white/8 px-6 sm:px-8 py-5 flex items-center justify-between z-30">
              <div className="flex items-center space-x-3 text-left">
                <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                  Case Study
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={handleCloseCaseStudy}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Project Body Content */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8 md:space-y-12">
              {/* Hero Showcase Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/8 shrink-0">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-slate-400">PROJECT CATEGORY</p>
                    <p className="text-lg font-display font-bold text-white mt-0.5">{selectedProject.category}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">LAUNCHED</p>
                    <p className="text-lg font-display font-bold text-brand-cyan mt-0.5">{selectedProject.date}</p>
                  </div>
                </div>
              </div>

              {/* Case Study Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/3 border border-white/5">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">CLIENT</span>
                  <span className="text-sm font-sans font-medium text-slate-200 block mt-1">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">SERVICES</span>
                  <span className="text-sm font-sans font-medium text-slate-200 block mt-1">
                    {selectedProject.services.join(', ')}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">TECH STACK</span>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">AWARDS</span>
                  <span className="text-sm font-sans font-medium text-brand-cyan block mt-1 flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>Awwwards HM</span>
                  </span>
                </div>
              </div>

              {/* Challenge vs Solution layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-2 text-brand-pink">
                    <Target className="w-5 h-5 animate-pulse" />
                    <h4 className="font-display font-bold text-lg text-white">The Challenge</h4>
                  </div>
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-2 text-brand-cyan">
                    <Settings className="w-5 h-5 animate-spin-slow" />
                    <h4 className="font-display font-bold text-lg text-white">Our Solution</h4>
                  </div>
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Core Outcomes & Key Metrics */}
              <div className="space-y-6 pt-6 border-t border-white/5 text-left">
                <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-cyan" />
                  <span>Key Results & Impact</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {selectedProject.results.map((result, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl glass-panel-light border border-white/5 text-center flex flex-col justify-center"
                    >
                      <span className="font-display text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                        {result.split(' ').slice(0, 2).join(' ')}
                      </span>
                      <span className="text-xs text-slate-400 font-sans mt-1">
                        {result.split(' ').slice(2).join(' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="sticky bottom-0 left-0 w-full bg-brand-dark/90 backdrop-blur-md border-t border-white/8 px-6 sm:px-8 py-5 flex items-center justify-between z-30">
              <span className="text-xs font-mono text-slate-500">Curious to see what we can do for you?</span>
              <button
                onClick={() => {
                  handleCloseCaseStudy();
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
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-xs font-mono uppercase tracking-wider font-bold text-white flex items-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/20 focus:outline-none"
              >
                <span>Start Similar Project</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
