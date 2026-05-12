(function () {
  const container = document.getElementById('navbar');
  if (!container) return;

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',             label: 'Home' },
    { href: 'pages/guidelines.html',  label: 'Guidelines' },
    { href: 'pages/meetings.html',    label: 'Meetings' },
    { href: 'pages/references.html',  label: 'References' },
  ];

  const items = links.map(({ href, label }) => {
    const active = href.split('/').pop() === currentFile ? ' class="active"' : '';
    return `<li><a href="${href}"${active}>${label}</a></li>`;
  }).join('');

  container.innerHTML = `
    <nav class="nav">
      <div class="container nav__inner">
        <a href="index.html" class="nav__logo">Online <span>Censorship</span></a>
        <ul class="nav__links">${items}</ul>
        <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
      </div>
    </nav>
  `;

  const toggle = container.querySelector('.nav__toggle');
  const navLinks = container.querySelector('.nav__links');

  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
})();
