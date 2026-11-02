import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Clock } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const whatsappUrl1 = `https://wa.me/${AGENCY_CONFIG.contact.phone1Clean}?text=${encodeURIComponent(
    'Hello AS! I have a project in mind and would like to discuss.'
  )}`;

  const whatsappUrl2 = `https://wa.me/${AGENCY_CONFIG.contact.phone2Clean}?text=${encodeURIComponent(
    'Hello AS! I would like to collaborate on a creative project.'
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-surface-cream/30 border-t border-accent-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Let's Connect
            </span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep tracking-tight font-sans">
            Have a Project in Mind?
          </h2>

          <p className="text-sm sm:text-base text-ink-secondary">
            No complicated forms. Connect directly with our 2-person freelance team on WhatsApp, phone call, or email.
          </p>
        </div>

        {/* 6 Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          
          {/* Card 1: Primary WhatsApp */}
          <div className="bg-surface-white rounded-3xl p-6 sm:p-7 border border-accent-border/80 shadow-card hover:border-gold/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                Primary WhatsApp
              </span>
              <h3 className="text-xl font-bold text-brown-deep mt-1">
                {AGENCY_CONFIG.contact.phone1}
              </h3>
              <p className="text-xs text-ink-secondary mt-2">
                Chat with us instantly for quotes, scope discussion, and project inquiries.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Alternate WhatsApp */}
          <div className="bg-surface-white rounded-3xl p-6 sm:p-7 border border-accent-border/80 shadow-card hover:border-gold/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                Alternate WhatsApp
              </span>
              <h3 className="text-xl font-bold text-brown-deep mt-1">
                {AGENCY_CONFIG.contact.phone2}
              </h3>
              <p className="text-xs text-ink-secondary mt-2">
                Reach our secondary creative line directly on WhatsApp at any time.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Direct Email */}
          <div className="bg-surface-white rounded-3xl p-6 sm:p-7 border border-accent-border/80 shadow-card hover:border-gold/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                Email Directly
              </span>
              <h3 className="text-base sm:text-lg font-bold text-brown-deep mt-1 break-all">
                {AGENCY_CONFIG.contact.email}
              </h3>
              <p className="text-xs text-ink-secondary mt-2">
                Send us your design briefs, reference links, or assets directly via email.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`mailto:${AGENCY_CONFIG.contact.email}?subject=Project%20Inquiry%20-%20AS`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brown-deep hover:bg-gold text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Direct Phone Call 1 */}
          <div className="bg-surface-white rounded-3xl p-6 sm:p-7 border border-accent-border/80 shadow-card hover:border-gold/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-cream text-gold flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                Direct Call Line 1
              </span>
              <h3 className="text-xl font-bold text-brown-deep mt-1">
                {AGENCY_CONFIG.contact.phone1}
              </h3>
              <p className="text-xs text-ink-secondary mt-2">
                Tap to call our lead creative directly for an immediate phone briefing.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`tel:${AGENCY_CONFIG.contact.phone1Clean}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-cream hover:bg-gold hover:text-white text-brown-deep text-xs sm:text-sm font-semibold transition-all border border-accent-border"
              >
                <span>Call {AGENCY_CONFIG.contact.phone1}</span>
              </a>
            </div>
          </div>

          {/* Card 5: Direct Phone Call 2 */}
          <div className="bg-surface-white rounded-3xl p-6 sm:p-7 border border-accent-border/80 shadow-card hover:border-gold/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-cream text-gold flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                Direct Call Line 2
              </span>
              <h3 className="text-xl font-bold text-brown-deep mt-1">
                {AGENCY_CONFIG.contact.phone2}
              </h3>
              <p className="text-xs text-ink-secondary mt-2">
                Tap to call our design & web lead directly on our secondary line.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`tel:${AGENCY_CONFIG.contact.phone2Clean}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-cream hover:bg-gold hover:text-white text-brown-deep text-xs sm:text-sm font-semibold transition-all border border-accent-border"
              >
                <span>Call {AGENCY_CONFIG.contact.phone2}</span>
              </a>
            </div>
          </div>

          {/* Card 6: Location & Studio Hours */}
          <div className="bg-surface-white rounded-3xl p-6 sm:p-7 border border-accent-border/80 shadow-card hover:border-gold/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-cream text-gold flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                Location & Availability
              </span>
              <h3 className="text-xl font-bold text-brown-deep mt-1">
                Pune, India
              </h3>
              <p className="text-xs text-ink-secondary mt-2">
                Based in Pune, Maharashtra. Collaborating with clients across India and internationally.
              </p>
            </div>
            <div className="pt-6">
              <div className="w-full py-3 px-4 rounded-full bg-surface-cream text-center text-xs font-medium text-ink-secondary border border-accent-border flex items-center justify-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{AGENCY_CONFIG.contact.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
