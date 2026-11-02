import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onExploreServices: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewPortfolio }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Glow & Wave Elements */}
      <div 
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-border/40 via-surface-cream/50 to-transparent rounded-full blur-2xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left z-10">
            {/* Small Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-border/30 border border-accent-border/70 text-xs font-semibold tracking-[0.2em] uppercase text-brown-deep">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              2-Person Freelance Creative Team · Pune
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold text-brown-deep leading-[1.12] tracking-tight">
              Ideas, Designed <br />
              to <span className="italic font-normal text-gold">Shine.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-ink-secondary max-w-xl font-normal leading-relaxed">
              {AGENCY_CONFIG.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white font-medium text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-card-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewPortfolio}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-surface-white hover:bg-surface-cream text-brown-deep font-medium text-sm md:text-base border border-accent-border transition-all duration-300 shadow-sm hover:shadow-subtle hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>View Portfolio</span>
                <div className="w-5 h-5 rounded-full bg-accent-border/40 flex items-center justify-center transition-colors group-hover:bg-gold/20">
                  <Play className="w-2.5 h-2.5 text-brown-deep fill-brown-deep translate-x-0.5" />
                </div>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-surface-ivory object-cover"
                  src="/priya-sharma.jpg"
                  alt="Client avatar"
                />
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold-dark ring-2 ring-surface-ivory font-semibold text-xs">
                  AS
                </div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brown-deep text-surface-ivory ring-2 ring-surface-ivory font-semibold text-xs">
                  DK
                </div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-border text-brown-deep ring-2 ring-surface-ivory font-semibold text-xs">
                  +
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-ink-main mt-0.5">
                  Trusted by <strong className="font-semibold text-brown-deep">100+ Happy Clients</strong>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with 3D Monogram & Atmosphere */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Soft Pedestal Backing Arch */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-cream via-surface-ivory to-surface-white rounded-t-[140px] md:rounded-t-[200px] border border-accent-border/60 shadow-subtle -z-10" />

              {/* High-Quality Hero Sculpture Visual */}
              <div className="relative rounded-t-[140px] md:rounded-t-[200px] overflow-hidden p-3 sm:p-5">
                <img
                  src="/hero-sculpture.jpg"
                  alt="Artify Studio 3D Golden AS Monogram Presentation"
                  className="w-full h-auto object-cover rounded-t-[130px] md:rounded-t-[190px] shadow-sm transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Monogram Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-surface-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-accent-border shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-cream flex items-center justify-center p-1.5 border border-accent-border/70">
                  <img src="/as-logo.png" alt="AS Monogram Mark" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-brown-deep">AS</p>
                  <p className="text-[11px] text-gold font-medium">Freelance Creative Duo · Pune</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
