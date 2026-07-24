/* =========================================================
   Portfolio Website - JavaScript
   Beginner-friendly, well-commented vanilla JS.
   ========================================================= */

/* ---------- 1. Loading animation ---------- */
// Hide the loader once the page has fully loaded.
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 400);
  }
});

/* ---------- 2. Dark / Light mode toggle ---------- */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme (persists across refreshes).
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Swap icon
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon', !isDark);
  icon.classList.toggle('fa-sun', isDark);
});

/* ---------- 3. Mobile menu toggle ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the mobile menu when a link is clicked.
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- 4. Typing effect in hero section ---------- */
const typingEl = document.getElementById('typing');
const phrases = [
  'B.Sc. Computer Science Student',
  'Web Developer',
  'Problem Solver',
  'Lifelong Learner'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause at end
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

/* ---------- 5. Scroll reveal animations ---------- */
// Uses IntersectionObserver — modern & efficient.
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

/* ---------- 6. Active menu highlighting on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120; // account for sticky navbar

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });

  // Back-to-top button visibility
  const backBtn = document.getElementById('backToTop');
  if (window.scrollY > 400) backBtn.classList.add('visible');
  else backBtn.classList.remove('visible');
});

/* ---------- 7. Back to top button ---------- */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- 8. Contact form validation ---------- */
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

function setError(field, message) {
  const el = form.querySelector(`[data-error-for="${field}"]`);
  if (el) el.textContent = message || '';
}

function isValidEmail(email) {
  // Simple email regex — good enough for a beginner project.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();
  let valid = true;

  // Reset previous errors
  ['name', 'email', 'subject', 'message'].forEach(f => setError(f, ''));

  if (name.length < 2) { setError('name', 'Please enter your name.'); valid = false; }
  if (!isValidEmail(email)) { setError('email', 'Please enter a valid email.'); valid = false; }
  if (subject.length < 3) { setError('subject', 'Subject is too short.'); valid = false; }
  if (message.length < 10) { setError('message', 'Message must be at least 10 characters.'); valid = false; }

  if (!valid) return;

  // In a real project, send this to a backend or email service.
  // For now, just show a success message and reset the form.
  successMsg.hidden = false;
  form.reset();
  setTimeout(() => (successMsg.hidden = true), 4000);
});

/* ---------- 9. Footer year auto-update ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
