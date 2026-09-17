# Airbnb Clone - PlayPowerLabs Assignment

This is a pixel-perfect clone of an Airbnb listing page, built using React (Vite) and Node.js (Express).

## Architecture & Tech Stack

- **Frontend:** React, Vite, CSS Modules, Context API, React Icons
- **Backend:** Node.js, Express, CORS
- **Data:** JSON-based local data mimicking a database response
- **Architecture Diagram:** Please see `architecture-diagram.md` for a production-scale marketplace system design.

## Features Implemented

- **Pixel-perfect layout** matching Airbnb's exact visual design (typography, colors, spacing).
- **Photo Grid & Gallery:** 5-photo mosaic layout with a full-screen "Photo Tour" overlay.
- **Lightbox Viewer:** Single-photo viewer with full keyboard navigation (arrows, escape), focus trapping, and crossfade transitions.
- **Sticky Booking Card:** Interactive booking sidebar with pricing breakdown that stays in view on scroll.
- **Amenities Modal:** A detailed modal showing all amenities categorized logically.
- **Responsive Navigation:** Sticky header with scroll-based box-shadow.
- **Data Hydration:** Fetches data from the Node backend, with a fallback to local data if the API is offline.

## Setup & Run Instructions

### 1. Backend Setup

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   *The API will be available at `http://localhost:5000/api/listing`*

### 2. Frontend Setup

1. Open a separate terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`. API requests are automatically proxied to the backend.*

## Validation

- Tested cross-browser compatibility.
- Fully accessible keyboard navigation within modals and the lightbox.
- Scroll-locking active for all overlays.
- Production build succeeds without errors (`npm run build`).

## Author

Developed as part of the PlayPowerLabs Assignment.
