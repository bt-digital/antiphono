/* Shared rendering helpers used across index.html, work.html, work-project.html,
   articles.html, article.html and reports.html. Requires data.js to be loaded first. */

const ARROW_SVG = '<svg class="link-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13L13 3M5 3h8v8" stroke="currentColor" stroke-width="1.3" fill="none"/></svg>';

const VISUAL_ICONS = {
  fintech: '<svg class="work-tile__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V9M10 19V4M16 19V12M22 19V7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  health: '<svg class="work-tile__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12h4l2-5 4 10 3-7 2 4h5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  robotics: '<svg class="work-tile__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  logistics: '<svg class="work-tile__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 18c3-8 6 4 9-3s6-3 9-9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="3" cy="18" r="1.3" fill="currentColor"/><circle cx="21" cy="6" r="1.3" fill="currentColor"/></svg>'
};

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function pickRelated(array, slug, count) {
  const idx = array.findIndex((item) => item.slug === slug);
  const result = [];
  for (let i = 1; i <= array.length - 1 && result.length < count; i++) {
    result.push(array[(idx + i) % array.length]);
  }
  return result;
}

/* ===== Work tiles / showcase grid ===== */

function chipsHTML(categories) {
  return categories.map((c) => `<span class="chip">${escapeHTML(c)}</span>`).join('');
}

function workTileHTML(project, positionClass) {
  const activeChip = project.active
    ? '<span class="chip-active"><span class="chip-active__dot"></span>Active</span>'
    : '';
  return `
    <a class="work-tile ${positionClass} reveal" href="work-project.html?slug=${encodeURIComponent(project.slug)}">
      <div class="work-tile__visual work-tile__visual--${project.visual}">${VISUAL_ICONS[project.visual] || ''}</div>
      <div class="work-tile__scrim"></div>
      ${activeChip}
      <div class="work-tile__content">
        <div class="work-tile__chips">${chipsHTML(project.categories)}</div>
        <h3 class="work-tile__title">${escapeHTML(project.title)}</h3>
        <p class="work-tile__desc">${escapeHTML(project.summary)}</p>
        <span class="work-tile__cta">View case study ${ARROW_SVG}</span>
      </div>
    </a>`;
}

function workShowcaseGroupHTML(items) {
  const positions = ['work-tile--feature', 'work-tile--b', 'work-tile--c', 'work-tile--wide'];
  return `<div class="work-showcase">${items.map((p, i) => workTileHTML(p, positions[i] || '')).join('')}</div>`;
}

function renderWorkGrid(container, projects) {
  if (!container) return;
  let html = '';
  for (let i = 0; i < projects.length; i += 4) {
    html += workShowcaseGroupHTML(projects.slice(i, i + 4));
  }
  container.innerHTML = html;
}

function compactProjectTileHTML(project) {
  const activeChip = project.active
    ? '<span class="chip-active"><span class="chip-active__dot"></span>Active</span>'
    : '';
  return `
    <a class="work-tile work-tile--compact reveal" href="work-project.html?slug=${encodeURIComponent(project.slug)}">
      <div class="work-tile__visual work-tile__visual--${project.visual}">${VISUAL_ICONS[project.visual] || ''}</div>
      <div class="work-tile__scrim"></div>
      ${activeChip}
      <div class="work-tile__content">
        <div class="work-tile__chips">${chipsHTML(project.categories.slice(0, 1))}</div>
        <h3 class="work-tile__title">${escapeHTML(project.title)}</h3>
        <span class="work-tile__cta">View case study ${ARROW_SVG}</span>
      </div>
    </a>`;
}

function renderMoreProjects(container, currentSlug) {
  if (!container) return;
  const related = pickRelated(PROJECTS, currentSlug, 3);
  container.innerHTML = `<div class="compact-grid">${related.map(compactProjectTileHTML).join('')}</div>`;
}

/* ===== Project detail page ===== */

function renderProjectDetailPage() {
  const slug = getQueryParam('slug');
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];
  document.title = `${project.title} — Antiphono`;

  const hero = document.getElementById('projectHero');
  if (hero) {
    const activeChip = project.active
      ? '<span class="chip-active"><span class="chip-active__dot"></span>Active</span>'
      : '';
    hero.innerHTML = `
      <div class="work-tile__visual work-tile__visual--${project.visual}">${VISUAL_ICONS[project.visual] || ''}</div>
      <div class="work-tile__scrim"></div>
      ${activeChip}
      <div class="project-hero__content">
        <a class="project-hero__back" href="work.html">&larr; All work</a>
        <div class="work-tile__chips">${chipsHTML(project.categories)}</div>
        <h1 class="project-hero__title">${escapeHTML(project.title)}</h1>
        <p class="project-hero__meta">${escapeHTML(project.client)} &middot; ${escapeHTML(project.year)}</p>
      </div>`;
  }

  const overview = document.getElementById('projectOverview');
  if (overview) {
    overview.innerHTML = `
      <div class="project-overview__text">
        ${project.overview.map((p) => `<p>${escapeHTML(p)}</p>`).join('')}
      </div>
      <ul class="project-overview__meta">
        <li><span class="project-overview__meta-label">Client</span>${escapeHTML(project.client)}</li>
        <li><span class="project-overview__meta-label">Year</span>${escapeHTML(project.year)}</li>
        <li><span class="project-overview__meta-label">Discipline</span>${escapeHTML(project.categories.join(', '))}</li>
        <li><span class="project-overview__meta-label">Status</span>${project.active ? 'Active engagement' : 'Completed'}</li>
      </ul>`;
  }

  const gallery = document.getElementById('projectGallery');
  if (gallery) {
    gallery.innerHTML = project.gallery
      .map(
        (g) => `
      <figure class="gallery-panel">
        <div class="gallery-panel__visual work-tile__visual--${project.visual}">${VISUAL_ICONS[project.visual] || ''}</div>
        <figcaption class="gallery-panel__caption">${escapeHTML(g.caption)}</figcaption>
      </figure>`
      )
      .join('');
  }

  renderMoreProjects(document.getElementById('moreProjects'), project.slug);
}

/* ===== Articles ===== */

function articleRowHTML(article) {
  return `
    <a class="article-row reveal" href="article.html?slug=${encodeURIComponent(article.slug)}" data-category="${escapeHTML(article.category)}">
      <span class="article-row__date">${formatDate(article.date)}</span>
      <span class="article-row__category">${escapeHTML(article.category)}</span>
      <h3 class="article-row__title">${escapeHTML(article.title)}</h3>
      <p class="article-row__excerpt">${escapeHTML(article.excerpt)}</p>
      <span class="article-row__cta">Read article ${ARROW_SVG}</span>
    </a>`;
}

function renderArticleList(container, articles) {
  if (!container) return;
  container.innerHTML = articles.map(articleRowHTML).join('');
}

function setupArticleFilters(filterContainer, listContainer) {
  if (!filterContainer || !listContainer) return;
  const categories = ['All', ...new Set(ARTICLES.map((a) => a.category))];
  filterContainer.innerHTML = categories
    .map((c, i) => `<button class="filter-chip${i === 0 ? ' is-active' : ''}" data-filter="${escapeHTML(c)}" type="button">${escapeHTML(c)}</button>`)
    .join('');
  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;
    filterContainer.querySelectorAll('.filter-chip').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    listContainer.querySelectorAll('.article-row').forEach((row) => {
      row.style.display = filter === 'All' || row.dataset.category === filter ? '' : 'none';
    });
  });
}

function renderRelatedArticles(container, currentSlug) {
  if (!container) return;
  const related = pickRelated(ARTICLES, currentSlug, 3);
  container.innerHTML = related.map(articleRowHTML).join('');
}

function renderArticleDetailPage() {
  const slug = getQueryParam('slug');
  const article = ARTICLES.find((a) => a.slug === slug) || ARTICLES[0];
  document.title = `${article.title} — Antiphono`;

  const hero = document.getElementById('articleHero');
  if (hero) {
    hero.innerHTML = `
      <div class="work-tile__visual work-tile__visual--${article.visual}">${VISUAL_ICONS[article.visual] || ''}</div>
      <div class="work-tile__scrim"></div>
      <div class="project-hero__content">
        <a class="project-hero__back" href="articles.html">&larr; All articles</a>
        <div class="work-tile__chips"><span class="chip">${escapeHTML(article.category)}</span></div>
        <h1 class="project-hero__title">${escapeHTML(article.title)}</h1>
        <p class="project-hero__meta">${formatDate(article.date)}</p>
      </div>`;
  }

  const body = document.getElementById('articleBody');
  if (body) {
    body.innerHTML = article.body.map((p) => `<p>${escapeHTML(p)}</p>`).join('');
  }

  renderRelatedArticles(document.getElementById('relatedArticles'), article.slug);
}

/* ===== Reports ===== */

function reportRowHTML(report) {
  return `
    <div class="report-download-row reveal">
      <span class="report-download-row__date">${escapeHTML(report.year)}</span>
      <div class="report-download-row__body">
        <h3 class="report-download-row__title">${escapeHTML(report.title)}</h3>
        <p class="report-download-row__abstract">${escapeHTML(report.abstract)}</p>
      </div>
      <a class="report-download-row__btn" href="${report.file}" download>
        Download PDF
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8m0 0l-3-3m3 3l3-3M3 13h10" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>`;
}

function renderReportList(container, reports) {
  if (!container) return;
  container.innerHTML = reports.map(reportRowHTML).join('');
}
