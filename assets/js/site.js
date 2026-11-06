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



  // Compact, always-visible social and email links on every page.
  if (!document.querySelector('.floating-social-links')) {
    const socialLinks = document.createElement('nav');
    socialLinks.className = 'floating-social-links';
    socialLinks.setAttribute('aria-label', 'HOPE Lab social links');
    socialLinks.innerHTML = `
      <a class="floating-social-link" href="https://www.facebook.com/hopelabscience/" target="_blank" rel="noopener noreferrer" aria-label="HOPE Lab on Facebook" title="Facebook">f</a>
      <a class="floating-social-link" href="https://www.linkedin.com/company/hope-lab" target="_blank" rel="noopener noreferrer" aria-label="HOPE Lab on LinkedIn" title="LinkedIn">in</a>
      <a class="floating-social-link" href="mailto:hopelab.science@gmail.com" aria-label="Email HOPE Lab" title="Email">e</a>
    `;
    document.body.appendChild(socialLinks);
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
