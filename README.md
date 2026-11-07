# CampusCode — Modern Student Innovation Workspace & Design System

A modern, production-grade recreation and refinement of **CampusCode**, featuring the **White Spectrum** design language, an architectural obsidian navigation system, and an authenticated student hackathon innovation workspace.

![CampusCode Overview](assets/gradient-cc-logo.png)

---

## 🌟 Overview & Design Philosophy

This repository contains the complete design and frontend architecture for CampusCode, meticulously refined from the ground up:

- **White Spectrum Visual System**: 70%+ pure white and neutral architectural surfaces, balanced with 20% soft blue/peach/indigo undertones and 10% saturated brand accents (`#273FC5` Sarvam blue and `#F47742` warm orange).
- **Obsidian Matte Black Navigation**: An architectural 68px left rail (`#0C0D10`) with glowing active indicators, smooth hover tooltips, and fluid tab switching.
- **Harmonious Grid Proportions**: Zero empty voids or uneven cards. Row 1 (Active Event, Deliverables Checklist, Competition Schedule) and Row 2 (Verification Tasks, Digital Student ID, Recent Activity Table) align across all breakpoints.
- **Tactile Digital Student ID**: Interactive pass card with cryptographic EMV microchip, live status badge, and "Arise Pass ↗" modal transition.
- **Multi-Tiered Responsiveness**: Fluid layout supporting viewports from 360px mobile up to 2048px ultra-wide desktop with zero horizontal overflow.

---

## 🚀 Key Features

### 1. Authenticated Student Innovation Workspace (`student.html`)
- **Row 1 Balanced Grid**:
  - *Active Event Card*: Live hackathon status, next action tag, dynamic countdown timer, and direct CTA actions.
  - *Deliverables Checklist*: 4-stage readiness tracker with verified badges and preflight launch trigger.
  - *Competition Schedule*: Weekly day selector and timed milestone agenda slots.
- **Row 2 Workspace Core**:
  - *Verification Tasks*: Real-time commit tree, edge response, and viewport test progress bars.
  - *Digital Student ID Feature Card*: Miniature NFC pass preview with on-chain verification indicator and arise trigger.
  - *Recent Activity Feed*: Filterable structured table with category-coded badge icons, timestamp audit, and action triggers.
- **Workspace Navigation & Drawers**:
  - *RuleBot AI Assistant*: Instant guideline search and rubric Q&A.
  - *Interactive Submission Modal*: Preflight SHA-256 hash generation and submission locking.

### 2. Kinetic Public Landing Page (`index.html`)
- **WebGL Kinetic Marquee**: High-performance ribbon rendering via OGL / WebGL.
- **Creative Motion & Typography**: Clean sans-serif headings, smooth Lenis scrolling, and modern responsive collaboration cards.
- **Interactive Visual Modules**: Mandala geometric tokens, suspended status cards, and feature breakdowns.

### 3. Authentication Flow (`login.html`, `register.html`)
- Semantic form structures with real-time field validation.
- OTP verification mock flow and credential persistence in sandbox mode.

---

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5, Modern CSS3 (Custom Properties & Grid), ES6+ JavaScript.
- **Graphics & Motion**: [OGL](https://github.com/oframe/ogl) (Minimal WebGL library), [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform), [Lenis](https://github.com/darkroomengineering/lenis) (Smooth scroll engine).
- **Architecture**: Zero-build runtime. Runs directly in any modern browser or lightweight Node.js static server.

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/tnex0734-ops/redesign-campus-code.git
cd redesign-campus-code

# Install dependencies (OGL, GSAP, Lenis)
npm install

# Start local server
npm start
```
The application will launch at `http://localhost:8080/`.

### Run Verification Tests
```bash
npm test
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Viewport | Grid Architecture | Navigation Mode |
|---|---|---|---|
| **Desktop** | $\ge 1025\text{px}$ | 3-Column Balanced Grid (`repeat(3, 1fr)`) | Fixed 68px Obsidian Rail |
| **Tablet / Laptop** | $769\text{px} - 1024\text{px}$ | 2-Column Responsive Flow with Full-Width Spanners | Fixed Rail / Compact Bar |
| **Mobile** | $\le 768\text{px}$ | 1-Column Sequential Card Stack | Slide-out Drawer Navigation |

---

## 👤 Author

**Chandana Taushik** ([@tnex0734-ops](https://github.com/tnex0734-ops))  
*AI-Native Product Designer & Creative Technologist*

---

## 📄 License

MIT License — Created for the CampusCode Hackathon & Design Engineering Showcase.
