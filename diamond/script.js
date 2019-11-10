let startWrap = document.querySelector('.startWrap'),
		start = document.querySelector('.start'),
		button = document.querySelector('.button');

function shift() {
	if(parseInt(start.style.left) == 300) {
		start.style.left = 0 + '%';
	} else {
		start.style.left = parseInt(start.style.left) + 100 + '%';
	}
}
function increase() {
	startWrap.style.height = 186 + 'px';
	startWrap.style.width = 196 + 'px';
	setTimeout(function() {
		startWrap.style.transition = 'none';
		start.src = "img/bri_big_anim_middle.png";
		startWrap.style.height = 188.5 + 'px';
			setTimeout(function() {
				startWrap.style.transition = 'none';
				start.src = "img/bri_big_anim_finish.png";
				startWrap.style.height = 202.5 + 'px';
				setTimeout(function() {
					startWrap.style.transition = 'all 3s';
					startWrap.style.left = 320 + 'px';
					startWrap.style.top = 125 + 'px';
					startWrap.style.height = 50.625 + 'px';
					startWrap.style.width = 49 + 'px';
					setTimeout(function() {
						clearInterval(setIntervalid);
					},3500)
				},10)
			}, 1000)
	}, 2000)	
}

button.addEventListener('click', function() {
	startWrap.style.display = 'block';
	button.style.display = 'none';
	setTimeout(increase, 100);
	setIntervalid = setInterval(shift,300);
});

