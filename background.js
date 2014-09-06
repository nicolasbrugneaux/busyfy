chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log( arguments );
    if (request.action === "close")
    {
          chrome.tabs.remove(sender.tab.id, function() { });
    }
  });
