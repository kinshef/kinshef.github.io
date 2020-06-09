window.addEventListener('DOMContentLoaded', function() {



var presented_items = document.querySelectorAll('.presented_items>div>img'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next');


function hideSliderItem(a) {
	for (var i = a; i < presented_items.length; i++) {
		presented_items[i].classList.add('hiden');
	}
}
hideSliderItem(1);
function showSliderItem(b) {
	if (presented_items[b].classList.contains('hiden')) {
		presented_items[b].classList.remove('hiden');
	}
}


next.addEventListener('click', function() {
	for(var i = 0; i < presented_items.length; i++) {
		if(!presented_items[i].classList.contains('hiden')) {
			var a = i; a++;
			if(i == presented_items.length-1) {
				hideSliderItem(0);
				showSliderItem(0);
				presented_items[0].classList.remove('hiden');
				break;
			}
			hideSliderItem(0);
			showSliderItem(a);
			break;
		}
	}
});


prev.addEventListener('click', function() {
	for(var i = 0; i < presented_items.length; i++) {
		if(!presented_items[i].classList.contains('hiden')) {
			var a = i; a--;
			if(i == 0) {
				var a = presented_items.length - 1;
				hideSliderItem(0);
				showSliderItem(a);
				break;
			}
			hideSliderItem(0);
			showSliderItem(a);
			break;
		}
	}
});





});
