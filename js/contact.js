(function () {
  const mapsLink = document.querySelector('[data-contact-map]');
  const socialWrap = document.querySelector('[data-social-links]');
  if (mapsLink && window.SAFI_SITE?.contact?.mapsUrl) {
    mapsLink.href = window.SAFI_SITE.contact.mapsUrl;
  }

  const socialEntries = [
    ['instagram', 'Instagram'],
    ['x', 'X'],
    ['snapchat', 'Snapchat'],
    ['tiktok', 'TikTok']
  ].filter(([key]) => Boolean(window.SAFI_SITE?.social?.[key]));

  if (socialWrap) {
    if (!socialEntries.length) {
      socialWrap.innerHTML = '<div class="surface-note">روابط التواصل الاجتماعي ستضاف بعد اعتماد الحسابات الرسمية.</div>';
      return;
    }

    socialWrap.innerHTML = socialEntries.map(([key, label]) => `
      <a class="chip" href="${SafiUtils.escapeHtml(window.SAFI_SITE.social[key])}" target="_blank" rel="noreferrer">${label}</a>
    `).join('');
  }
})();
