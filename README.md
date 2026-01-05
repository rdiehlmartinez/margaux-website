# Margaux Giles — Portfolio

A minimal, elegant portfolio website for Margaux Giles, Product Designer.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: Cormorant Garamond (serif headings) + Outfit (body text)
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── About.tsx        # About section with stats
    ├── Experience.tsx   # Work experience timeline
    ├── Education.tsx    # Education section
    ├── Contact.tsx      # Contact section
    └── Footer.tsx       # Footer
```

## Design Features

- Warm, sophisticated color palette with terracotta accents
- Scroll-triggered animations for each section
- Editorial-style grid layouts
- Smooth transitions and hover effects
- Fully responsive design

## Customization

Colors can be customized in `src/app/globals.css`:

```css
:root {
  --background: #FDFBF7;    /* Warm off-white */
  --foreground: #1C1917;    /* Deep charcoal */
  --accent: #9F7756;        /* Terracotta */
  --accent-light: #C4A98A;  /* Light terracotta */
  --muted: #78716C;         /* Muted gray */
  --border: #E7E5E4;        /* Light border */
}
```
