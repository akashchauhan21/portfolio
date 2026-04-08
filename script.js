// Theme toggle
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
let theme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', theme);
toggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Skill bars
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-grid').forEach(g => skillObserver.observe(g));

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.borderBottomColor =
    window.scrollY > 50 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)';
});

// Form submit
function handleSubmit(btn) {
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg,#25d366,#128c7e)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
  }, 3000);
}