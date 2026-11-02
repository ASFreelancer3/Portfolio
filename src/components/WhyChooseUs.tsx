import React from 'react';
import { 
  Sparkles, 
  Receipt, 
  MessagesSquare, 
  Smartphone, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { WORKING_PRINCIPLES } from '../data/agencyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-gold" };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'ReceiptCheck':
        return <Receipt {...props} />;
      case 'MessagesSquare':
        return <MessagesSquare {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative bg-surface-cream/40 border-t border-accent-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Our Commitments
            </span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-deep tracking-tight">
            Why Partner With Us
          </h2>

          <p className="text-sm sm:text-base text-ink-secondary">
            Our working principles and service standards dedicated to your brand success.
          </p>
        </div>

        {/* Working Principles 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKING_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="bg-surface-white/80 hover:bg-surface-white border border-accent-border/80 hover:border-gold/60 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-card-hover text-left flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-cream flex items-center justify-center flex-shrink-0 border border-accent-border/60">
                {getIcon(principle.icon)}
              </div>

              <div>
                <h3 className="font-serif font-semibold text-base sm:text-lg text-brown-deep mb-1.5">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
