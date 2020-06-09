let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function() {
	let requst = new XMLHttpRequest();

	requst.open('GET', '/current.json');
	requst.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	requst.send();

	requst.addEventListener('readystatechange', function() {
		if (requst.readyState === 4 && requst.status == 200) {
			let data = JSON.parse(requst.response);
			inputUsd.value = inputRub.value / data.usd;
		} else {
			inputUsd.value = "123";
		}
	});

});

