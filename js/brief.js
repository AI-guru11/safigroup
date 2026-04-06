(function () {
  const form = document.querySelector('[data-brief-form]');
  const select = document.querySelector('#service');

  if (select && window.SAFI_SERVICES) {
    select.innerHTML = '<option value=>اختر المسار المناسب</option>' + window.SAFI_SERVICES.map((service) => `<option>${SafiUtils.escapeHtml(service.badge)}</option>`).join('');
  }

  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'مرحباً، أريد بدء مشروع جديد مع مجموعة الصافي',
      `الاسم: ${data.get('name') || ''}`,
      `الجهة: ${data.get('company') || ''}`,
      `الخدمة: ${data.get('service') || ''}`,
      `الميزانية: ${data.get('budget') || ''}`,
      `التفاصيل: ${data.get('details') || ''}`
    ].join('\n');

    window.location.href = SafiUtils.whatsappLink(message);
  });
})();
