# Aditya Sharma — Cybersecurity Portfolio

A dark, terminal-inspired personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

## 3. Change personal information

Almost everything editable lives in `src/data/`:

- `src/data/profile.ts` — name, headline, tagline, resume path, email, social links, hero terminal lines
- `src/data/skills.ts` — skill categories and items
- `src/data/projects.ts` — featured projects
- `src/data/interests.ts` — "Security Research & Interests" cards
- `src/data/timeline.ts` — experience, education, certifications, achievements

Search each file for `TODO:` comments — those mark every placeholder that should be replaced with your real information (organization names, CGPA, certification issuers, GitHub/LinkedIn URLs, email, etc). Nothing outside of these placeholders was fabricated.

## 4. Add a project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  id: "unique-id",
  title: "Project Title",
  description: "One or two sentences about the project.",
  tech: ["Python", "FastAPI"],
  features: ["Feature one", "Feature two"],
  github: "https://github.com/you/repo", // leave "" to hide the button
  demo: "https://your-demo-url.com",     // leave "" to hide the button
  featured: false, // true makes it span two columns and adds a "Featured" badge
}
```

## 5. Add a certification

Open `src/data/timeline.ts` and add an object to the `certifications` array:

```ts
{
  id: "unique-id",
  title: "Certification Name",
  issuer: "Issuing Organization",
  year: "2026",
}
```

## 6. Add your resume

Place your resume PDF at `public/resume.pdf` (create the file with exactly that name). The "Download Resume" button in the hero section already points at `/resume.pdf` via `profile.resumePath` in `src/data/profile.ts` — update that value if you use a different filename.

## 7. Deploy

This is a static Vite app, so it can be deployed to any static host. Two common options:

**Vercel**
1. Push this project to a GitHub repository.
2. Import the repo at vercel.com → New Project.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

**Netlify**
1. Push this project to a GitHub repository.
2. New site from Git at app.netlify.com.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

You can also run `npm run build` locally and drag-and-drop the resulting `dist/` folder into Netlify's manual deploy UI.

## Notes

- The contact form (`src/components/ContactForm.tsx`) does full client-side validation but does **not** send email yet — there's no backend wired up. Connect it to a service like Formspree, EmailJS, or your own API route before relying on it.
- The GitHub contribution graph and coding stats in the "Code. Build. Secure." section use placeholder data — connect a live GitHub/LeetCode API if you want real numbers.
- Reduced-motion is respected throughout (animations shorten to nothing if the visitor has `prefers-reduced-motion` enabled).
