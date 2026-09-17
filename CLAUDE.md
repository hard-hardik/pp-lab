# Claude Custom Instructions

This file serves as the system-level context and guardrails for Claude (and Claude-powered agents/IDEs like Cursor) when working on this Airbnb Clone repository.

## 🏗️ Architecture & Stack
- **Frontend**: React 18, Vite.
- **Backend**: Node.js, Express.
- **Styling**: Strict CSS Modules (`[name].module.css`). **Do not use Tailwind or inline styles.**

## 🎨 Visual & Behavioral Fidelity
- **The Reference is Truth**: The provided reference URL is the absolute source of truth. All layouts, typography, spacing, and colors must match perfectly.
- **Aspect Ratios**: Ensure strictly enforced aspect ratios on image grids using the `padding-bottom` CSS hack or `aspect-ratio` where fully supported.
- **Overlays**: Modals (Lightbox, Photo Tour) must lock background scrolling.

## ⚛️ React Best Practices
- Keep components small and modular. 
- Separate data-fetching from UI rendering (use React Context like `ListingContext.jsx`).
- Abstract complex DOM interactions (like keyboard event listeners for modals) into custom hooks (e.g., `useKeyboard.js`, `useLockBodyScroll.js`).
- Never mutate state directly.

## 🚀 Production & Deployment
- Ensure backend API URLs in the frontend fall back cleanly if the server goes down (serve static mock data via `fallbackData`).
- Ensure `cors` is correctly configured in Express.
- Ensure API calls use `import.meta.env.VITE_API_URL` to support Netlify/Vercel production environments.
