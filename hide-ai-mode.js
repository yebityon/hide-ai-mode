(() => {
  function hideAiTab() {
    const elements = document.querySelectorAll('a[href^="/serach?"], a[href^="/search?"]');
    const aiModeText = ["AI Mode", "AI モード", "AI 모드"]
    elements.forEach(el => {
      // Normalize whitespace and compare the text exactly to "AIモード".
      const text = el.textContent && el.textContent.trim();
      if (aiModeText.includes(text)) {
        const anchor = el.closest('a');
        if (anchor) {
          anchor.style.display = 'none';
        } else {
          el.style.display = 'none';
        }
      }
    });
  }

  hideAiTab();

  const observer = new MutationObserver(() => hideAiTab());
  observer.observe(document.body, { childList: true, subtree: true });
})();
