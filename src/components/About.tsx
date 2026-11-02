import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-surface-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official AS Logo & Brand Visual Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-surface-cream/50 border border-accent-border/80 p-8 sm:p-12 flex flex-col items-center justify-center shadow-subtle text-center">
              
              {/* Subtle Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/40 rounded-tl" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold/40 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold/40 rounded-bl" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/40 rounded-br" />

              {/* High-res Monogram Logo */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center">
                <img
                  src="/as-logo.png"
                  alt="Artify Studio AS Official Monogram"
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-2xl font-bold text-brown-deep font-sans">
                  {AGENCY_CONFIG.name}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mt-0.5">
                  Freelance Creative Studio · Pune
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                About The Agency
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-deep tracking-tight leading-tight">
              {AGENCY_CONFIG.aboutHeadline}
            </h2>

            <div className="space-y-4 text-ink-secondary text-sm sm:text-base leading-relaxed">
              {AGENCY_CONFIG.aboutParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "Thoughtful Brand Design",
                "Practical Digital Solutions",
                "Meticulous Attention to Detail",
                "Collaborative Partnerships"
              ].map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-brown-deep">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
