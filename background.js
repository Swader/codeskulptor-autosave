var settings = new Store("settings", {
    "freq": 3
});

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		chrome.pageAction.show(sender.tab.id);
		sendResponse(settings.toObject());
	}
);