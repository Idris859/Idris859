export function initThemeToggle() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  root.dataset.theme = saved;
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

export const debounce = (fn, wait = 180) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};
