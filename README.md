# Artify Studio — Premium Creative Agency Portfolio

> **"Ideas, Designed to Shine."**  
> A bespoke, responsive portfolio website created for **Artify Studio**, crafted with modern minimalist luxury aesthetics, refined gold accents, and fluid interactions.

---

## 🌟 Brand Identity & Visual System

- **Primary Gold:** `#C58A2B`
- **Light Gold:** `#E7B85C`
- **Dark Gold:** `#966019`
- **Deep Brown:** `#2B1708`
- **Dark Background:** `#1B1008`
- **Warm Ivory:** `#FFF9F0`
- **Cream Background:** `#F6EBDD`
- **Pure White:** `#FFFFFF`
- **Headings Font:** `Playfair Display` (Google Fonts Serif)
- **Body & UI Font:** `Inter` (Google Fonts Sans-serif)

---

## 📂 Project Structure

```
artify-studio/
├── public/                     # Static assets & optimized images
│   ├── as-logo.png             # Official transparent AS monogram logo
│   ├── as-logo-original.jpg    # Original source logo
│   ├── favicon.png             # Browser favicon
│   ├── hero-sculpture.jpg      # 3D golden AS monogram on marble pedestal
│   ├── priya-sharma.jpg        # Client testimonial portrait
│   └── portfolio/              # High-resolution portfolio mockups
│       ├── portfolio-laptop-hd.jpg
│       ├── portfolio-stationery-hd.jpg
│       ├── portfolio-book-hd.jpg
│       └── portfolio-bag-hd.jpg
├── src/
│   ├── components/             # Reusable modular UI components
│   │   ├── Navbar.tsx          # Sticky navigation, logo & mobile menu
│   │   ├── Hero.tsx            # Hero headline, 3D visual & social proof
│   │   ├── Services.tsx        # 6 services showcase with starting prices
│   │   ├── Portfolio.tsx       # Filterable portfolio gallery
│   │   ├── Pricing.tsx         # Detailed packages & Starter Bundle
│   │   ├── About.tsx           # Agency introduction & core pillars
│   │   ├── WhyChooseUs.tsx     # Working principles & commitments
│   │   ├── Testimonials.tsx    # Testimonial slider & verified badge
│   │   ├── Contact.tsx         # Validated contact form & WhatsApp link
│   │   ├── Footer.tsx          # Brand identity, navigation & social links
│   │   ├── ProjectModal.tsx    # Portfolio item detail lightbox
│   │   └── ServiceModal.tsx    # Quick service overview modal
│   ├── data/                   # Single sources of truth for content
│   │   ├── agencyData.ts       # Agency info, contact, socials, principles
│   │   ├── servicesData.ts     # 6 services, 3 tiers each + Starter Bundle
│   │   └── portfolioData.ts    # Portfolio items and category filters
│   ├── App.tsx                 # Root application state & section layout
│   ├── index.css               # Tailwind CSS & custom design tokens
│   └── main.tsx                # React root mount
├── index.html                  # HTML entry point with meta & fonts
├── package.json
├── tailwind.config.js          # Custom brand tokens & typography
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18.0 or higher)
- npm (installed with Node)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site with live hot-module replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized, minified production build inside the `dist/` folder ready for instant static hosting.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize

All business content is cleanly decoupled into three TypeScript files inside `src/data/`:

### 1. Updating Services, Prices & The Starter Bundle
Open [`src/data/servicesData.ts`](file:///C:/Users/DELL/.gemini/antigravity/scratch/artify-studio/src/data/servicesData.ts):
- **Starter Bundle:** Edit `STARTER_BUNDLE` to adjust the price (e.g., `₹9,999`), turnaround time, or included deliverables.
- **Service Pricing Tiers:** Each service (`logo-design`, `website-design`, `social-media-posters`, `content-writing`, `video-editing`, `card-design`) has `basic`, `standard`, and `premium` packages with:
  * `price` (e.g. `₹1,500`)
  * `turnaround` (e.g. `3 Business Days`)
  * `revisions` (e.g. `2 Revisions`)
  * `deliverables` (array of bullet points)

### 2. Updating Contact Information & Social Links
Open [`src/data/agencyData.ts`](file:///C:/Users/DELL/.gemini/antigravity/scratch/artify-studio/src/data/agencyData.ts):
- Change `contact.email` (e.g. `hello@artifystudio.in`)
- Change `contact.phone` (e.g. `+91 98765 43210`)
- Change `contact.address` (e.g. `New Delhi, India`)
- Update social links in `socials` (`instagram`, `linkedin`, `youtube`, `facebook`, `x`)

### 3. Adding or Replacing Portfolio Projects
Open [`src/data/portfolioData.ts`](file:///C:/Users/DELL/.gemini/antigravity/scratch/artify-studio/src/data/portfolioData.ts):
- Add project images to `public/portfolio/`
- Add an entry to `PORTFOLIO_ITEMS` with the image path, title, deliverables, category, and description.

### 4. Replacing the Logo
- Put your new logo image in `public/as-logo.png` (transparent background recommended) and `public/as-logo-original.jpg`.

---

## 🌐 Free Hosting & Deployment Guide

This project compiles to a pure, high-performance static website and can be deployed for **100% free** on any modern hosting provider:

### Option A: Vercel (Recommended — Easiest & Fastest)
1. Push this folder to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Framework Preset will auto-detect **Vite**.
5. Click **"Deploy"**. Your site will be live with a free SSL certificate on `your-agency.vercel.app` in 30 seconds!

### Option B: Netlify
1. Sign in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"** (or drag and drop the `dist/` folder).
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy site"**.

### Option C: Cloudflare Pages
1. Sign in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Set Build command to `npm run build` and Build output directory to `dist`.
5. Click **"Save and Deploy"**.

### Option D: GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. In your GitHub repository settings, go to **Pages** and set the source to deploy from GitHub Actions or the `gh-pages` branch.

---

## 📬 Free Contact Form Integration

The contact form is currently wired to a smooth client-side confirmation. To receive emails directly in your inbox for free:

1. Sign up for free at [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io).
2. Copy your free Access Key.
3. In `src/components/Contact.tsx`, send a `POST` request to `https://api.web3forms.com/submit` or `https://formspree.io/f/YOUR_FORM_ID`.
