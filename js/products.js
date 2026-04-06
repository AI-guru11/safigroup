(function () {
  const grid = document.querySelector('[data-products-grid]');
  const filters = document.querySelector('[data-product-filters]');
  if (!grid || !window.SAFI_PRODUCTS) return;

  const categories = window.SAFI_PRODUCT_CATEGORIES || ['الكل'];
  let activeCategory = 'الكل';

  function renderFilters() {
    if (!filters) return;
    filters.innerHTML = categories.map((category) => `
      <button class="chip ${category === activeCategory ? 'is-active' : ''}" aria-pressed="${category === activeCategory ? 'true' : 'false'}" data-category="${SafiUtils.escapeHtml(category)}" type="button">
        ${SafiUtils.escapeHtml(category)}
      </button>
    `).join('');
  }

  function productMessage(item) {
    return `مرحباً، أريد الاستفسار عن المنتج: ${item.name} — ${item.category}`;
  }

  function renderGrid() {
    const items = window.SAFI_PRODUCTS.filter((item) => activeCategory === 'الكل' || item.category === activeCategory);
    if (!items.length) {
      grid.innerHTML = '<div class="span-12 empty-state">لا توجد منتجات مطابقة لهذا التصنيف حالياً.</div>';
      return;
    }

    grid.innerHTML = items.map((item) => `
      <article class="span-4 glass-card product-card panel-glow">
        <div class="meta-row"><div class="card-badge">${SafiUtils.escapeHtml(item.status)}</div><span>${SafiUtils.escapeHtml(item.category)}</span></div>
        <h3>${SafiUtils.escapeHtml(item.name)}</h3>
        <p>${SafiUtils.escapeHtml(item.shortDescription)}</p>
        <div class="product-features">${item.features.map((feature) => `<span>${SafiUtils.escapeHtml(feature)}</span>`).join('')}</div>
        <div class="meta-row" style="margin-top:1rem;"><span>${item.featured ? 'مقترح للواجهة' : 'ضمن الكتالوج'}</span><strong>${SafiUtils.escapeHtml(item.price)}</strong></div>
        <div class="cta-row">
          <a class="btn btn-secondary" href="${SafiUtils.whatsappLink(productMessage(item))}">اطلب عبر واتساب</a>
        </div>
      </article>
    `).join('');
  }

  filters?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.getAttribute('data-category') || 'الكل';
    renderFilters();
    renderGrid();
  });

  renderFilters();
  renderGrid();
})();
