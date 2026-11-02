export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  isSampleConcept: boolean;
  image: string;
  tagline: string;
  clientPlaceholder: string;
  year: string;
  deliverables: string[];
  description: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "logo", label: "Logo & Brand Identity" },
  { id: "website", label: "Website Design" },
  { id: "social", label: "Social Media Posters" },
  { id: "cards", label: "Business Card Design" },
  { id: "video", label: "Video Editing" },
  { id: "content", label: "Content Design" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "artify-digital-experience",
    title: "Agency Digital Presence",
    category: "website",
    categoryLabel: "Website Design",
    isSampleConcept: true,
    image: "/portfolio/portfolio-laptop-hd.jpg",
    tagline: "Minimalist dark-gold luxury agency website interface",
    clientPlaceholder: "Artify Studio Showcase Concept",
    year: "2025",
    deliverables: ["Custom UI/UX", "Responsive Frontend", "Motion Design", "SEO Architecture"],
    description: "An elegant, high-contrast dark agency landing page interface engineered for immediate brand authority. Features tactile gold typography, intuitive section flow, and responsive layout."
  },
  {
    id: "as-stationery-suite",
    title: "Monogram Executive Suite",
    category: "cards",
    categoryLabel: "Business Card Design",
    isSampleConcept: true,
    image: "/portfolio/portfolio-stationery-hd.jpg",
    tagline: "Matte black box with gold hot-foil stamped monogram",
    clientPlaceholder: "Executive Brand Concept",
    year: "2025",
    deliverables: ["Visiting Cards", "Foil Stamping Specs", "Luxury Presentation Box", "Die-cut Templates"],
    description: "A tactile luxury business card experience featuring heavyweight soft-touch black cotton cardstock with dual-sided metallic gold foil stamping."
  },
  {
    id: "dream-bigger-editorial",
    title: "Dream Bigger Editorial Book",
    category: "content",
    categoryLabel: "Content Design",
    isSampleConcept: true,
    image: "/portfolio/portfolio-book-hd.jpg",
    tagline: "High-fashion hardcover editorial & brand publication",
    clientPlaceholder: "Artify Press Concept",
    year: "2025",
    deliverables: ["Editorial Layout", "Typography Scale", "Cover Foil Finish", "Grid Blueprint"],
    description: "A bespoke editorial publication celebrating creative ambition. Built on a strict 12-column Swiss grid, featuring serif display typography and gold-embossed spine details."
  },
  {
    id: "obsidian-retail-identity",
    title: "Obsidian Retail Packaging",
    category: "logo",
    categoryLabel: "Logo & Brand Identity",
    isSampleConcept: true,
    image: "/portfolio/portfolio-bag-hd.jpg",
    tagline: "Luxury shopping bag & brand packaging with gold emblem",
    clientPlaceholder: "Boutique Atelier Concept",
    year: "2025",
    deliverables: ["Monogram Packaging", "Print Specifications", "Fabric Handles", "Color Calibration"],
    description: "Premium retail identity and sustainable black kraft packaging created for high-end boutiques, showcasing our AS monogram with embossed metallic accents."
  },
  {
    id: "as-calligraphic-mark",
    title: "Bespoke AS Monogram Mark",
    category: "logo",
    categoryLabel: "Logo & Brand Identity",
    isSampleConcept: true,
    image: "/as-logo.png",
    tagline: "Gold and bronze calligraphic monogram mark with vertical axis",
    clientPlaceholder: "Official Brand Asset Concept",
    year: "2025",
    deliverables: ["Vector Geometry", "Monogram Variations", "3D Metal Shading", "Clearspace Guidelines"],
    description: "The official AS monogram: a masterwork of calligraphic curves and sharp geometric diagonals, balancing deep bronze solidity with warm luminous gold ribbons."
  },
  {
    id: "social-campaign-carousels",
    title: "Social Authority Masterpack",
    category: "social",
    categoryLabel: "Social Media Posters",
    isSampleConcept: true,
    image: "/portfolio/portfolio-book.jpg", // can fallback or use visual
    tagline: "Cohesive multi-slide educational carousels with gold typography",
    clientPlaceholder: "Digital Growth Campaign Concept",
    year: "2025",
    deliverables: ["12 Feed Posts", "Story Templates", "Figma Components", "Copywriting Prompts"],
    description: "A modular, typographic social poster system engineered to maximize saves, shares, and algorithmic retention across Instagram and LinkedIn."
  },
  {
    id: "cinematic-brand-reel",
    title: "Lumina Cinematic Brand Reel",
    category: "video",
    categoryLabel: "Video Editing",
    isSampleConcept: true,
    image: "/portfolio/portfolio-laptop.jpg",
    tagline: "Dynamic typography animations with bespoke sound design",
    clientPlaceholder: "Motion Design Concept",
    year: "2025",
    deliverables: ["4K Brand Reel", "Vertical Shorts (9:16)", "Sound Design Sync", "Color Grade"],
    description: "A high-energy, 45-second motion teaser fusing elegant gold calligraphy with rapid typographic cuts, atmospheric light leaks, and custom audio mixing."
  }
];
