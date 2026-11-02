import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-16 md:py-24 relative bg-surface-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Rounded Banner Container (Exact Layout from UI Reference) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brown-dark via-brown-deep to-brown-dark border border-gold/30 text-surface-ivory p-8 sm:p-10 md:p-14 shadow-2xl">
          
          {/* Subtle Ambient Gold Glow in Corner */}
          <div 
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -top-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Navigation Arrows */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
                Client Testimonials
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-surface-ivory tracking-tight">
                What Our Clients Say
              </h2>

              <p className="text-xs sm:text-sm text-surface-cream/75">
                Real stories. Real results.
              </p>

              {/* Slider Navigation Arrows */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-surface-ivory hover:bg-gold hover:text-brown-dark hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-surface-ivory hover:bg-gold hover:text-brown-dark hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-surface-cream/60 ml-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
              </div>
            </div>

            {/* Right Column: Active Testimonial Card */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-surface-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gold/20">
              
              {/* Client Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-gold/60 p-0.5 bg-surface-cream/20">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg text-surface-ivory leading-relaxed">
                  "{current.quote}"
                </p>

                <div>
                  <h4 className="font-sans font-bold text-sm text-surface-ivory">
                    {current.author}
                  </h4>
                  <p className="text-xs text-gold-light mt-0.5">
                    {current.role} {current.company ? `· ${current.company}` : ''}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
