import { tools, categories } from '../tools/tool-data.js';
import { debounce, initThemeToggle } from '../components/layout.js';
import '../styles.css';

initThemeToggle();

const cards = document.getElementById('toolsGrid');
const popular = document.getElementById('popularTools');
const search = document.getElementById('search');
const catWrap = document.getElementById('categories');
let activeCategory = 'all';

const cardHtml = (tool) => `<a class="card" href="/tools/${tool.slug}/"><span class="badge">${tool.category}</span><h3>${tool.name}</h3><p class="muted">${tool.desc}</p></a>`;

function renderTools() {
  const q = search.value.trim().toLowerCase();
  const filtered = tools.filter((t) => (activeCategory === 'all' || t.category === activeCategory) && `${t.name} ${t.desc}`.toLowerCase().includes(q));
  cards.innerHTML = filtered.map(cardHtml).join('');
}

catWrap.innerHTML = [`<button class="category-chip" data-cat="all">All</button>`, ...categories.map((c) => `<button class="category-chip" data-cat="${c.key}">${c.label}</button>`)].join('');
catWrap.addEventListener('click', (e) => {
  const button = e.target.closest('[data-cat]');
  if (!button) return;
  activeCategory = button.dataset.cat;
  renderTools();
});

popular.innerHTML = tools.filter((t) => t.popular).map(cardHtml).join('');
search.addEventListener('input', debounce(renderTools, 160));
renderTools();
