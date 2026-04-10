/* ============================================
   ZINTAGROW — COMMON JS
   Shared across all pages
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── THEME TOGGLE ──
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  let theme = localStorage.getItem('zg-theme') || 'dark';
  html.setAttribute('data-theme', theme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', theme);
      localStorage.setItem('zg-theme', theme);
    });
  }

  // ── HAMBURGER MENU ──
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── ACTIVE NAV LINK (highlight current page) ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ── NAV SCROLL BORDER ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(255,255,255,0.12)'
        : 'rgba(255,255,255,0.06)';
    });
  }

});
