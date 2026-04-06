window.SafiUtils = {
  qs(sel, root = document) { return root.querySelector(sel); },
  qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); },
  escapeHtml(value = '') {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  },
  whatsappLink(message) {
    const phone = (window.SAFI_SITE && window.SAFI_SITE.contact.whatsapp) || '966555862272';
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  },
  slugify(value = '') {
    return String(value).trim().toLowerCase().replaceAll(/\s+/g, '-');
  },
  normalizeText(value = '') {
    return String(value).trim().toLowerCase();
  }
};
