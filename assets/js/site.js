(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menuButton.textContent = isOpen ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        menuButton.textContent = 'Menu';
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        menuButton.textContent = 'Menu';
        menuButton.focus();
      }
    });
  }



  // Discreet, expandable laboratory contact links on every page.
  if (!document.querySelector('.floating-connect')) {
    const connect = document.createElement('aside');
    connect.className = 'floating-connect';
    connect.innerHTML = `
      <div class="floating-connect-panel" id="floating-connect-panel" aria-label="HOPE Lab social links">
        <a href="https://www.linkedin.com/company/hope-lab" target="_blank" rel="noopener noreferrer"><span class="social-mark social-linkedin" aria-hidden="true">in</span> LinkedIn</a>
        <a href="https://www.facebook.com/hopelabscience/" target="_blank" rel="noopener noreferrer"><span class="social-mark social-facebook" aria-hidden="true">f</span> Facebook</a>
        <a href="mailto:hopelab.science@gmail.com"><span class="social-mark social-email" aria-hidden="true">✉</span> Email</a>
      </div>
      <button class="floating-connect-toggle" type="button" aria-expanded="false" aria-controls="floating-connect-panel">Connect</button>`;
    document.body.appendChild(connect);
    const toggle = connect.querySelector('.floating-connect-toggle');
    const close = () => { connect.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => {
      const open = connect.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (event) => { if (!connect.contains(event.target)) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { close(); toggle.focus(); } });
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Functional client-side publication search: title, author, journal, category, year and preprint text.
  const searchForm = document.querySelector('#publication-search');
  const searchInput = document.querySelector('#publication-query');
  const clearButton = document.querySelector('#clear-search');
  if (searchForm && searchInput) {
    const searchableItems = Array.from(document.querySelectorAll('.searchable-item'));
    const groupSections = Array.from(document.querySelectorAll('.publication-group'));
    const preprintSection = document.querySelector('.preprint-section');
    const noResults = document.querySelector('#no-results');
    const status = document.querySelector('#search-status');
    const initialCount = searchableItems.length;

    const runSearch = () => {
      const term = searchInput.value.trim().toLocaleLowerCase();
      let visible = 0;
      for (const item of searchableItems) {
        const haystack = `${item.dataset.search || ''} ${item.textContent || ''}`.toLocaleLowerCase();
        const match = !term || haystack.includes(term);
        item.hidden = !match;
        if (match) visible += 1;
      }
      for (const group of groupSections) {
        const groupHasResults = Array.from(group.querySelectorAll('.searchable-item')).some(item => !item.hidden);
        group.hidden = !groupHasResults;
      }
      if (noResults) noResults.hidden = visible > 0;
      if (status) {
        const paperVisible = document.querySelectorAll('.publication-row:not([hidden])').length;
        const preprintVisible = document.querySelectorAll('.preprint-card:not([hidden])').length;
        if (preprintSection) preprintSection.hidden = Boolean(term) && preprintVisible === 0;
        const suffix = term ? ` matching “${searchInput.value.trim()}”` : '';
        status.textContent = `Showing ${visible} of ${initialCount} items${suffix} (${paperVisible} papers, ${preprintVisible} preprints).`;
      }
    };
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      runSearch();
    });
    searchInput.addEventListener('input', runSearch);
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        searchInput.value = '';
        runSearch();
        searchInput.focus();
      });
    }
  }
})();
