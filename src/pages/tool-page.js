import { getToolBySlug, tools } from '../tools/tool-data.js';
import { handlers } from '../tools/handlers.js';
import { initThemeToggle } from '../components/layout.js';
import '../styles.css';

initThemeToggle();
const slug = document.body.dataset.slug;
const tool = getToolBySlug(slug);

const titleEl = document.getElementById('toolTitle');
const descEl = document.getElementById('toolDesc');
const uiEl = document.getElementById('toolUi');
const relatedEl = document.getElementById('relatedTools');
const faqEl = document.getElementById('faqItems');

if (!tool) {
  titleEl.textContent = 'Tool not found';
} else {
  titleEl.textContent = tool.name;
  descEl.textContent = tool.desc;
  const related = tools.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 4);
  relatedEl.innerHTML = related.map((t) => `<a class="card" href="/tools/${t.slug}/"><h3>${t.name}</h3><p class="muted">${t.desc}</p></a>`).join('');

  const faq = [
    { q: `What does ${tool.name} do?`, a: tool.desc },
    { q: `Is ${tool.name} free to use?`, a: 'Yes, this tool runs 100% in your browser for free.' },
    { q: 'Is my data uploaded?', a: 'No. Input processing happens locally in your browser.' }
  ];

  faqEl.innerHTML = faq.map((x) => `<details><summary>${x.q}</summary><p>${x.a}</p></details>`).join('');
  document.getElementById('faqSchema').textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } }))
  });

  if (handlers[slug]) {
    handlers[slug]({ root: uiEl });
  } else {
    uiEl.innerHTML = `<div class="card"><h3>Coming soon</h3><p class="muted">This tool page is live and SEO-ready. Functional module can be added in /src/tools/handlers.js.</p></div>`;
  }
}
