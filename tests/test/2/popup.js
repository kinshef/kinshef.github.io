
chrome.storage.onChanged.addListener(function (changes){
	for(key in changes) {
		if(key === 'setTeg') {
			chrome.storage.local.get(['setTeg'], function(result) {
				var teg = document.querySelectorAll(result.setTeg).length;
				chrome.storage.local.set({'teg': teg});
			});
		}
	}	
});

