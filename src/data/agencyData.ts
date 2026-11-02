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
  name: "Artify Studio",
  shortName: "Artify",
  monogram: "AS",
  tagline: "Design · Create · Grow",
  headline: "Ideas, Designed to Shine",
  heroDescription: "We create distinctive visual identities, modern websites, and engaging digital content that help businesses build a stronger brand presence.",
  aboutHeadline: "Creative Thinking. Meaningful Design.",
  aboutParagraphs: [
    "At Artify Studio, we believe that exceptional design is more than surface decoration—it is the visual foundation of your business's credibility and long-term trust.",
    "We specialize in crafting thoughtful visual identities, high-converting modern websites, and impactful digital assets. Every curve, typographic choice, and color decision is calculated to articulate your unique value clearly and distinctively.",
    "By partnering closely with our clients, we bridge the gap between creative imagination and commercial reality, delivering practical digital solutions that look stunning and perform reliably across every screen."
  ],
  contact: {
    email: "hello@artifystudio.in",
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    address: "New Delhi, India",
    workingHours: "Mon – Sat: 10:00 AM – 7:00 PM IST",
    whatsappMessage: "Hi Artify Studio, I would like to discuss a new creative project.",
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
    { value: "150+", label: "Projects Delivered" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24-48h", label: "Fast Communication" },
  ]
};

export const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    id: "creative-tailored",
    title: "Creative & Tailored Designs",
    description: "Every concept is built from the ground up for your specific market—no generic off-the-shelf templates or recycled assets.",
    icon: "Sparkles"
  },
  {
    id: "clear-pricing",
    title: "Clear, Upfront Pricing",
    description: "Transparent packages with detailed deliverables. No hidden fees, surprise charges, or ambiguous cost estimates.",
    icon: "ReceiptCheck"
  },
  {
    id: "communication",
    title: "Consistent Communication",
    description: "Direct collaboration with dedicated design leads. Regular milestone updates and proactive check-ins throughout your project.",
    icon: "MessagesSquare"
  },
  {
    id: "responsive-fast",
    title: "Mobile-First & High Speed",
    description: "Web experiences engineered for fast load times, accessibility compliance, and seamless rendering on every device size.",
    icon: "Smartphone"
  },
  {
    id: "attention-detail",
    title: "Meticulous Attention to Detail",
    description: "Pixel-perfect alignments, strict color calibration, print-ready bleeds, and refined micro-interactions across all deliverables.",
    icon: "CheckCircle2"
  },
  {
    id: "practical-solutions",
    title: "Practical Business Solutions",
    description: "We focus on real commercial outcomes—building assets that build brand equity, capture leads, and grow revenue.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "priya-sharma",
    quote: "Amazing work! Our brand looks more professional than ever. The attention to detail in our logo and stationery suite was truly exceptional. Highly recommended!",
    author: "Priya Sharma",
    role: "Business Owner",
    company: "Boutique Retail",
    avatar: "/priya-sharma.jpg",
    rating: 5,
    verified: true
  },
  {
    id: "placeholder-client-2",
    quote: "Artify Studio transformed our digital presence completely. The turnaround time was prompt, and the team was an absolute pleasure to collaborate with.",
    author: "Client Feedback (Placeholder)",
    role: "Founder & CEO",
    company: "Tech Enterprise",
    avatar: "/as-logo.png",
    rating: 5,
    verified: false
  }
];
