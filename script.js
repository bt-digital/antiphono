// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
if (cursor && window.matchMedia('(pointer: fine)').matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  const animCursor = () => {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(animCursor);
  };
  animCursor();
  document.querySelectorAll('a, button, .capability, .work-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });
}

// ===== Scroll reveal — IntersectionObserver =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-up, .img-reveal, [data-reveal]').forEach(el => revealObserver.observe(el));

// Legacy .reveal support
const legacyRevealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      legacyRevealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 60}ms`;
  legacyRevealObs.observe(el);
});

// ===== Hero text reveal on load =====
setTimeout(() => {
  document.querySelectorAll('.hero .text-reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), i * 160);
  });
  const eyebrow = document.getElementById('heroEyebrow');
  if (eyebrow) setTimeout(() => eyebrow.classList.add('is-visible'), 100);
  const heroMedia = document.getElementById('heroMedia');
  if (heroMedia) setTimeout(() => heroMedia.classList.add('is-visible'), 600);
}, 100);

// ===== Book section text reveal =====
const bookRevealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.text-reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 150);
      });
      bookRevealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

const bookSection = document.querySelector('.book-section');
if (bookSection) bookRevealObs.observe(bookSection);

// ===== Parallax on work items and hero media =====
const parallaxEls = document.querySelectorAll('.work-item .parallax-img');
const heroParallax = document.querySelector('.hero__media-inner');

const handleParallax = () => {
  parallaxEls.forEach(el => {
    const item = el.closest('.work-item');
    if (!item) return;
    const rect = item.getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    const offset = (mid - window.innerHeight / 2) * 0.15;
    el.style.transform = `translateY(${offset}px) scale(1.15)`;
  });
  if (heroParallax) {
    const offset = window.scrollY * 0.08;
    heroParallax.style.transform = `translateY(${offset}px) scale(1.12)`;
  }
};

window.addEventListener('scroll', handleParallax, { passive: true });
handleParallax();

// ===== Sticky nav: compact on scroll =====
const topnav = document.getElementById('topnav');
if (topnav) {
  const THRESHOLD = 20;
  let ticking = false;
  const applyNavState = () => {
    topnav.classList.toggle('is-compact', window.scrollY > THRESHOLD);
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

// ===== Work scroll: sync sticky stage with scrolled chapters (for work.html) =====
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
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}
