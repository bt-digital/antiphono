// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
    io.observe(el);
  });
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ===== Sticky nav: tall on landing, compact once scrolled =====
const topnav = document.getElementById('topnav');
if (topnav) {
  const SCROLL_THRESHOLD = 24;
  let ticking = false;
  const applyNavState = () => {
    topnav.classList.toggle('is-compact', window.scrollY > SCROLL_THRESHOLD);
    ticking = false;
  };
  applyNavState();
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(applyNavState);
      ticking = true;
    }
  }, { passive: true });
}

// ===== Contrast / theme toggle (cosmetic invert of root tokens) =====
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-mode');
  });
}
