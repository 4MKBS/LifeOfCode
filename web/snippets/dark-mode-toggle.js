// Dark Mode Toggle Snippet
// Usage: include a button with id="themeToggle" and optional data-icon-light/dark
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  const stored = localStorage.getItem('loc-theme');
  if(stored) root.setAttribute('data-theme', stored);
  function icon(theme){
    return theme === 'dark' ? (btn.dataset.iconLight || '☀️') : (btn.dataset.iconDark || '🌙');
  }
  btn.textContent = icon(stored || root.getAttribute('data-theme') || 'light');
  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('loc-theme', next);
    btn.textContent = icon(next);
  });
})();
