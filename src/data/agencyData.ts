export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  verified?: boolean;
}

export interface WorkingPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const AGENCY_CONFIG = {
  name: "AS",
  shortName: "AS",
  monogram: "AS",
  tagline: "Design · Create · Grow",
  headline: "Ideas, Designed to Shine",
  teamBadge: "2-Person Freelance Creative Team · Pune",
  heroDescription: "We are a dedicated 2-person freelance team crafting distinctive visual identities, modern websites, and engaging digital content that help your business build a memorable presence.",
  aboutHeadline: "Two Minds. One Creative Vision.",
  aboutParagraphs: [
    "We are AS — a dedicated two-person freelance creative team based in Pune. We are not a bloated agency with layers of account managers; you work directly with both of us from the initial spark to final delivery.",
    "One of us focuses on brand identity, typography, visual balance, and storytelling; the other specializes in modern, responsive web development, digital layouts, and smooth user experiences.",
    "Together, we combine creative imagination with practical execution, giving your business high-end design craftsmanship, quick turnarounds, and personal attention to detail without agency markups."
  ],
  contact: {
    email: "freelanceras3@gmail.com",
    phone1: "+91 99754 52779",
    phone1Clean: "919975452779",
    phone2: "+91 89561 07330",
    phone2Clean: "918956107330",
    address: "Pune, Maharashtra, India",
    workingHours: "Mon – Sat: 10:00 AM – 8:00 PM IST",
    whatsappMessage: "Hello AS! I would like to discuss a new creative project.",
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
    facebook: "https://facebook.com/",
    x: "https://x.com/",
  },
  stats: [
    { value: "100+", label: "Happy Clients" },
    { value: "2", label: "Dedicated Creators" },
    { value: "100%", label: "Direct Communication" },
    { value: "Pune", label: "Based in India" },
  ]
};

export const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    id: "creative-tailored",
    title: "Creative & Tailored Designs",
    description: "Every concept is custom-crafted from scratch for your brand vision—no generic off-the-shelf templates.",
    icon: "Sparkles"
  },
  {
    id: "clear-pricing",
    title: "Transparent Freelance Pricing",
    description: "Clear packages with detailed deliverables. Honest pricing with zero hidden fees or agency overhead.",
    icon: "ReceiptCheck"
  },
  {
    id: "communication",
    title: "Direct Communication",
    description: "Speak directly with both creators over WhatsApp or phone. No bureaucracy, just quick updates.",
    icon: "MessagesSquare"
  },
  {
    id: "responsive-fast",
    title: "Mobile-First & High Speed",
    description: "Web experiences engineered for fast load times, accessibility compliance, and seamless mobile rendering.",
    icon: "Smartphone"
  },
  {
    id: "attention-detail",
    title: "Meticulous Handcrafted Detail",
    description: "Pixel-perfect alignments, strict color calibration, print-ready bleeds, and refined micro-interactions.",
    icon: "CheckCircle2"
  },
  {
    id: "practical-solutions",
    title: "Focused on Real Results",
    description: "We build assets that elevate brand trust, communicate clearly, and help your business grow.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "priya-sharma",
    quote: "Amazing work! Our brand looks more professional than ever. Working directly with this team was smooth, transparent, and fast. Highly recommended!",
    author: "Priya Sharma",
    role: "Business Owner",
    company: "Boutique Retail",
    avatar: "./assets/priya-sharma.jpg",
    rating: 5,
    verified: true
  }
];
