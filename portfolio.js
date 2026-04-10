/* ============================================
   ZINTAGROW — PORTFOLIO PAGE JS (index.html)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── SKILL BARS ANIMATION ──
  const skillsGrid = document.querySelectorAll('.skills-grid');
  if (skillsGrid.length) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(fill => {
            fill.style.width = fill.dataset.width + '%';
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    skillsGrid.forEach(g => skillObserver.observe(g));
  }

  // ── CONTACT FORM ──
  const formSubmit = document.querySelector('.form-submit');
  if (formSubmit) {
    formSubmit.addEventListener('click', () => {
      formSubmit.textContent = '✓ Message Sent!';
      formSubmit.style.background = 'linear-gradient(135deg,#25d366,#128c7e)';
      setTimeout(() => {
        formSubmit.textContent = 'Send Message →';
        formSubmit.style.background = '';
      }, 3000);
    });
  }

  // ── HERO PARALLAX (subtle) ──
  const heroGlow = document.querySelector('.hero-glow');
  const heroGlow2 = document.querySelector('.hero-glow-2');
  if (heroGlow) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroGlow.style.transform  = `translate(${x}px, ${y}px)`;
      if (heroGlow2) heroGlow2.style.transform = `translate(${-x}px, ${-y}px)`;
    });
  }

});
