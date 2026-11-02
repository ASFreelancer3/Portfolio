import React from 'react';
import { 
  PenTool, 
  Globe, 
  Megaphone, 
  FileEdit, 
  PlaySquare, 
  CreditCard, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onEnquireService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onEnquireService }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-gold transition-colors duration-300 group-hover:text-gold-dark" };
    switch (iconName) {
      case 'PenTool':
        return <PenTool {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'FileEdit':
        return <FileEdit {...props} />;
      case 'PlaySquare':
        return <PlaySquare {...props} />;
      case 'CreditCard':
        return <CreditCard {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-surface-cream/40 border-t border-b border-accent-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Our Services
            </span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-deep tracking-tight">
            What We Offer
          </h2>

          <p className="text-sm sm:text-base text-ink-secondary">
            End-to-end creative & digital solutions for your brand.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-surface-white/80 hover:bg-surface-white border border-accent-border/80 hover:border-gold/60 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Top Accent Icon */}
              <div className="w-14 h-14 rounded-full bg-surface-cream/70 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-110">
                {getIcon(service.icon)}
              </div>

              {/* Service Title */}
              <h3 className="font-serif font-semibold text-base md:text-lg text-brown-deep mb-2 group-hover:text-gold-dark transition-colors">
                {service.title}
              </h3>

              {/* Starting Price Tag */}
              <div className="mt-auto pt-2 flex flex-col items-center">
                <span className="text-[11px] text-ink-light uppercase tracking-wider">from</span>
                <span className="text-sm font-semibold text-brown-deep font-sans">
                  {service.startingPrice}
                </span>

                {/* Arrow Icon Button */}
                <div className="mt-3 w-7 h-7 rounded-full border border-accent-border flex items-center justify-center text-ink-secondary transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:border-gold">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
