// frontend/my-extension/public/background.js
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install' || details.reason === 'update') {
    // Open the options page for your extension
    chrome.runtime.openOptionsPage();
  }
});
