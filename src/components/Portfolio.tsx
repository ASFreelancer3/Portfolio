import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from '../data/portfolioData';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
  onEnquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-surface-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Title and Right/Bottom Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-deep tracking-tight">
              Our Creative Work
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary">
              Explore a glimpse of our creativity and craftsmanship.
            </p>
          </div>

          {/* Quick Action: View All Works */}
          <div className="flex items-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brown-deep text-surface-ivory hover:bg-gold text-sm font-medium transition-colors shadow-sm"
            >
              <span>View Full Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-brown-deep text-surface-ivory border-brown-deep shadow-sm'
                  : 'bg-surface-white text-ink-secondary border-accent-border/80 hover:border-gold hover:text-brown-deep'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item)}
              className="group relative bg-surface-white rounded-2xl overflow-hidden border border-accent-border/70 hover:border-gold/60 transition-all duration-300 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] bg-surface-cream overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-brown-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-white/90 backdrop-blur-sm text-brown-deep text-xs font-medium shadow-md">
                    <Eye className="w-3.5 h-3.5 text-gold" />
                    View Details
                  </span>
                </div>

                {/* Sample Concept Tag */}
                {item.isSampleConcept && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brown-dark/70 backdrop-blur-sm text-[10px] font-medium text-surface-ivory tracking-wide">
                      <Sparkles className="w-2.5 h-2.5 text-gold" />
                      Concept
                    </span>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-brown-deep mt-1 group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-secondary mt-1.5 line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-accent-border/40 flex items-center justify-between text-xs text-ink-light">
                  <span>{item.clientPlaceholder}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
