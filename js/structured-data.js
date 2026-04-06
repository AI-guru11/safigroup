(function () {
  if (!window.SAFI_SITE) return;
  const page = document.body.dataset.page || 'home';
  const siteUrl = window.SAFI_SITE.brand.siteUrl || '';
  const url = new URL(window.location.href);
  const title = document.title;
  const description = document.querySelector('meta[name="description"]')?.content || '';

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: window.SAFI_SITE.brand.name,
    alternateName: window.SAFI_SITE.brand.nameEn,
    url: siteUrl,
    logo: window.SAFI_SITE.brand.ogImage,
    email: window.SAFI_SITE.contact.email,
    telephone: window.SAFI_SITE.contact.whatsappDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: window.SAFI_SITE.contact.city,
      addressCountry: 'SA'
    }
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': page === 'contact' ? 'ContactPage' : (page === 'home' ? 'WebPage' : 'CollectionPage'),
    name: title,
    url: url.href,
    description,
    isPartOf: siteUrl
  };

  const breadcrumbNames = {
    home: 'الرئيسية',
    services: 'الخدمات',
    portfolio: 'الأعمال',
    products: 'المنتجات',
    brief: 'ابدأ مشروعك',
    contact: 'تواصل'
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: siteUrl },
      ...(page !== 'home' ? [{ '@type': 'ListItem', position: 2, name: breadcrumbNames[page] || title, item: url.href }] : [])
    ]
  };

  [organization, webPage, breadcrumb].forEach((payload) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(payload);
    document.head.appendChild(script);
  });
})();
