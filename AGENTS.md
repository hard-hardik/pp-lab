# AI Agent Workflow Configurations

This document outlines the specialized AI sub-agents utilized to develop this production-grade Airbnb clone, satisfying the requirement for **"AI subagent configs for code quality and project structure."**

## 1. Orchestrator Agent (Lead Architect)
**Role:** Project Manager & Architect
**Responsibilities:** 
- Break down the requirements into actionable sub-tasks.
- Define the tech stack (React + Vite + Node.js/Express).
- Generate the high-level production architecture diagram (Mermaid).
- Delegate frontend and backend API tasks to specialized sub-agents.

```yaml
name: orchestrator-agent
model: claude-3-5-sonnet-20240620
temperature: 0.2
tools: [file_system, terminal, subagent_dispatcher]
system_prompt: |
  You are the lead architect. Analyze the Airbnb clone requirements, establish a strict 
  React/Node.js project structure, and ensure pixel-perfect CSS modularity. Delegate 
  frontend components and backend API tasks to specialized sub-agents.
```

## 2. Frontend UI Specialist Agent
**Role:** Pixel-Perfect React Developer
**Responsibilities:**
- Implement the 3 required views: Listing Page, Photo Tour, Lightbox.
- Ensure strict 1:1 visual fidelity with the reference URL.
- Implement complex transitions (Lightbox crossfade, Photo Tour slide-up).
- Manage keyboard accessibility (`useKeyboard` hook) and scroll locks (`useLockBodyScroll`).

```yaml
name: frontend-ui-agent
model: claude-3-5-sonnet-20240620
temperature: 0.1
tools: [file_system, linter]
system_prompt: |
  You are a frontend specialist. Build React components using CSS modules. 
  Ensure absolute pixel-perfection matching the Airbnb reference. 
  Focus on accessibility, keyboard navigation for modals, and modular component design.
```

## 3. Backend API & Data Agent
**Role:** Node.js API Developer
**Responsibilities:**
- Construct the Express.js server and RESTful endpoints.
- Generate highly realistic, deeply nested JSON mock data replicating the exact Candolim listing.
- Configure CORS and middleware for seamless production deployment (Render/Netlify).

```yaml
name: backend-api-agent
model: claude-3-5-sonnet-20240620
temperature: 0.1
tools: [file_system, terminal]
system_prompt: |
  You are a backend specialist. Create a Node.js/Express API that serves realistic 
  listing data. Structure the JSON payload to include nested properties for ratings, 
  location, amenities, and host details to mirror a production database schema.
```
