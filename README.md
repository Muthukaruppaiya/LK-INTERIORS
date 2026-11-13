# LK Interiors Studio

Modern, responsive React website for [LK Interiors Studio](https://www.instagram.com/lk.interiors.studio?utm_source=qr).

## Features

- Full-bleed hero with parallax depth
- 3D tilt portfolio cards + animated CSS room scene
- Interactive before / after image sliders
- Mobile + desktop responsive layout
- Contact form and Instagram link

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Customize

- Brand copy, services, projects, and before/after pairs: `src/data/content.js`
- Project images live in `public/gallery/` — drop Instagram exports there and update filenames in `src/data/content.js`
- Update email / phone in `src/data/content.js`
