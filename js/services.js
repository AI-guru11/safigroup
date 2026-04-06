(function () {
  const grid = document.querySelector('[data-services-grid]');
  if (!grid || !window.SAFI_SERVICES) return;

  grid.innerHTML = window.SAFI_SERVICES.map((service) => `
    <article class="span-4 glass-card service-card panel-glow">
      <div class="card-badge">${SafiUtils.escapeHtml(service.badge)}</div>
      <h3>${SafiUtils.escapeHtml(service.icon)} ${SafiUtils.escapeHtml(service.title)}</h3>
      <p>${SafiUtils.escapeHtml(service.summary)}</p>
      <div class="service-highlight">${SafiUtils.escapeHtml(service.highlight)}</div>
      <ul class="list-clean">
        ${service.deliverables.map((item) => `<li>${SafiUtils.escapeHtml(item)}</li>`).join('')}
      </ul>
    </article>
  `).join('');

  const tiers = document.querySelector('[data-service-tiers]');
  if (tiers && window.SAFI_SERVICE_TIERS) {
    tiers.innerHTML = window.SAFI_SERVICE_TIERS.map((tier) => `
      <article class="glass-card">
        <div class="card-badge">${SafiUtils.escapeHtml(tier.tag)}</div>
        <h3>${SafiUtils.escapeHtml(tier.title)}</h3>
        <p>${SafiUtils.escapeHtml(tier.text)}</p>
      </article>
    `).join('');
  }
})();
