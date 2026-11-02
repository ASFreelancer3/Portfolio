import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onEnquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onEnquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brown-dark/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-surface-white rounded-3xl overflow-hidden shadow-2xl border border-accent-border text-left flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-white/80 hover:bg-surface-white text-brown-deep border border-accent-border flex items-center justify-center shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto">
          {/* Main Visual Header */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-surface-cream overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.isSampleConcept && (
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brown-dark/85 backdrop-blur-sm text-xs font-medium text-surface-ivory tracking-wide border border-gold/30">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Portfolio Showcase Concept
                </span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold text-gold mb-1">
                <span>{project.categoryLabel}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-deep">
                {project.title}
              </h2>

              <p className="text-xs sm:text-sm text-ink-light mt-1">
                Client / Project Scope: <strong className="text-brown-deep font-semibold">{project.clientPlaceholder}</strong>
              </p>
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brown-deep">
                Project Overview
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brown-deep">
                Key Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-ink-secondary">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-accent-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ink-light">
                Looking for a similar visual identity or digital experience?
              </p>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-card-hover"
              >
                <span>Enquire About Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
