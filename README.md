# gretexcorporate Assigment. - Premium E-Commerce Landing Page

A modern, visually premium single-page marketing site and full-stack contact flow built for the Gretex Industries Frontend Developer assignment.

**Live Demo:** [https://gretexcorporate-5fta.vercel.app/](https://gretexcorporate-5fta.vercel.app/)


**Fully Responsive Layout: Laptop & PC** 
<img width="1915" height="892" alt="image" src="https://github.com/user-attachments/assets/30d0ca74-2c6d-4c21-b366-5cb6a33973ac" />


**Fully Responsive Layout:Mobile & TAB** 
<img width="885" height="735" alt="image" src="https://github.com/user-attachments/assets/79710449-0f9e-4e09-8f75-2be917fe106d" />

<img width="657" height="800" alt="image" src="https://github.com/user-attachments/assets/f3dfb5bc-db05-49c5-a271-e9839e31a7a6" />

---

## 🎯 Objective & Overview
This project demonstrates a high-end, responsive UI utilizing a deliberate design system, paired with a secure, rate-limited Node.js backend to process and persist contact form submissions[cite: 1]. The primary focus is on visual polish, responsive layouts across all devices, and clean code structure[cite: 1].

### Key Features Implemented:
*   **Fully Responsive Layout:** Flawless scaling across mobile (≤480px), tablet (~768px), and desktop (≥1200px).
*   **Premium Micro-interactions:** Smooth transitions, hover states, and scroll-triggered entrance animations.
*   **End-to-End Contact Flow:** A sleek frontend form connected to a Node.js/Express backend that validates, sanitizes, and persists data to MongoDB.
*   **Accessibility (a11y):** Semantic HTML, sufficient color contrast, and keyboard-focusable elements.

---

## ✨ Bonus Points Achieved
To go above and beyond the baseline requirements, the following bonus features were implemented:
1.  **Dark/Light Mode Toggle:** Seamless theme switching utilizing Tailwind's class strategy.
2.  **Reusable Design Tokens:** A strictly defined color palette, typography scale (Inter/Geist and serif fonts), and spacing rhythm configured in `tailwind.config.js`.
3.  **Rate-Limiting & Spam Protection:** The backend utilizes `express-rate-limit` to prevent abuse of the `/api/contact` endpoint.
4.  **Deployed Live Demo:** The entire application (frontend and serverless backend) is deployed and accessible via Vercel.

---

## 🛠 Tech Choices & Stack

### Frontend (Client)
*   **React + Vite:** Chosen for lightning-fast Hot Module Replacement (HMR) and optimized production builds. 
*   **Tailwind CSS:** Utilized for utility-first styling, enabling a highly custom design system without the overhead of rigid component libraries.
*   **GSAP (GreenSock) & Lenis:** Implemented for complex timeline animations and buttery-smooth momentum scrolling to emulate the award-winning SaaS sites referenced in the prompt.

### Backend (Server)
*   **Node.js & Express:** Provides a lightweight, fast, and scalable API architecture.
*   **MongoDB & Mongoose:** Used for persistent storage of contact submissions. A NoSQL schema fits perfectly for flexible, high-speed form persistence.
*   **Express-Validator:** Ensures strict server-side validation and sanitization (escaping HTML, normalizing emails) to prevent injection attacks.

---

## ⚙️ Environment Variables

To run this project locally, you must configure the following environment variables.

Create a `.env` file in the **backend** directory:
\`\`\`env
# backend/.env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string_here
\`\`\`

Create a `.env` file in the **frontend** directory (Optional, if dynamically routing):
\`\`\`env
# frontend/.env
VITE_API_URL=http://localhost:5000
\`\`\`

---

## 🚀 Local Setup & Run Instructions

This project is structured as a monorepo containing both the frontend and backend.

### 1. Start the Backend API
Navigate to the backend directory, install dependencies, and start the Express server.
\`\`\`bash
cd backend
npm install
node server.js 
# Ensure your MongoDB URI is set in the .env file before running
\`\`\`
*The server will run on `http://localhost:5000`*

### 2. Start the Frontend Application
Open a new terminal window, navigate to the frontend directory, install dependencies, and start the Vite development server.
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
*The application will run on `http://localhost:5173`*

---

## 🧠 Assumptions & Trade-offs

1.  **Vite vs. Next.js:** While Next.js was a preferred stack option[cite: 1], I chose a decoupled React/Vite architecture. This decision was made to explicitly demonstrate the ability to manually construct and secure an Express API (handling CORS, manual rate-limiting, and middleware routing), which is often abstracted away by Next.js API routes. Vercel's `vercel.json` orchestration was used to deploy both as a unified service.
2.  **Serverless Architecture on Vercel:** To deploy the Express backend to Vercel alongside the Vite frontend, the Express app is exported (`module.exports = app`) rather than continuously listening on a port (`app.listen`). This adapts the Node.js API into Vercel Serverless Functions.
3.  **Animation Overhead vs. Premium Feel:** Adding GSAP and Lenis slightly increases the JavaScript bundle size. However, given the assignment's strong emphasis on visual polish, bold hero designs, and smooth scroll animations (referencing Framer and Awwwards)[cite: 1], the trade-off for the enhanced UX was deemed highly beneficial.

---

## 📂 Folder Structure Overview

\`\`\`text
root/
├── frontend/             # React application (Client)
│   ├── src/
│   │   ├── components/   # Reusable UI blocks (Hero, Navbar, Contact)
│   │   ├── pages/        # Route views
│   │   └── App.jsx       # Main layout and animation wrappers
│   └── tailwind.config.js# Design tokens and theme configuration
│
├── backend/              # Node.js API (Server)
│   ├── models/             
│   │   └── contact.js    # Mongoose schema for database persistence
│   └── server.js         # API endpoint, validation, and rate-limiting
│
├── vercel.json           # Vercel deployment orchestration
└── package.json          # Root build scripts
\`\`\`

---

## 🧠 Design Decisions & Trade-offs

*   **Vite vs. Next.js:** The assignment prompt suggested Next.js but allowed flexibility. I chose a decoupled architecture (React/Vite frontend + Express backend) to demonstrate the ability to manually configure server-side rate limiting, CORS, and data sanitization pipelines natively in Express, then adapted it for Vercel's serverless environment.
*   **Animation Strategy:** While Framer Motion is standard for React, I utilized GSAP coupled with Lenis smooth-scrolling to achieve the highly specific, complex timeline animations that are characteristic of award-winning marketing sites.
