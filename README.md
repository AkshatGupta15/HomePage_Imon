# HomePage Prof. Imon 

A professional, fast, and responsive website built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

##  Overview

This project serves as a modern academic or research group site, structured with:

- Multiple pages: `Home`, `Research`, `Group`, `Publications`, `Teaching`, etc.
- Clean responsive layout with Tailwind CSS
- Route-based navigation with active link styling

---

##  Tech Stack

-  **React** (with hooks)
-  **Vite** (for blazing fast development)
-  **TypeScript**
-  **Tailwind CSS**

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AkshatGupta15/HomePage_Imon
cd HomePage_Imon
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

---

##  Folder Structure

```
.
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── images
│       ├── APF1.png
│       ├── avatar-default.svg
│       ├── Expansion.png
│       ├── iitk.png
│       ├── logo2.png
│       ├── OTA1.png
│       └── OTA2.png
├── README.md
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AnimatedList
│   │   │   └── AnimatedList.tsx
│   │   ├── custom
│   │   │   ├── background.tsx
│   │   │   └── navbar.tsx
│   │   ├── magicui
│   │   │   ├── animated-grid-pattern.tsx
│   │   │   └── box-reveal.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── resizable-navbar.tsx
│   │       ├── separator.tsx
│   │       └── sticky-scroll-reveal.tsx
│   ├── data
│   │   ├── Groups.json
│   │   ├── news.json
│   │   ├── Publication.json
│   │   └── Research.json
│   ├── index.css
│   ├── layout.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── group.tsx
│   │   ├── hero.tsx
│   │   ├── Homepage.tsx
│   │   ├── publications.tsx
│   │   ├── Research.tsx
│   │   └── teachings.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---





##  Responsive Design

* Desktop view shows all links inline.
* Mobile view collapses into a menu with a hamburger toggle.
* Uses Tailwind utilities for responsive layout and styling.

---



## 📄 License

This project is open-source under the [MIT License](LICENSE).
