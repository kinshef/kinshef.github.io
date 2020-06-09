window.addEventListener('DOMContentLoaded', function() {
	'use strict'

let gambyrger = document.querySelector('.gambyrger'),
		menu = document.querySelector('.menu'),
		filteractiv = document.querySelector('.filteractiv'),
		filterbtn = document.querySelector('.filterbtn'),
		btnposf = document.querySelector('.btnposf');

// скрипт на кнопку меню

if (menu.offsetWidth < 1129) {
	menu.style.display = 'none';
} else {
	menu.style.display = 'block';
}
gambyrger.addEventListener('click', function(){
	if(menu.style.display == 'none') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
});


// скрипт на poz fiks

filterbtn.addEventListener('click', function(){
	if(filteractiv.style.display == 'none') {
		filteractiv.style.display = 'block';
	} else {
		filteractiv.style.display = 'none';
	}
});

btnposf.addEventListener('click', function(){
	if(filteractiv.style.display == 'block') {
		filteractiv.style.display = 'none';
	} else {
		filteractiv.style.display = 'block';
	}
});


});








