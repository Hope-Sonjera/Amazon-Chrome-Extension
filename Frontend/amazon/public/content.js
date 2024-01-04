chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "scrapeAmazon") {
      // Implement your scraping logic here
      // Use DOM manipulation or fetch data from the page
      // Send the scraped data to the background script for storage
      sendResponse({ result: "Scraping in progress" });
    }
  });
  