# Vanaja — Personal Portfolio Website

A modern, responsive, beginner-friendly personal portfolio built with **HTML5, CSS3, and Vanilla JavaScript** — no frameworks.

## 📁 Folder Structure

```
portfolio/
├── index.html      # Page structure
├── style.css       # Design system + responsive layout
├── script.js       # Interactivity (theme, typing, validation, etc.)
├── images/         # Profile / project images
├── assets/         # Resume PDF, downloads
└── README.md       # This file
```

## ✨ Features

- Sticky navigation bar with active link highlighting
- Animated typing effect in the hero section
- Dark / Light mode toggle (saved in `localStorage`)
- Scroll reveal animations (IntersectionObserver)
- Smooth scrolling & back-to-top button
- Contact form with client-side JavaScript validation
- Fully responsive (mobile, tablet, desktop)
- Loading spinner on first load
- Semantic HTML + accessible labels

## 🖥️ Sections

1. **Home** — intro, resume & contact buttons
2. **About** — objective, education, interests, hobbies, strengths
3. **Skills** — HTML, CSS, JS, Python, Java, SQL, Git/GitHub, MS Office
4. **Education** — timeline (School → Higher Secondary → B.Sc. CS, Univ. of Madras)
5. **Projects** — Student Management, Library Management, Expense Tracker, To-Do List, Portfolio
6. **Certifications** — course cards
7. **Contact** — form + email/phone/location
8. **Footer** — socials, copyright, "Made with ❤ by Vanaja"

## 🚀 Run Locally

**Option 1 — Just open the file:**
Double-click `index.html`. It runs directly in any modern browser.

**Option 2 — With a small local server (recommended):**

Using Python:
```bash
cd portfolio
python -m http.server 5500
# open http://localhost:5500
```

Using VS Code:
- Install the **Live Server** extension
- Right-click `index.html` → **Open with Live Server**

## 🎨 Customize

- Replace `images/profile.svg` with your own photo (`profile.jpg`) and update the `<img src>` in `index.html`.
- Drop your resume as `assets/resume.pdf`.
- Update project links (`GitHub`, `Live Demo`) in the Projects section.
- Change colors by editing the CSS variables at the top of `style.css`:
  ```css
  :root {
    --primary: #6c63ff;
    --accent:  #ff8ba7;
    ...
  }
  ```

## 🧠 Code Walkthrough

**`index.html`** — semantic sections (`<header>`, `<section>`, `<footer>`) each with an `id` so the navbar can link to them. Font Awesome (CDN) supplies icons.

**`style.css`** — organized top-to-bottom:
1. CSS variables (light + dark themes)
2. Base reset & typography
3. Navigation, hero, sections
4. Component styles (cards, buttons, timeline, form)
5. Animations & scroll-reveal
6. Responsive breakpoints (`@media`)

**`script.js`** — numbered blocks:
1. Loader hide
2. Theme toggle (with `localStorage`)
3. Mobile menu
4. Typing effect
5. Scroll reveal via `IntersectionObserver`
6. Active nav highlight on scroll
7. Back-to-top button
8. Contact form validation
9. Auto-updating footer year

## 🔮 Future Improvements

- Connect the contact form to a real backend (EmailJS, Formspree, or a serverless function)
- Add project detail pages
- Add a blog section
- Add multilingual (English / Tamil) support
- Improve accessibility with keyboard focus styles and ARIA live regions
- Add unit tests for the validation logic
- Deploy to GitHub Pages / Netlify / Vercel

---

Made with ❤ by **Vanaja**
