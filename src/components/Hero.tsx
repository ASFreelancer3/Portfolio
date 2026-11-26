import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onExploreServices: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[686px] pt-[82px] pb-12 overflow-hidden">
      <div className="max-w-[1168px] h-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="min-h-[604px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left z-10">
            {/* Small Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-border/30 border border-accent-border/70 text-xs font-semibold tracking-[0.2em] uppercase text-brown-deep">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Freelance Design & Digital Studio · Pune
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-brown-deep leading-[1.12] tracking-tight">
              Ideas, Designed <br />
              to <span className="italic font-normal text-gold">Shine.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-[19px] text-ink-secondary max-w-[620px] font-normal leading-relaxed">
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
          <div className="lg:col-span-5 relative flex items-center justify-end">
            <div className="relative w-[520px] h-[520px] rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-accent-border/70" />
              <div className="absolute inset-[18px] rounded-full border border-accent-border/90" />
              <div className="relative w-[330px] h-[330px] rounded-full bg-surface-white/30 flex items-center justify-center">
                <img
                  src="/as-logo-original.jpg"
                  alt="AS Monogram"
                  className="w-[270px] h-[270px] object-contain"
                />
              </div>
              <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-surface-white border border-accent-border text-brown-deep text-[11px] font-bold tracking-[0.25em] uppercase whitespace-nowrap shadow-subtle">
                Design · Create · Grow
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
