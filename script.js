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

// ===== Mobile nav: hamburger toggle =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  const closeMenu = () => {
    navToggle.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };
  const openMenu = () => {
    navToggle.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  };
  navToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) closeMenu(); else openMenu();
  });
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
