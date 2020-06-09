window.addEventListener('DOMContentLoaded', function() {




	var header = document.querySelector('header');
	
	document.onscroll = function () {
		if(window.pageYOffset >= 60){
			header.classList.add('fixHead');
		} else {
			header.classList.remove('fixHead');
		}
	};





	var btnClose = document.querySelector('.btn-close'),
			btnSearch = document.querySelector('.btn-search'),
			btnMenu = document.querySelector('.btn-menu'),
			Search = document.querySelector('.Search'),
			Menu = document.querySelector('.Menu');

	btnSearch.addEventListener('click', function(){
		Search.classList.remove('dis_none');
		Menu.classList.add('dis_none');
		if(btnClose.classList.contains('closeOff')) {
			btnClose.classList.remove('closeOff');
			btnClose.classList.add('close-search');
		} else {
			btnClose.classList.remove('close-menu');
			btnClose.classList.add('close-search');
		}
	});

	btnMenu.addEventListener('click', function(){
		Search.classList.add('dis_none');
		Menu.classList.remove('dis_none');
		if(btnClose.classList.contains('closeOff')) {
			btnClose.classList.remove('closeOff');
			btnClose.classList.add('close-menu');
		} else {
			btnClose.classList.remove('close-search');
			btnClose.classList.add('close-menu');
		}
	});

	btnClose.addEventListener('click', function(){
		Search.classList.add('dis_none');
		Menu.classList.add('dis_none');
		btnClose.classList.remove('close-search');
		btnClose.classList.remove('close-menu');
		btnClose.classList.add('closeOff');
	});


















});