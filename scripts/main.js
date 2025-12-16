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

const init = () => {
  renderProjects();
  renderNotes();
  renderDesign();
};

document.addEventListener('DOMContentLoaded', init);

