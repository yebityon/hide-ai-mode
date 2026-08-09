(() => {
  // Collapse inner runs of whitespace, then trim. `\s` covers NBSP ( ),
  // which Google emits inside these labels depending on the layout.
  const norm = s => (s || "").replace(/\s+/g, " ").trim();

  // Both default to true so the extension behaves as it did before settings existed.
  const DEFAULTS = { hideAiTab: true, hideAiOverview: true };

  // Marker classes only; hide-ai.css is what actually hides them.
  const TAB_TARGET = 'hide-ai-tab-target';
  const OVERVIEW_TARGET = 'hide-ai-overview-target';

  function markAiTab() {
    const elements = document.querySelectorAll('a[href^="/search?"]');
    const aiModeText = ["AI Mode", "AI モード", "AI 모드"];
    elements.forEach(el => {
      // Normalize whitespace and compare the text exactly to a known label.
      const text = norm(el.textContent);
      if (aiModeText.includes(text)) {
        el.classList.add(TAB_TARGET);
      }
    });
  }
  function markAiOverview() {
    const descKey = ["AI による概要", "AI Overview", "AI 개요"];
    const query = '[role="heading"], h1, h2, h3';
    const elements = document.querySelectorAll(query);
    elements.forEach(el => {
      const text = norm(el.textContent);
      if (descKey.includes(text) && el) {
        const found = findAiOverviewBlock(el);
        if (found) {
          found.classList.add(OVERVIEW_TARGET);
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


  // Marks are never removed; these two classes on <html> decide what is visible,
  // so toggling a setting is one class flip instead of a rescan.
  function applySettings(settings) {
    const root = document.documentElement;
    root.classList.toggle('hide-ai-tab-on', settings.hideAiTab);
    root.classList.toggle('hide-ai-overview-on', settings.hideAiOverview);
  }

  const runAll = () => { markAiTab(); markAiOverview(); };

  // storage is async, so start from the defaults and correct once it resolves.
  // Waiting first would let the AI blocks flash before the CSS lands.
  applySettings(DEFAULTS);
  runAll();

  const observer = new MutationObserver(runAll);
  observer.observe(document.body, { childList: true, subtree: true });

  browser.storage.local.get(DEFAULTS).then(applySettings);

  browser.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    browser.storage.local.get(DEFAULTS).then(applySettings);
  });
})();
