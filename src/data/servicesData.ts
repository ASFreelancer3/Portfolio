export interface PackageTier {
  name: string;
  price: string;
  priceNum: number;
  unit?: string;
  turnaround: string;
  revisions: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  priceNum: number;
  icon: string; // Lucide icon identifier
  packages: {
    basic: PackageTier;
    standard: PackageTier;
    premium: PackageTier;
  };
}

export interface StarterBundle {
  title: string;
  subtitle: string;
  price: string;
  priceNum: number;
  tagline: string;
  description: string;
  features: string[];
  turnaround: string;
  revisions: string;
}

export const STARTER_BUNDLE: StarterBundle = {
  title: "The Agency Starter Bundle",
  subtitle: "Complete Brand Launch Solution",
  price: "₹9,999",
  priceNum: 9999,
  tagline: "Everything you need to launch your brand with authority and elegance",
  description: "Designed for ambitious entrepreneurs and new businesses looking for an all-in-one professional identity without managing multiple freelancers.",
  turnaround: "7-10 Business Days",
  revisions: "Unlimited during design phase",
  features: [
    "Official Custom Logo Design (3 Concepts + Vector Files)",
    "Complete Visual Brand Guidelines (Colors, Typography)",
    "Premium Double-Sided Visiting Card + Digital QR Code",
    "5 Custom Branded Social Media Poster Templates",
    "1-Page Fast, Mobile-Responsive Landing Page / Portfolio",
    "Social Media Profile Avatars & Banner Covers",
    "Dedicated Designer & Priority Communication"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    shortDesc: "Distinctive, memorable brand marks crafted to leave a lasting impression.",
    fullDesc: "We craft timeless logos and monogram marks that encapsulate your brand vision with surgical precision, luxury aesthetics, and versatile vector geometry.",
    startingPrice: "₹1,500",
    priceNum: 1500,
    icon: "PenTool",
    packages: {
      basic: {
        name: "Basic Identity",
        price: "₹1,500",
        priceNum: 1500,
        turnaround: "3 Business Days",
        revisions: "2 Revisions",
        description: "Essential logo design for startups seeking a clean, immediate brand mark.",
        deliverables: [
          "2 Initial Logo Concepts",
          "High-Resolution JPG & Transparent PNG",
          "Web-optimized files",
          "Basic Color Palette",
          "2 Rounds of Revisions"
        ]
      },
      standard: {
        name: "Standard Brand",
        price: "₹3,000",
        priceNum: 3000,
        popular: true,
        turnaround: "4-5 Business Days",
        revisions: "4 Revisions",
        description: "Comprehensive vector identity package suited for growing businesses.",
        deliverables: [
          "3 Unique Logo Concepts",
          "Vector & Source Files (AI, EPS, SVG, PDF)",
          "Transparent High-Res PNGs & Favicon",
          "Brand Color Palette & Typography Guide",
          "3D Realistic Mockup Presentation",
          "4 Rounds of Revisions"
        ]
      },
      premium: {
        name: "Premium Luxury",
        price: "₹5,500",
        priceNum: 5500,
        turnaround: "6-7 Business Days",
        revisions: "Unlimited Revisions",
        description: "The ultimate brand identity suite with luxury guidelines and full collateral.",
        deliverables: [
          "5 Bespoke Logo Concepts",
          "Complete Vector Master Files (All Formats)",
          "Comprehensive Brand Style Guide PDF (15+ pages)",
          "Social Media Avatar & Header Kit",
          "Stationery & Merch Realistic Mockups",
          "Copyright Transfer Document",
          "Unlimited Revisions"
        ]
      }
    }
  },
  {
    id: "website-design",
    title: "Website Design",
    shortDesc: "High-converting, responsive digital experiences built for elegance and speed.",
    fullDesc: "Modern, performant, mobile-first websites designed with immaculate aesthetic hierarchy, smooth micro-interactions, and flawless usability.",
    startingPrice: "₹8,000",
    priceNum: 8000,
    icon: "Globe",
    packages: {
      basic: {
        name: "Landing Page",
        price: "₹8,000",
        priceNum: 8000,
        turnaround: "5-7 Business Days",
        revisions: "2 Revisions",
        description: "High-impact single-page landing site or portfolio to showcase your offerings.",
        deliverables: [
          "1-Page Custom Responsive Design",
          "Mobile, Tablet & Desktop Optimized",
          "Interactive Contact Form Integration",
          "Basic On-Page SEO Setup",
          "Fast Page Speed & Performance Tuning",
          "Free Hosting Deployment Assistance"
        ]
      },
      standard: {
        name: "Multi-Page Site",
        price: "₹15,000",
        priceNum: 15000,
        popular: true,
        turnaround: "10-12 Business Days",
        revisions: "4 Revisions",
        description: "Complete agency or corporate multi-page website with fluid navigation.",
        deliverables: [
          "Up to 5 Custom Designed Pages",
          "Interactive Portfolio / Gallery with Filters",
          "Dynamic Contact Form & WhatsApp Integration",
          "Complete SEO & OpenGraph Meta Setup",
          "Smooth Page Transitions & Micro-animations",
          "30 Days Post-Launch Support"
        ]
      },
      premium: {
        name: "Custom Enterprise",
        price: "₹28,000",
        priceNum: 28000,
        turnaround: "18-21 Business Days",
        revisions: "Unlimited Revisions",
        description: "Full-scale custom digital experience with bespoke layouts and CMS architecture.",
        deliverables: [
          "Up to 10 Bespoke Pages or CMS Integration",
          "Custom UI/UX Prototypes & Design System",
          "Lead Capture Automations & Analytics Setup",
          "Advanced Motion & Interactive Components",
          "Speed 95+ Google Lighthouse Optimization",
          "60 Days Priority Support & Training"
        ]
      }
    }
  },
  {
    id: "social-media-posters",
    title: "Social Media Posters",
    shortDesc: "Engaging branded visuals designed to stop the scroll and captivate.",
    fullDesc: "Cohesive, eye-catching social media graphics and carousels aligned strictly with your brand palette, typography, and marketing voice.",
    startingPrice: "₹300",
    priceNum: 300,
    icon: "Megaphone",
    packages: {
      basic: {
        name: "Single Creative",
        price: "₹300",
        priceNum: 300,
        unit: "/ poster",
        turnaround: "24-48 Hours",
        revisions: "1 Revision",
        description: "Single promotional or announcement poster crafted to high visual standards.",
        deliverables: [
          "1 High-Impact Poster Design",
          "Feed (1:1) & Story (9:16) Sizes",
          "High-Resolution JPG / PNG",
          "1 Revision Round"
        ]
      },
      standard: {
        name: "Brand Growth Pack",
        price: "₹1,350",
        priceNum: 1350,
        popular: true,
        unit: "/ 5 posters",
        turnaround: "3-4 Business Days",
        revisions: "2 Revisions / poster",
        description: "Set of 5 unified posts to maintain consistent aesthetic frequency.",
        deliverables: [
          "5 Custom Branded Posters or Carousel Slides",
          "Feed and Story formats included",
          "Editable Figma / PSD Source Files",
          "Compelling Caption & Hashtag Suggestions",
          "2 Revision Rounds per asset"
        ]
      },
      premium: {
        name: "Monthly Authority",
        price: "₹2,800",
        priceNum: 2800,
        unit: "/ 12 posters",
        turnaround: "7 Business Days",
        revisions: "Unlimited Revisions",
        description: "Complete monthly content suite to dominate your niche with aesthetic authority.",
        deliverables: [
          "12 Custom Graphics (Mix of Singles & Carousels)",
          "Instagram Grid Aesthetics Strategy",
          "Highlight Covers & Profile Header",
          "Full Editable Master Files",
          "Unlimited Revisions"
        ]
      }
    }
  },
  {
    id: "content-writing",
    title: "Content Writing",
    shortDesc: "Compelling brand copy and persuasive storytelling that drives action.",
    fullDesc: "Polished, strategic copywriting that articulates your brand value proposition with clarity, sophistication, and psychological impact.",
    startingPrice: "₹600",
    priceNum: 600,
    icon: "FileEdit",
    packages: {
      basic: {
        name: "Essential Copy",
        price: "₹600",
        priceNum: 600,
        turnaround: "2 Business Days",
        revisions: "1 Revision",
        description: "Crisp copy for a single blog article, bio, or service page section.",
        deliverables: [
          "Up to 500 Words of Original Copy",
          "Search-Intent Keyword Integration",
          "Catchy Headlines & Sub-headers",
          "Plagiarism-free Guarantee",
          "1 Revision Round"
        ]
      },
      standard: {
        name: "Website & Blog Pack",
        price: "₹1,500",
        priceNum: 1500,
        popular: true,
        turnaround: "4 Business Days",
        revisions: "2 Revisions",
        description: "In-depth storytelling and conversion-focused copy for multi-page websites.",
        deliverables: [
          "Up to 1,500 Words (or 3 Website Pages)",
          "Brand Voice & Tone Calibration",
          "SEO Meta Titles & Descriptions",
          "Clear Calls-to-Action (CTAs)",
          "2 Revision Rounds"
        ]
      },
      premium: {
        name: "Full Brand Voice",
        price: "₹3,200",
        priceNum: 3200,
        turnaround: "6 Business Days",
        revisions: "Unlimited Revisions",
        description: "Holistic brand messaging architecture, website copy, and value proposition.",
        deliverables: [
          "Complete Website Copy (Home, About, Services, Contact)",
          "Brand Manifesto, Taglines & Mission Statement",
          "Tone of Voice Guide for Team Members",
          "Email Welcome Sequence (2 Emails)",
          "Unlimited Revisions"
        ]
      }
    }
  },
  {
    id: "video-editing",
    title: "Video Editing",
    shortDesc: "Cinematic, rhythmic video edits that hook viewers from the first second.",
    fullDesc: "Dynamic pacing, tailored sound design, stylish motion captions, and color grading for modern reels, promos, and brand videos.",
    startingPrice: "₹800",
    priceNum: 800,
    icon: "PlaySquare",
    packages: {
      basic: {
        name: "Short Reel / Short",
        price: "₹800",
        priceNum: 800,
        turnaround: "24-48 Hours",
        revisions: "1 Revision",
        description: "Engaging vertical reel or YouTube short with sharp hook and captions.",
        deliverables: [
          "Up to 30 Seconds Vertical Video (9:16)",
          "Dynamic Animated Subtitles",
          "Rhythmic Music & Sound Effects Sync",
          "1080p Export",
          "1 Revision Round"
        ]
      },
      standard: {
        name: "Brand Promo / Reel",
        price: "₹2,200",
        priceNum: 2200,
        popular: true,
        turnaround: "3-4 Business Days",
        revisions: "2 Revisions",
        description: "Polished promotional video with motion graphics and cinematic color grade.",
        deliverables: [
          "Up to 90 Seconds Duration",
          "Motion Graphics & Lower Thirds",
          "Color Grading & Cinematic LUT Application",
          "Licensed Royalty-free Audio Track",
          "Vertical & Horizontal Aspect Ratios",
          "2 Revision Rounds"
        ]
      },
      premium: {
        name: "Cinematic Showcase",
        price: "₹5,000",
        priceNum: 5000,
        turnaround: "5-7 Business Days",
        revisions: "Unlimited Revisions",
        description: "Full-scale corporate or brand narrative video with bespoke sound staging.",
        deliverables: [
          "Up to 3-5 Minutes Video Production",
          "Custom 2D Title Sequences & Logo Animation",
          "Advanced Multi-track Sound Mixing & Foley",
          "4K Ultra-HD Master Export",
          "Thumbnail & Teaser Cut Included",
          "Unlimited Revisions"
        ]
      }
    }
  },
  {
    id: "card-design",
    title: "Card Design",
    shortDesc: "Tactile, luxurious visiting and business cards that make hands remember you.",
    fullDesc: "Exquisite print and digital visiting card layouts featuring foil stamping accents, QR-enabled vCard technology, and strict typographic elegance.",
    startingPrice: "₹300",
    priceNum: 300,
    icon: "CreditCard",
    packages: {
      basic: {
        name: "Standard Visiting Card",
        price: "₹300",
        priceNum: 300,
        turnaround: "24-48 Hours",
        revisions: "1 Revision",
        description: "Single or double-sided business card layout ready for local printing.",
        deliverables: [
          "Double-Sided Clean Layout",
          "Print-Ready CMYK 300 DPI PDF",
          "Bleed & Safe Zone Included",
          "1 Revision Round"
        ]
      },
      standard: {
        name: "Smart vCard + Print",
        price: "₹750",
        priceNum: 750,
        popular: true,
        turnaround: "2-3 Business Days",
        revisions: "3 Revisions",
        description: "Premium business card with an integrated custom QR code linking to your contacts.",
        deliverables: [
          "2 Premium Design Concepts",
          "Interactive QR Code linking to Contact Card / Web",
          "Foil / Spot UV Specification Layer",
          "Editable Vector Source Files (AI / PSD)",
          "Realistic 3D Card Mockup",
          "3 Revision Rounds"
        ]
      },
      premium: {
        name: "Executive Stationery Suite",
        price: "₹1,800",
        priceNum: 1800,
        turnaround: "4-5 Business Days",
        revisions: "Unlimited Revisions",
        description: "Complete corporate identity suite for executives, founders, and studios.",
        deliverables: [
          "Luxury Business Card (3 Concepts)",
          "Official Corporate Letterhead (Word & PDF)",
          "Branded Envelope Design (DL / C5)",
          "Clickable HTML Email Signature",
          "All Master Source Files + Print Guides",
          "Unlimited Revisions"
        ]
      }
    }
  }
];
