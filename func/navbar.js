(function () {
  const container = document.getElementById('navbar');
  if (!container) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'events.html',   label: 'Events' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'team.html',     label: 'Team' },
    { href: 'about.html',    label: 'About' },
  ];

  const items = links.map(({ href, label }) => {
    const active = href === currentPath ? ' class="active"' : '';
    return `<li><a href="${href}"${active}>${label}</a></li>`;
  }).join('');

  container.innerHTML = `
    <nav class="nav">
      <div class="container nav__inner">
        <a href="index.html" class="nav__logo">Computing <span>in Society</span></a>
        <ul class="nav__links">${items}</ul>
        <a href="join.html" class="btn btn-primary nav__cta">Join Us</a>
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
