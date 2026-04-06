(function () {
  const grid = document.querySelector('[data-portfolio-grid]');
  const filters = document.querySelector('[data-portfolio-filters]');
  if (!grid || !window.SAFI_PORTFOLIO) return;

  const categories = ['الكل', ...new Set(window.SAFI_PORTFOLIO.map((item) => item.category))];
  let activeCategory = 'الكل';

  function renderFilters() {
    if (!filters) return;
    filters.innerHTML = categories.map((category) => `
      <button class="chip ${category === activeCategory ? 'is-active' : ''}" aria-pressed="${category === activeCategory ? 'true' : 'false'}" data-filter="${SafiUtils.escapeHtml(category)}" type="button">
        ${SafiUtils.escapeHtml(category)}
      </button>
    `).join('');
  }

  function renderGrid() {
    const items = window.SAFI_PORTFOLIO.filter((item) => activeCategory === 'الكل' || item.category === activeCategory);
    if (!items.length) {
      grid.innerHTML = '<div class="span-12 empty-state">لا توجد أعمال مطابقة لهذا التصنيف حالياً.</div>';
      return;
    }

    grid.innerHTML = items.map((item) => `
      <article class="span-6 glass-card work-card panel-glow">
        <div class="meta-row"><div class="card-badge">${SafiUtils.escapeHtml(item.category)}</div><span>${item.featured ? 'Featured' : 'Case'}</span></div>
        <h3>${SafiUtils.escapeHtml(item.title)}</h3>
        <p>${SafiUtils.escapeHtml(item.summary)}</p>
        <div class="service-highlight"><strong>الأثر:</strong> ${SafiUtils.escapeHtml(item.outcome)}</div>
        <div class="tag-list">${item.tags.map((tag) => `<span>${SafiUtils.escapeHtml(tag)}</span>`).join('')}</div>
      </article>
    `).join('');
  }

  filters?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    activeCategory = button.getAttribute('data-filter') || 'الكل';
    renderFilters();
    renderGrid();
  });

  renderFilters();
  renderGrid();
})();
