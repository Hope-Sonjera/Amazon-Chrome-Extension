// frontend/my-extension/public/background.js
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === 'install' || details.reason === 'update') {
      // Open a new tab with the installation URL
      chrome.tabs.create({ url: 'https://your-extension-installation-url' });
    }
  });
  