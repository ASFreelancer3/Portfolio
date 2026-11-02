import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onExploreServices: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
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
              Freelance Design & Digital Studio · Pune
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

              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-surface-white hover:bg-surface-cream text-brown-deep font-medium text-sm md:text-base border border-accent-border transition-all duration-300 shadow-sm hover:shadow-subtle hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>Contact Us Directly</span>
                <Phone className="w-4 h-4 text-gold" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual with 3D Monogram */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Soft Pedestal Backing Arch */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-cream via-surface-ivory to-surface-white rounded-t-[140px] md:rounded-t-[200px] border border-accent-border/60 shadow-subtle -z-10" />

              {/* High-Quality Hero Sculpture Visual */}
              <div className="relative rounded-t-[140px] md:rounded-t-[200px] overflow-hidden p-3 sm:p-5">
                <img
                  src="./assets/hero-sculpture.jpg"
                  alt="AS 3D Monogram Presentation"
                  className="w-full h-auto object-cover rounded-t-[130px] md:rounded-t-[190px] shadow-sm transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Monogram Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-surface-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-accent-border shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-cream flex items-center justify-center p-1.5 border border-accent-border/70">
                  <img src="./assets/as-logo.png" alt="AS Monogram Mark" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-brown-deep">AS</p>
                  <p className="text-[11px] text-gold font-medium">Freelance Creative Studio · Pune</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
