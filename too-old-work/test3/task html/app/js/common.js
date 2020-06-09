// window.addEventListener('DOMContentLoaded', function() {
'use strict';
var header = document.querySelector('header'),
		tab = document.querySelectorAll('header>div'),
		section = document.querySelectorAll('section');

function hideTabContent (a) {
	for (var i = a; i < section.length; i++) {
		section[i].classList.remove('show');
		section[i].classList.add('hiden');
	}
}

hideTabContent(0);

function showTabContent (b) {
	if (section[b].classList.contains('hiden')) {
		section[b].classList.remove('hiden');
		section[b].classList.add('show');
	}
}

header.addEventListener('click', function(event) {
	var target = event.target;
	if(target && target.classList.contains('tab')) {
		for(var i = 0; i < tab.length; i++) {
			if(target == tab[i]) {
				hideTabContent(0);
				showTabContent(i);
				break;
			}
		}
	}
});



var wrap = document.querySelectorAll('.wrap'),
		btnNew = document.querySelectorAll('.btn-new'),
		elnew = document.querySelectorAll('.new'),
		btnEnd = document.querySelectorAll('.btn-end');

document.body.addEventListener('click', function(event){
	var target = event.target;
	if(target && target.classList.contains('btn-new')) {
		for(var i = 0; i < btnNew.length; i++) {
			if(target == btnNew[i]) {

				if (elnew[i].classList.contains('hiden')) {
					wrap[i].classList.add('hiden');
					elnew[i].classList.remove('hiden');
				} else {
					elnew[i].classList.add('hiden');
					wrap[i].classList.remove('hiden');
				}


			}
		}
	}
});



document.body.addEventListener('click', function(event){
	var target = event.target;
	if(target && target.classList.contains('btn-end')) {
		for(var i = 0; i < btnEnd.length; i++) {
			if(target == btnEnd[i]) {

				if (wrap[i].classList.contains('hiden')) {
					elnew[i].classList.add('hiden');
					wrap[i].classList.remove('hiden');
				} else {
					wrap[i].classList.add('hiden');
					elnew[i].classList.remove('hiden');
				}

			}
		}
	}
});






// console.log(document.body);

// });
