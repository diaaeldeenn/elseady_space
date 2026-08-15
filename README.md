# Elseady Space

> Personal portfolio built with Next.js 16 and Express.js

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)](https://elseady-space.vercel.app)

**[elseady-space.vercel.app](https://elseady-space.vercel.app)**

---

## Overview

Full-stack portfolio with a mono-spaced editorial aesthetic. The frontend is a Next.js 16 app with server components and Framer Motion animations. The backend is a standalone Express.js API connected to MongoDB.

What's less common here: alongside the projects section, there's a **References** section that documents my learning journey across three sessions (JS + Bootstrap, React + Tailwind, Next.js + TypeScript), each organized by technology and topic with slug-based detail pages. It's how I think about growth as a developer.

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.3 | Framework & SSR |
| React | 19 | UI Library |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | v4 | Styling |
| Framer Motion | 13 | Animations |
| React Hook Form | 7 | Form Management |
| Zod | 3 | Schema Validation |
| next-themes | 0.4 | Dark/Light Mode |
| shadcn/ui + Base UI | | UI Components |
| React Toastify | 11 | Notifications |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Express.js | 5 | HTTP Server |
| TypeScript | 5 | Type Safety |
| MongoDB + Mongoose | 9 | Database & ODM |
| Nodemailer | 8 | Email Delivery |
| Zod | 4 | Request Validation |
| Helmet | 8 | Security Headers |
| express-rate-limit | 8 | Rate Limiting |
| CORS | | Cross-Origin Policy |

---

## Features

- **Server Components** — Profile, projects, and references fetched server-side
- **Dark / Light Mode** — System-aware theme with smooth transitions
- **Contact Form** — Client and server validation with HTML email templates via Nodemailer
- **Project Showcase** — Filterable by category (Front-End / Back-End / Full-Stack) with slug-based detail pages
- **References Section** — Three learning sessions (JS + Bootstrap, React + Tailwind, Next.js + TypeScript), filterable by technology and topic
- **CV Page** — Inline PDF viewer for desktop, fallback for mobile, with direct download
- **SEO** — Dynamic metadata, OpenGraph tags, sitemap, robots.txt, and JSON-LD structured data
- **Rate Limiting** — 200 requests per 15 minutes per IP
- **Generic Repository Pattern** — Reusable `BaseRepository<T>` across all database operations
- **Welcome & Live Demo Popups** — Session-aware popups on first visit

---

### References

A structured collection of my technical reference guides:

- JavaScript + Bootstrap
- React + Tailwind CSS
- Next.js + TypeScript

Each reference is organized by technology, topic, and slug-based detail pages.

---

## Project Structure

```
.
├── frontend/
│   ├── src/
│   │   ├── api/                  # API fetch functions
│   │   ├── app/                  # App Router pages & layouts
│   │   │   ├── page.tsx          # Home (Hero)
│   │   │   ├── about/
│   │   │   ├── cv/
│   │   │   ├── projects/
│   │   │   ├── references/
│   │   │   └── contact/
│   │   ├── components/
│   │   │   ├── hero-section.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── about/
│   │   │   ├── cv/
│   │   │   ├── projects/
│   │   │   ├── references/
│   │   │   ├── contact/
│   │   │   └── ui/
│   │   ├── interfaces/
│   │   └── utils/
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── app.controller.ts
    │   ├── main.ts
    │   ├── DB/
    │   │   ├── connectionDB.ts   # Atlas + local fallback
    │   │   ├── models/
    │   │   │   ├── profile.model.ts
    │   │   │   ├── projects.model.ts
    │   │   │   └── reference.model.ts
    │   │   └── repository/
    │   │       ├── base.repository.ts
    │   │       ├── profile.repository.ts
    │   │       ├── project.repository.ts
    │   │       └── reference.repository.ts
    │   ├── common/
    │   │   ├── enum/
    │   │   ├── middleware/schema/
    │   │   └── utils/
    │   │       ├── email/
    │   │       └── global/
    │   └── modules/
    │       ├── contact/
    │       ├── profile/
    │       ├── projects/
    │       └── references/
    └── package.json
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `GET` | `/api/profile` | Get profile data |
| `GET` | `/api/projects` | Get all projects (optional `?category=`) |
| `GET` | `/api/projects/:slug` | Get project by slug |
| `GET` | `/api/references` | Get all references (optional `?technology=` `?topic=`) |
| `GET` | `/api/references/:slug` | Get reference by slug |
| `POST` | `/api/contact` | Send contact email |

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas URI or local MongoDB
- Gmail account with App Password

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_atlas_uri
MONGO_LOCAL=mongodb://localhost:27017/elseady-space
GMAIL_USER=your@gmail.com
GMAIL_PASS=your_app_password
MY_GMAIL=your@gmail.com
```

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

```bash
npm run dev
```

---

## Deployment

| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Express.js API deployed as a Vercel serverless application. |
| Database | MongoDB Atlas |
| Media | Cloudinary |

---

## Author

**Diaa Eldeen** — Full-Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-elseady--space.vercel.app-2867A8?style=flat-square)](https://elseady-space.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-diaaelseady-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/diaaelseady)
[![GitHub](https://img.shields.io/badge/GitHub-diaaeldeenn-181717?style=flat-square&logo=github)](https://github.com/diaaeldeenn)
