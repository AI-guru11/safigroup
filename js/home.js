(function () {
  const stats = document.querySelector('[data-home-stats]');
  const process = document.querySelector('[data-home-process]');
  const services = document.querySelector('[data-home-services]');
  const works = document.querySelector('[data-home-works]');
  const products = document.querySelector('[data-home-products]');
  const testimonials = document.querySelector('[data-home-testimonials]');

  if (stats && window.SAFI_SITE?.trustStats) {
    stats.innerHTML = window.SAFI_SITE.trustStats.map((item) => `
      <div class="stat"><strong>${SafiUtils.escapeHtml(item.value)}</strong><span>${SafiUtils.escapeHtml(item.label)}</span></div>
    `).join('');
  }

  if (process && window.SAFI_SITE?.process) {
    process.innerHTML = window.SAFI_SITE.process.map((item, index) => `
      <article class="process-item">
        <div class="process-index">0${index + 1}</div>
        <div>
          <h3>${SafiUtils.escapeHtml(item.title)}</h3>
          <p>${SafiUtils.escapeHtml(item.text)}</p>
        </div>
      </article>
    `).join('');
  }

  if (services && window.SAFI_SERVICES) {
    services.innerHTML = window.SAFI_SERVICES.map((item) => `
      <article class="span-4 glass-card service-card panel-glow">
        <div class="card-badge">${SafiUtils.escapeHtml(item.badge)}</div>
        <h3>${SafiUtils.escapeHtml(item.icon)} ${SafiUtils.escapeHtml(item.title)}</h3>
        <p>${SafiUtils.escapeHtml(item.summary)}</p>
      </article>
    `).join('');
  }

  if (works && window.SAFI_PORTFOLIO) {
    works.innerHTML = window.SAFI_PORTFOLIO.filter((item) => item.featured).slice(0, 3).map((item) => `
      <article class="span-4 glass-card work-card panel-glow">
        <div class="card-badge">${SafiUtils.escapeHtml(item.category)}</div>
        <h3>${SafiUtils.escapeHtml(item.title)}</h3>
        <p>${SafiUtils.escapeHtml(item.summary)}</p>
        <div class="inline-note">${SafiUtils.escapeHtml(item.outcome)}</div>
      </article>
    `).join('');
  }

  if (products && window.SAFI_PRODUCTS) {
    products.innerHTML = window.SAFI_PRODUCTS.filter((item) => item.featured).slice(0, 3).map((item) => `
      <article class="span-4 glass-card product-card panel-glow">
        <div class="card-badge">${SafiUtils.escapeHtml(item.status)}</div>
        <h3>${SafiUtils.escapeHtml(item.name)}</h3>
        <p>${SafiUtils.escapeHtml(item.shortDescription)}</p>
        <div class="meta-row"><span>${SafiUtils.escapeHtml(item.category)}</span><strong>${SafiUtils.escapeHtml(item.price)}</strong></div>
      </article>
    `).join('');
  }

  if (testimonials && window.SAFI_TESTIMONIALS) {
    testimonials.innerHTML = window.SAFI_TESTIMONIALS.map((item) => `
      <article class="span-4 glass-card testimonial-card panel-glow">
        <div class="card-badge">${SafiUtils.escapeHtml(item.project)}</div>
        <p class="testimonial-copy">“${SafiUtils.escapeHtml(item.text)}”</p>
        <div class="testimonial-meta">
          <strong>${SafiUtils.escapeHtml(item.name)}</strong>
          <span>${SafiUtils.escapeHtml(item.role)} — ${SafiUtils.escapeHtml(item.location)}</span>
        </div>
      </article>
    `).join('');
  }
})();
