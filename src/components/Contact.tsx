import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { SERVICES_DATA } from '../data/servicesData';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Logo Design',
    budget: '₹5,000 – ₹15,000',
    message: '',
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus('error');
      setErrorMessage('Please tell us a bit more about your project (at least 10 characters).');
      return;
    }

    setStatus('submitting');

    // Simulate reliable submission (or can hook to Formspree/Web3Forms endpoint)
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.contact.phoneClean}?text=${encodeURIComponent(
    `Hello Artify Studio! My name is ${formData.name || 'a prospective client'}. I am interested in ${formData.service}. Let's connect!`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-surface-cream/30 border-t border-accent-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Let's Connect
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-deep tracking-tight">
              Have a Project <br />
              in Mind?
            </h2>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              Tell us about your project. Let's create something exceptional together.
            </p>

            {/* Direct Contact Details */}
            <div className="pt-4 space-y-4">
              <a
                href={`mailto:${AGENCY_CONFIG.contact.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-white/60 hover:bg-surface-white border border-accent-border/60 hover:border-gold/60 transition-all text-ink-main group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-ink-light uppercase tracking-wider">Email Us</p>
                  <p className="text-xs sm:text-sm font-medium text-brown-deep font-sans">
                    {AGENCY_CONFIG.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${AGENCY_CONFIG.contact.phoneClean}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-white/60 hover:bg-surface-white border border-accent-border/60 hover:border-gold/60 transition-all text-ink-main group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-ink-light uppercase tracking-wider">Call Directly</p>
                  <p className="text-xs sm:text-sm font-medium text-brown-deep font-sans">
                    {AGENCY_CONFIG.contact.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-white/60 border border-accent-border/60 text-ink-main">
                <div className="w-10 h-10 rounded-lg bg-surface-cream flex items-center justify-center text-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-ink-light uppercase tracking-wider">Studio Location</p>
                  <p className="text-xs sm:text-sm font-medium text-brown-deep font-sans">
                    {AGENCY_CONFIG.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-white rounded-3xl p-6 sm:p-8 md:p-10 border border-accent-border/80 shadow-card">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brown-deep">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-sm text-ink-secondary max-w-md mx-auto">
                  Your project enquiry has been received. Our creative director will review your details and reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Logo Design',
                      budget: '₹5,000 – ₹15,000',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-brown-deep text-surface-ivory hover:bg-gold text-xs sm:text-sm font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left" noValidate>
                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-brown-deep uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-ivory/60 border border-accent-border/80 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-xs sm:text-sm text-brown-deep transition-all placeholder:text-ink-light/60 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-brown-deep uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-ivory/60 border border-accent-border/80 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-xs sm:text-sm text-brown-deep transition-all placeholder:text-ink-light/60 outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Service Required Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-brown-deep uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-ink-light text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 00000"
                      className="w-full px-4 py-3 rounded-xl bg-surface-ivory/60 border border-accent-border/80 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-xs sm:text-sm text-brown-deep transition-all placeholder:text-ink-light/60 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-brown-deep uppercase tracking-wider mb-1.5">
                      Service Required <span className="text-gold">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-ivory/60 border border-accent-border/80 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-xs sm:text-sm text-brown-deep transition-all outline-none"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Starter Bundle">The Agency Starter Bundle</option>
                      <option value="Full Brand & Web Package">Full Brand & Web Package</option>
                      <option value="Other / Custom Project">Other / Custom Project</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold text-brown-deep uppercase tracking-wider mb-1.5">
                    Estimated Budget <span className="text-ink-light text-[10px] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-ivory/60 border border-accent-border/80 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-xs sm:text-sm text-brown-deep transition-all outline-none"
                  >
                    <option value="Under ₹5,000">Under ₹5,000</option>
                    <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000</option>
                    <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
                    <option value="₹30,000+">₹30,000+</option>
                    <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                  </select>
                </div>

                {/* Project Description Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-brown-deep uppercase tracking-wider mb-1.5">
                    Project Description <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your brand, goals, deliverables, and timeline requirements..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-ivory/60 border border-accent-border/80 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 text-xs sm:text-sm text-brown-deep transition-all placeholder:text-ink-light/60 outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white text-sm font-semibold transition-all shadow-md hover:shadow-card-hover hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-ink-light pt-1">
                  *Your contact details are kept strictly confidential. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
