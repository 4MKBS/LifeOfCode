// Theme toggle + small progressive enhancements
(function() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');

  yearEl && (yearEl.textContent = new Date().getFullYear());

  const stored = localStorage.getItem('loc-theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
    if (btn) btn.textContent = stored === 'dark' ? '☀️' : '🌙';
  }

  btn && btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    localStorage.setItem('loc-theme', current);
    btn.textContent = current === 'dark' ? '☀️' : '🌙';
  });
})();
