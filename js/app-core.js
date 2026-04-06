(function () {
  function getBasePath() {
    if (window.SAFI_SITE?.brand?.siteUrl) {
      try {
        return new URL(window.SAFI_SITE.brand.siteUrl).pathname;
      } catch (_) {}
    }
    const path = window.location.pathname;
    if (/\/(services|portfolio|products|brief|contact|legacy)\//.test(path)) {
      return path.replace(/\/(services|portfolio|products|brief|contact|legacy)\/.*$/, '/');
    }
    return path.endsWith('/') ? path : path.replace(/[^/]*$/, '');
  }

  const basePath = getBasePath();

  if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`${basePath}sw.js`).catch(() => {});
    });
  }

  document.documentElement.style.setProperty('--site-root', `"${basePath}"`);

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const contactEmail = window.SAFI_SITE?.contact?.email || 'safigroup@gmail.com';
  const whatsappDisplay = window.SAFI_SITE?.contact?.whatsappDisplay || '+966 55 586 2272';
  const city = window.SAFI_SITE?.contact?.city || 'محايل عسير، المملكة العربية السعودية';

  document.querySelectorAll('[data-contact-email]').forEach((el) => {
    el.textContent = contactEmail;
    el.href = `mailto:${contactEmail}`;
  });

  document.querySelectorAll('[data-contact-whatsapp]').forEach((el) => {
    el.textContent = whatsappDisplay;
    el.href = window.SafiUtils
      ? SafiUtils.whatsappLink('مرحباً، أريد الاستفسار عن خدمات مجموعة الصافي')
      : '#';
  });

  document.querySelectorAll('[data-contact-city]').forEach((el) => {
    el.textContent = city;
  });

  document.querySelectorAll('[data-contact-map]').forEach((el) => {
    if (window.SAFI_SITE?.contact?.mapsUrl) el.href = window.SAFI_SITE.contact.mapsUrl;
  });
})();
