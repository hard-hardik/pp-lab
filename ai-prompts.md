# Sequence of Prompts for AI-Assisted Development

This document outlines the detailed, stage-by-stage prompts used to build the Airbnb Clone project. This sequence demonstrates the modern AI workflow utilized (coding agents, sub-agents, and precise prompts) to achieve high-fidelity output.

## Phase 1: Planning and Architecture

**Prompt 1: Initial Research & Project Structuring**
> "Analyze the provided screenshots and the reference URL for the Airbnb listing page. Create a comprehensive implementation plan covering the folder structure for a React (Vite) frontend and Node.js (Express) backend. The plan must detail every component required to achieve a pixel-perfect clone, including the main listing page, the Photo Tour overlay, and the Lightbox viewer. Also, outline the JSON data structure needed for the backend."

**Prompt 2: Architecture Diagram Generation**
> "Generate a Mermaid.js flowchart detailing a high-level architecture diagram for a production-scale vacation-rental marketplace (like Airbnb). Include the CDN, API Gateway, Microservices (User, Listing, Search, Booking, etc.), and Database layers (PostgreSQL, Elasticsearch, Redis, S3). Ensure it illustrates the scaling strategy."

## Phase 2: Backend Development

**Prompt 3: Backend Setup & API**
> "Build the complete Node.js/Express backend for the Airbnb clone. Create the following:
> 1. `package.json` with necessary dependencies (express, cors).
> 2. `server.js` and `app.js` to initialize the Express application and CORS middleware.
> 3. A robust `listing.json` file containing highly detailed, realistic data mirroring the Candolim Airbnb listing (title, host, 15+ high-quality Unsplash image URLs, amenities, reviews, pricing, location).
> 4. A `listingController.js` and `routes/listing.js` to serve this JSON data via a `GET /api/listing` endpoint."

## Phase 3: Frontend Setup & Foundations

**Prompt 4: React & Vite Configuration**
> "Set up the frontend using React and Vite. 
> 1. Create `vite.config.js` with a proxy to route `/api` requests to `http://localhost:5000`.
> 2. Create global CSS variables in `variables.css` matching Airbnb's exact design tokens (colors, typography using 'Nunito Sans', spacing, and shadows).
> 3. Initialize `main.jsx` and `App.jsx`. 
> 4. Create a `ListingContext.jsx` using the Context API to fetch data from the backend and provide a seamless fallback to local mock data if the API is offline."

**Prompt 5: Custom Hooks**
> "Write custom React hooks to handle complex interactions required by the UI:
> 1. `useScrollPosition`: To detect when the user scrolls down, enabling the sticky header shadow.
> 2. `useKeyboard`: A hook to cleanly map keyboard events (Escape, ArrowLeft, ArrowRight) to actions for accessibility in overlays.
> 3. `useLockBodyScroll`: To disable background scrolling when modals or photo galleries are open."

## Phase 4: Frontend Components Implementation

**Prompt 6: Header & Photo Grid**
> "Implement the `Header` and `PhotoGrid` components using CSS Modules. 
> - The `Header` must have a sticky position, the Airbnb logo, a centered search pill ('Anywhere | Any week | Add guests'), and a right-side profile menu. 
> - The `PhotoGrid` must replicate Airbnb's 5-photo mosaic layout (1 large on the left, 4 smaller on the right), with hover darken effects, and a 'Show all photos' button at the bottom right."

**Prompt 7: Main Content Details**
> "Build the core listing details components:
> - `ListingHeader`: Title, ratings, Superhost badge, location, Share, and Save buttons.
> - `HostInfo`: Host avatar, capacity info, and highlights (Self check-in, etc.).
> - `Description`: Expandable text area with a 'Show more >' toggle.
> - `Amenities`: A 2-column grid of top amenities with react-icons, and a button to open the full `AmenitiesModal`.
> - `Reviews`: Category rating progress bars and a grid of text review cards."

**Prompt 8: Sticky Booking Card & Map**
> "Build the `BookingCard` and `Map` components. 
> - The `BookingCard` must be sticky on scroll on the right side of the desktop layout. It should calculate the price breakdown (nightly rate * nights + cleaning fee + service fee) and feature the Airbnb gradient 'Reserve' button.
> - The `Map` component should display a mock location area for Candolim, Goa, with a pulsing map pin."

## Phase 5: Complex Overlays (Photo Tour & Lightbox)

**Prompt 9: Photo Tour Gallery**
> "Create the `PhotoTour` full-screen overlay component. It should open via a bottom-to-top CSS transition. Include a top navigation bar (Close, Share, Save), a horizontal scrollable thumbnail strip, and a vertically scrolling main area showing all photos grouped by room labels. Integrate the `useLockBodyScroll` hook."

**Prompt 10: Lightbox Viewer**
> "Implement the `Lightbox` single-photo viewer. It must have a completely black/dark backdrop, a close button, and a photo counter (e.g., '3 / 15'). Include left and right arrow buttons for navigation. Integrate the `useKeyboard` hook to allow navigation via Arrow keys and Escape to close. Add focus trapping to ensure keyboard accessibility stays within the lightbox."

## Phase 6: Integration and Refinement

**Prompt 11: Final Integration & Prop Fixing**
> "Review `App.jsx` and ensure all components are imported correctly. Wire up the state management so clicking 'Show all photos' opens the `PhotoTour`, and clicking any individual photo (either in the grid or the tour) opens the `Lightbox` at the exact correct index. Ensure the layout gracefully falls back if image arrays are missing, and verify the two-column flex layout strictly assigns 58% width to details and 34% width to the sticky booking sidebar."

---

*Note: These prompts were orchestrated through a multi-agent AI architecture where specialized sub-agents ('Backend Builder', 'Frontend Setup Builder', 'Frontend Components Builder', 'Frontend Overlays Builder') executed the instructions in parallel for maximum efficiency.*
