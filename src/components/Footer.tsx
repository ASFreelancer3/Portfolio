import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-brown-dark text-surface-ivory pt-12 pb-10 border-t border-accent-borderDark overflow-hidden">
      {/* Subtle Ambient Gold Gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-surface-white/10">
          
          {/* Left: Official AS Logo & Agency Identity */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-white/5 border border-gold/30 p-1.5 flex items-center justify-center">
              <img
                src="/as-logo.png"
                alt="Artify Studio AS Monogram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold tracking-tight text-white leading-none font-sans">
                {AGENCY_CONFIG.name}
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gold-light font-medium mt-1">
                Freelance Creative Team · Pune
              </span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-surface-cream/80">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-surface-cream/20 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: AGENCY_CONFIG.socials.instagram, label: 'Instagram' },
              { icon: <Linkedin className="w-4 h-4" />, href: AGENCY_CONFIG.socials.linkedin, label: 'LinkedIn' },
              { icon: <Youtube className="w-4 h-4" />, href: AGENCY_CONFIG.socials.youtube, label: 'YouTube' },
              { icon: <Facebook className="w-4 h-4" />, href: AGENCY_CONFIG.socials.facebook, label: 'Facebook' },
              { icon: <Twitter className="w-4 h-4" />, href: AGENCY_CONFIG.socials.x, label: 'X (Twitter)' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-surface-white/5 hover:bg-gold text-surface-ivory hover:text-brown-dark border border-surface-white/10 hover:border-gold transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-surface-cream/50 gap-4">
          <p>© 2025 AS. 2-Person Freelance Creative Team. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gold-light cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gold-light cursor-pointer transition-colors">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gold-light hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
