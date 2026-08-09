(() => {
  // Collapse inner runs of whitespace, then trim. `\s` covers NBSP ( ),
  // which Google emits inside these labels depending on the layout.
  const norm = s => (s || "").replace(/\s+/g, " ").trim();

  function hideAiTab() {
    const elements = document.querySelectorAll('a[href^="/search?"]');
    const aiModeText = ["AI Mode", "AI モード", "AI 모드"];
    elements.forEach(el => {
      // Normalize whitespace and compare the text exactly to a known label.
      const text = norm(el.textContent);
      if (aiModeText.includes(text)) {
        el.style.display = 'none';
      }
    });
  }
  function hideAiDescription() {
    const descKey = ["AI による概要", "AI Overview", "AI 개요"];
    const query = '[role="heading"], h1, h2, h3';
    const elements = document.querySelectorAll(query);
    elements.forEach(el => {
      const text = norm(el.textContent);
      if (descKey.includes(text) && el) {
        const found = findAiOverviewBlock(el);
        if (found) {
          found.style.display = 'none';
        }
      }
    });
  }

  function findAiOverviewBlock(headingEl) {
    // find a elements which contains descKey
    const header = headingEl.closest('[id$="-header"]')
    if (header && header.id) {
      // "-header".length = 7
      const aiOverviewEntireId = header.id.slice(0, -7);
      const root = document.getElementById(aiOverviewEntireId);
      if (root && root.contains(header)) return root;
    }
    //  something wrong
    const mx = headingEl.closest('#m-x-content');
    if (mx) return mx;
    // only called when `closest` does not work, manually walkup to head
    let el = header;
    let found = null;
    const maxDepth = 12;

    for (let i = 0; i < maxDepth && el && el !== document.body; i++) {
      if (el.parentElement && el.parentElement.id === 'rcnt') break;
      if (el.hasAttribute('data-hveid')) found = el;
      el = el.parentElement;
    }
    if (found?.contains(document.getElementById('rso'))) return null;
    return found;
  }


  hideAiTab();
  hideAiDescription();

  const runAll = () => { hideAiTab(); hideAiDescription(); };

  const observer = new MutationObserver(() => runAll());
  observer.observe(document.body, { childList: true, subtree: true });
})();
