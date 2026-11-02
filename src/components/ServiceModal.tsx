import React, { useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onViewPricing: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onViewPricing }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brown-dark/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-surface-white rounded-3xl overflow-hidden shadow-2xl border border-accent-border text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-cream hover:bg-surface-white text-brown-deep border border-accent-border flex items-center justify-center shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-gold">
              Service Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-deep mt-1">
              {service.title}
            </h2>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-cream text-xs font-semibold text-brown-deep">
              <span>Starting from</span>
              <span className="text-gold-dark font-bold font-sans">{service.startingPrice}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Quick Snapshot of 3 Packages */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brown-deep">
              Available Package Tiers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['basic', 'standard', 'premium'] as const).map((tierKey) => {
                const pkg = service.packages[tierKey];
                return (
                  <div
                    key={tierKey}
                    className="p-3.5 rounded-xl bg-surface-ivory border border-accent-border/70 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                        {pkg.name}
                      </p>
                      <p className="font-serif font-bold text-base text-brown-deep mt-0.5">
                        {pkg.price}
                      </p>
                    </div>
                    <p className="text-[10px] text-ink-light mt-2">{pkg.revisions}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-accent-border/60 flex items-center justify-end gap-3">
            <button
              onClick={() => {
                onClose();
                onViewPricing(service.id);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brown-deep hover:bg-gold text-surface-ivory text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span>View Full Packages & Deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
