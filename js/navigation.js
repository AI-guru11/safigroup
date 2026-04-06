(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const nav = toggle?.closest('nav');
  if (!toggle || !menu || !nav) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  }

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else openMenu();
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (menu.hidden) return;
    if (!nav.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
})();
