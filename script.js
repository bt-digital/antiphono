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

// ===== Work scroll: sync sticky visual stage with scrolled chapter =====
const workChapterEls = document.querySelectorAll('.work-chapter');
const workFrameEls   = document.querySelectorAll('.work-frame');
const workDotEls     = document.querySelectorAll('.work-scroll__dot');
const workScrollCounter = document.getElementById('workScrollCounter');

if (workChapterEls.length && workFrameEls.length) {
  const activateProject = (idx) => {
    workFrameEls.forEach((f, i) => f.classList.toggle('is-active', i === idx));
    workChapterEls.forEach((c, i) => c.classList.toggle('is-active', i === idx));
    workDotEls.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    if (workScrollCounter) {
      workScrollCounter.textContent =
        `${String(idx + 1).padStart(2, '0')} / ${String(workChapterEls.length).padStart(2, '0')}`;
    }
  };

  const chapterIO = new IntersectionObserver(
    (entries) => {
      let best = null, bestRatio = 0;
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
          best = entry; bestRatio = entry.intersectionRatio;
        }
      });
      if (best) activateProject(parseInt(best.target.dataset.index, 10));
    },
    { threshold: [0.3, 0.5, 0.7], rootMargin: '0px 0px -25% 0px' }
  );
  workChapterEls.forEach(ch => chapterIO.observe(ch));

  workDotEls.forEach((dot, i) => {
    dot.addEventListener('click', () =>
      workChapterEls[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
  });
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
