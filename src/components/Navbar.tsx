import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface NavbarProps {
  onOpenContact: (servicePrefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[82px] transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-ivory/95 backdrop-blur-md shadow-sm border-b border-accent-border/60'
          : 'bg-surface-ivory/95 border-b border-accent-border/30'
      }`}
    >
      <div className="max-w-[1168px] h-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="h-full flex items-center justify-between">
          {/* Logo & Agency Branding */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 flex items-center justify-center">
              <img
                src="/as-logo.png"
                alt="Artify Studio AS Monogram Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[22px] tracking-tight text-brown-deep leading-none">
                {AGENCY_CONFIG.name}
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-gold font-medium mt-1">
                {AGENCY_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-ink-main/80 hover:text-gold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onOpenContact()}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brown-deep text-surface-ivory hover:bg-gold text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brown-deep hover:text-gold hover:bg-accent-border/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-ivory/98 backdrop-blur-lg border-b border-accent-border shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2.5 text-base font-medium text-brown-deep hover:text-gold hover:bg-surface-cream rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brown-deep text-surface-ivory hover:bg-gold text-base font-medium transition-colors shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
