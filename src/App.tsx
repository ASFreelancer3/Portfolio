import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { PortfolioItem } from './data/portfolioData';
import { ServiceItem } from './data/servicesData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [pricingServiceId, setPricingServiceId] = useState<string>('logo-design');
  const [contactServicePrefill, setContactServicePrefill] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setContactServicePrefill(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleViewPricingForService = (serviceId: string) => {
    setPricingServiceId(serviceId);
    scrollToSection('pricing');
  };

  const handleSelectPackageFromPricing = (serviceTitle: string, packageName: string, price: string) => {
    const prefill = `${serviceTitle} (${packageName} - ${price})`;
    scrollToContact(prefill);
  };

  return (
    <div className="min-h-screen bg-surface-ivory text-ink-main selection:bg-gold/25 selection:text-ink-main font-sans">
      {/* 1. Navigation Bar */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Content Area */}
      <main>
        {/* 2. Hero Section */}
        <Hero 
          onExploreServices={() => scrollToSection('services')}
          onViewPortfolio={() => scrollToSection('portfolio')}
        />

        {/* 3. Services Section ("What We Offer") */}
        <Services 
          onSelectService={handleSelectServiceFromCard}
          onEnquireService={(title) => scrollToContact(title)}
        />

        {/* 4. Portfolio Gallery ("Our Creative Work") */}
        <Portfolio 
          onSelectProject={(project) => setSelectedProject(project)}
          onEnquireProject={(title) => scrollToContact(`Portfolio Project Inquiry: ${title}`)}
        />

        {/* 5. Pricing Section ("Simple & Transparent") */}
        <Pricing 
          selectedServiceId={pricingServiceId}
          onSelectPackage={handleSelectPackageFromPricing}
        />

        {/* 6. About the Agency ("Creative Thinking. Meaningful Design.") */}
        <About />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Testimonials ("What Our Clients Say") */}
        <Testimonials />

        {/* 9. Contact ("Have a Project in Mind?") */}
        <Contact prefilledService={contactServicePrefill} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={(title) => scrollToContact(`Inquiry: ${title}`)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onViewPricing={handleViewPricingForService}
      />
    </div>
  );
}

export default App;
