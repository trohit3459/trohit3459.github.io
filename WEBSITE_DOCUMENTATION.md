# Portfolio Website Documentation

## 🌐 Live URL
**[https://trohit3459.github.io/](https://trohit3459.github.io/)**

---

## 🚀 Overview
A high-performance, recruiter-focused portfolio website designed for a Senior Software Engineer. The site features a modern, premium aesthetic with dynamic interactions and is built for maximum speed and easy maintainability.

## 🛠 Technology Stack
- **Frontend**: Semantic HTML5, Vanilla CSS3 (Custom Design System), JavaScript (ES6+).
- **Architecture**: Data-driven UI. All content is decoupled from the code and stored in a central JSON file.
- **Local Development**: Node.js HTTP server.
- **Deployment**: GitHub Pages.
- **CI/CD**: GitHub Actions.

---

## 🏗 System Architecture

### 1. Data-Driven Design (`content.json`)
The entire website's content—from hero text and skills to project details and experience—is managed in `content.json`. This allows for content updates without touching the HTML/CSS/JS logic.

### 2. Frontend Logic (`app.js`)
- **Dynamic Fetch**: The app fetches `content.json` on load and populates the DOM.
- **Interactions**: Implements Intersection Observers for scroll animations, modal logic for project deep-dives, and mobile navigation.
- **Static Fallback**: Includes a `mailto:` fallback for the contact form to ensure functionality on static hosting platforms like GitHub Pages.

### 3. Styling (`styles.css`)
- **Design System**: Built using CSS variables for a consistent color palette, typography, and spacing.
- **Premium Aesthetics**: Utilizes glassmorphism, subtle gradients, and custom micro-animations (e.g., skill bar fills, hero blobs).

---

## 📦 Deployment & CI/CD

### GitHub Pages Setup
The repository is named `trohit3459.github.io` to serve as the primary user site.

### Automated Workflow (`.github/workflows/static.yml`)
A custom GitHub Action is configured to:
1. Trigger on every `push` to the `main` branch.
2. Automatically package the root files.
3. Deploy the latest version to GitHub Pages.
*This bypasses the need for manual configuration in the GitHub UI.*

---

## 🔧 Maintenance Guide

### How to Update Content
To update your experience, projects, or contact info:
1. Open `content.json`.
2. Edit the relevant fields.
3. Commit and push the changes to GitHub.
4. The site will update automatically within 60 seconds.

### Local Development
To test changes locally before pushing:
1. Open a terminal in the project directory.
2. Run: `npm run dev` (or `node server.js`).
3. Visit: `http://localhost:3000`.

---

## ✨ Key Features
- **Responsive Layout**: Pixel-perfect on mobile, tablet, and desktop.
- **Glassmorphism UI**: Modern frosted-glass effect for cards and navigation.
- **Project Modals**: Detailed pop-ups for projects including Problem, Solution, and Impact.
- **Performance Optimized**: Zero external dependencies (except Google Fonts), leading to near-instant load times.
- **SEO Ready**: Semantic HTML and meta tags for visibility.
