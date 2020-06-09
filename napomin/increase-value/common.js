var s1 = document.querySelector('.s1'),
		s2 = document.querySelector('.s2'),
		s3 = document.querySelector('.s3');

var Visible = function (target) {
	var targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
	windowPosition = {
		top: window.pageYOffset,
		bottom: window.pageYOffset + document.documentElement.clientHeight
	};
	if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
		var start = +target.innerHTML,
				end = +target.dataset.max;
		if(start != end) {
			var interval = setInterval(function() {
				target.innerHTML = ++start;
				if(start == end) {
					clearInterval(interval);
				}
			}, 10);
		}
	};
};


window.addEventListener('scroll', function scrollon() {
	var Vs1 =	Visible(s1),
			Vs2 = Visible(s2),
			Vs3 = Visible(s3);
});
var Vs1 =	Visible(s1),
		Vs2 = Visible(s2),
		Vs3 = Visible(s3);