// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    }));
  }

  // Wiki sidebar hash-routing (only runs on pages with .wiki-panel elements)
  const panels = document.querySelectorAll('.wiki-panel');
  const wikiLinks = document.querySelectorAll('.wiki-nav a');
  if (panels.length) {
    const show = (id) => {
      panels.forEach(p => p.hidden = (p.id !== id));
      wikiLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    };
    const getId = () => (location.hash ? location.hash.slice(1) : 'overview');
    show(getId());
    window.addEventListener('hashchange', () => {
      show(getId());
      window.scrollTo({ top: document.querySelector('.wiki-layout').offsetTop - 90, behavior: 'smooth' });
    });
  }
});
