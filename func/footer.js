(function () {
  const container = document.getElementById('footer');
  if (!container) return;

  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__logo">Computing in Society</span>
          <p>Exploring the intersection of technology and the world around us.</p>
        </div>
        <nav class="footer__nav" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <p>&copy; ${year} Group 55. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
})();
