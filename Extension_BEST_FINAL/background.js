
// waiting for the extension to be clicked
// executes the content.js code -- findss the privacy policy
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });

// listens for a message from content.js 
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // awaits for message and then will make the popup appear       
    }
);

