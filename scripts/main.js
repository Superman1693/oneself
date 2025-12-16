import { projects, notes, designCards } from './data.js';

const renderProjects = () => {
  const container = document.querySelector('[data-render="projects"]');
  if (!container) return;
  container.innerHTML = projects
    .map(
      (item) => `
        <article class="card">
          <div class="pill">${item.status}</div>
          <h3>${item.title}</h3>
          <p class="section-desc">${item.summary}</p>
          <div class="keywords">
            ${item.keywords.map((k) => `<span>${k}</span>`).join('')}
          </div>
          ${item.link ? `<a class="pill" href="${item.link}" target="_blank" rel="noreferrer">查看</a>` : ''}
        </article>
      `
    )
    .join('');
};

const renderNotes = () => {
  const container = document.querySelector('[data-render="notes"]');
  if (!container) return;
  container.innerHTML = notes
    .map(
      (note) => `
        <article class="note">
          <h3>${note.title}</h3>
          <div class="note-meta">
            <span>${note.date}</span>
            <span>·</span>
            <span>${note.tags.join(' / ')}</span>
          </div>
          <p class="section-desc">${note.excerpt}</p>
        </article>
      `
    )
    .join('');
};

const renderDesign = () => {
  const container = document.querySelector('[data-render="design"]');
  if (!container) return;
  container.innerHTML = designCards
    .map(
      (card) => `
        <article class="card progress-card">
          <div class="card-top">
            <h3>${card.title}</h3>
            <span class="pill">${card.progress}%</span>
          </div>
          <p class="section-desc">${card.note}</p>
          <div class="progress-track" aria-label="${card.title} progress">
            <div class="progress-bar" style="width:${card.progress}%;"></div>
          </div>
          <div class="progress-meta">
            <span>当前进度</span>
            <span>${card.progress}%</span>
          </div>
          <div class="keywords">
            ${card.keywords.map((k) => `<span>${k}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');
};

const setupTypedHero = () => {
  const target = document.querySelector('#hero-typed');
  if (!target || !window.Typed) return;
  const sentences = [
    '这个网站记录我的项目实践、学习笔记以及设计思考。',
    '保持克制与长期主义，持续迭代 Web 能力。',
    '写清楚、想清楚、做扎实。',
  ];
  // eslint-disable-next-line no-new
  new window.Typed('#hero-typed', {
    strings: sentences,
    typeSpeed: 50,
    backSpeed: 26,
    backDelay: 1800,
    loop: true,
    showCursor: true,
  });
};

const setupLazyImages = () => {
  const images = Array.from(document.querySelectorAll('img[data-lazy]'));
  if (!images.length) return;
  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.src = img.dataset.lazy;
      img.removeAttribute('data-lazy');
      observer.unobserve(img);
    });
  };
  const observer = new IntersectionObserver(onIntersect, { rootMargin: '120px' });
  images.forEach((img) => observer.observe(img));
};

const setupThemeToggle = () => {
  const btn = document.querySelector('#theme-toggle');
  if (!btn) return;
  const root = document.documentElement;
  const hl = document.querySelector('#hl-theme');
  const lightHref = 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css';
  const darkHref = 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css';
  const applyTheme = (mode) => {
    root.dataset.theme = mode;
    localStorage.setItem('theme', mode);
    if (hl) hl.href = mode === 'dark' ? darkHref : lightHref;
    btn.textContent = mode === 'dark' ? '☀️' : '🌙';
  };
  const saved = localStorage.getItem('theme');
  applyTheme(saved === 'dark' ? 'dark' : 'light');
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
};

const init = () => {
  renderProjects();
  renderNotes();
  renderDesign();
  setupTypedHero();
  setupLazyImages();
  setupThemeToggle();
};

document.addEventListener('DOMContentLoaded', init);

