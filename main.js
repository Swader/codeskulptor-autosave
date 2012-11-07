chrome.extension.sendRequest({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		var saveButton = document.getElementById("save");
		var autosaveInterval = setInterval(function() {
			if (document.URL.indexOf("/#user") != -1 && saveButton !== null) {
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("click", true, true );
				saveButton.dispatchEvent(evt);
			}
		}, response.freq * 1000 * 60);
	}
	}, 10);
});