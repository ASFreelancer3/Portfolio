import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, STARTER_BUNDLE, ServiceItem, PackageTier } from '../data/servicesData';

interface PricingProps {
  onSelectPackage: (serviceTitle: string, packageName: string, price: string) => void;
  selectedServiceId?: string;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage, selectedServiceId }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedServiceId || SERVICES_DATA[0].id
  );

  const currentService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-surface-cream/30 border-t border-accent-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Our Pricing
            </span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-deep tracking-tight">
            Simple & Transparent
          </h2>

          <p className="text-sm sm:text-base text-ink-secondary">
            High-quality services at competitive prices. Choose the right package for your needs.
          </p>
        </div>

        {/* 1. Quick Starting Overview Cards (Identical to UI Reference) */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {SERVICES_DATA.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveServiceId(s.id)}
                className={`group p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-between ${
                  activeServiceId === s.id
                    ? 'bg-surface-white border-gold shadow-card-hover ring-2 ring-gold/20 -translate-y-1'
                    : 'bg-surface-white/70 hover:bg-surface-white border-accent-border/80 hover:border-gold/50 shadow-sm'
                }`}
              >
                <div>
                  <h3 className="font-serif font-medium text-xs sm:text-sm text-brown-deep">
                    {s.title}
                  </h3>
                  <p className="text-[10px] text-ink-light uppercase mt-1">from</p>
                  <p className="text-sm sm:text-base font-bold text-brown-deep font-sans mt-0.5">
                    {s.startingPrice}
                  </p>
                </div>

                <div
                  className={`mt-3 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    activeServiceId === s.id
                      ? 'bg-gold text-white border-gold'
                      : 'border-accent-border text-ink-secondary group-hover:border-gold group-hover:text-gold'
                  }`}
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Service Tier Selector Tabs */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-ink-light font-semibold mb-3">
            Select a service to view full package breakdowns:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  activeServiceId === service.id
                    ? 'bg-brown-deep text-surface-ivory border-brown-deep shadow-sm scale-105'
                    : 'bg-surface-white text-ink-secondary border-accent-border/80 hover:border-gold hover:text-brown-deep'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Three Package Cards (Basic, Standard, Premium) for Selected Service */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {(['basic', 'standard', 'premium'] as const).map((tierKey) => {
            const pkg = currentService.packages[tierKey];
            const isPopular = pkg.popular;

            return (
              <div
                key={tierKey}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-surface-white border-2 border-gold shadow-card-hover md:-translate-y-2'
                    : 'bg-surface-white/90 border border-accent-border shadow-card hover:border-gold/50'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Service Context & Tier Name */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-gold">
                      {currentService.title}
                    </span>
                    <span className="text-[11px] font-medium text-ink-light bg-surface-cream px-2.5 py-0.5 rounded-full">
                      {pkg.turnaround}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brown-deep mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-ink-secondary min-h-[36px] mb-6">
                    {pkg.description}
                  </p>

                  {/* Price Header */}
                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-accent-border/60">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-brown-deep">
                      {pkg.price}
                    </span>
                    {pkg.unit && (
                      <span className="text-xs text-ink-light font-medium">{pkg.unit}</span>
                    )}
                    <span className="ml-auto text-xs text-gold-dark font-medium bg-gold/10 px-2 py-0.5 rounded">
                      {pkg.revisions}
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brown-deep">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enquiry Action Button */}
                <button
                  onClick={() => onSelectPackage(currentService.title, pkg.name, pkg.price)}
                  className={`w-full py-3 px-5 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gold hover:bg-gold-dark text-white shadow-md hover:shadow-gold-glow'
                      : 'bg-brown-deep hover:bg-gold text-surface-ivory shadow-sm'
                  }`}
                >
                  <span>Enquire for {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 4. Visually Highlighted Starter Bundle Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brown-deep via-brown-dark to-brown-deep text-surface-ivory p-8 sm:p-10 md:p-12 shadow-2xl border border-gold/40">
          {/* Subtle Ambient Gold Shimmer */}
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Bundle Info */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-xs font-semibold tracking-wider uppercase text-gold-light">
                <Sparkles className="w-3.5 h-3.5 text-gold-light" />
                Special Agency Bundle
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-surface-ivory">
                {STARTER_BUNDLE.title}
              </h3>

              <p className="text-sm sm:text-base text-surface-cream/80 max-w-xl font-normal">
                {STARTER_BUNDLE.description}
              </p>

              {/* Deliverables Grid */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STARTER_BUNDLE.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-surface-ivory/90">
                    <ShieldCheck className="w-4 h-4 text-gold-light flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing & Action */}
            <div className="lg:col-span-5 bg-surface-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gold/30 text-center flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-gold-light font-medium">
                All-In-One Investment
              </span>
              <div className="my-3 flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-white">
                  {STARTER_BUNDLE.price}
                </span>
                <span className="text-xs text-surface-cream/70">/ complete package</span>
              </div>
              <p className="text-xs text-surface-cream/75 mb-6">
                Turnaround: {STARTER_BUNDLE.turnaround} · {STARTER_BUNDLE.revisions}
              </p>

              <button
                onClick={() => onSelectPackage("Starter Bundle", STARTER_BUNDLE.title, STARTER_BUNDLE.price)}
                className="w-full py-3.5 px-6 rounded-full bg-gold hover:bg-gold-light text-brown-dark font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-gold-glow flex items-center justify-center gap-2"
              >
                <span>Claim Starter Bundle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Scope Note */}
        <div className="mt-8 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-ink-light">
          <HelpCircle className="w-4 h-4 text-gold flex-shrink-0" />
          <p>
            *Final prices may vary depending on project scope, custom deliverables, and timeline requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
