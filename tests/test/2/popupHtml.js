
window.addEventListener('DOMContentLoaded', function() {
	chrome.storage.local.set({'setTeg': null, 'teg': null});
	document.querySelector('.popapBtn').addEventListener('click', function(){
		var setTeg = document.querySelector('.popapInput').value;
		chrome.storage.local.set({'setTeg': setTeg});
	});
});

chrome.storage.onChanged.addListener(function (changes){
	for(key in changes) {
		if(key === 'teg') {
			chrome.storage.local.get(null, function(result) {
				if(result.setTeg){
					document.querySelector('.popapSpan').innerText = 'Тегов: ' + result.setTeg + ' - ' + result.teg;
				}
			});
		}
	}
});