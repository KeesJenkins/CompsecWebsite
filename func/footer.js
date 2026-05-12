(function () {
  const container = document.getElementById('footer');
  if (!container) return;

  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="nav__logo"> Online <span> Censorship</span></span>
          <p>How citizen movements can be triggered by social media and internet access can influence political change. How and why some governments/leaders censor social platforms and restrict internet access to avoid citizen uprisings and the spread of information. </p>
        </div>
        <nav class="footer__nav" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="pages/guidelines.html">Guidelines</a></li>
            <li><a href="pages/meetings.html">Meetings</a></li>
            <li><a href="pages/references.html">References</a></li>
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
