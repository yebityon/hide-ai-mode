// Both default to true so a fresh install behaves like the pre-settings version.
const DEFAULTS = { hideAiTab: true, hideAiOverview: true };

const inputs = {
  hideAiTab: document.getElementById('hideAiTab'),
  hideAiOverview: document.getElementById('hideAiOverview'),
};

browser.storage.local.get(DEFAULTS).then(settings => {
  for (const [key, input] of Object.entries(inputs)) {
    input.checked = settings[key];
    // The content script picks this up through storage.onChanged.
    input.addEventListener('change', () => {
      browser.storage.local.set({ [key]: input.checked });
    });
  }
});
