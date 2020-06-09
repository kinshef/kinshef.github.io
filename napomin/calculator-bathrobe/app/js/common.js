window.addEventListener('DOMContentLoaded', function() {


// var glav_text = document.querySelector('.glav_text'),
// 		texture_center = document.querySelector('.texture-center');

// glav_text.addEventListener('input', function(){
// 	texture_center.textContent = glav_text.value;
// });

// 	var products = document.querySelector('.products');
	
// 	document.onscroll = function () {
// 		if(window.pageYOffset >= 130){
// 			products.classList.add('fixedWrap');
// 		} else {
// 			products.classList.remove('fixedWrap');
// 		}
// 	};


// var products_img = document.querySelector('.products>img'),
// 		halat_color = document.querySelector('.halat_color'),
// 		halat_color_radio = document.querySelectorAll('.halat_color .radio-label');

// halat_color.addEventListener('click', function(event) {
// 	if(event.target && event.target.classList.contains('radio-label')) {
// 		for(var i = 0; i < halat_color_radio.length; i++) {
// 			if(event.target == halat_color_radio[i]) {
// 				products_img.src = "img/_src/" + halat_color_radio[i].dataset.color + ".png";
// 			}
// 		}
// 	}
// });


// var text_color = document.querySelector('.text_color'),
// 		text_color_radio = document.querySelectorAll('.text_color .radio-label');

// text_color.addEventListener('click', function(event) {
// 	if(event.target && event.target.classList.contains('radio-label')) {
// 		for(var i = 0; i < text_color_radio.length; i++) {
// 			if(event.target == text_color_radio[i]) {
// 				texture_center.style.color = text_color_radio[i].dataset.color;
// 			}
// 		}
// 	}
// });


// var koroni = document.querySelector('.koroni'),
// 		koroni_radio = document.querySelectorAll('.koroni .radio-label'),
// 		koroni_radio_img = document.querySelectorAll('.koroni .radio-label img'),
// 		texture_top = document.querySelector('.texture-top'),
// 		texture_botton = document.querySelector('.texture-botton');

// koroni.addEventListener('click', function(event) {
// 	if(event.target && event.target.tagName =='IMG' || event.target.classList.contains('radio-label')) {
// 		for(var i = 0; i < koroni_radio.length; i++) {
// 			if(event.target == koroni_radio[i] || event.target == koroni_radio_img[i]) {
// 				texture_top.style.backgroundImage = 'url(' + koroni_radio_img[i].src + ')';
// 				// console.log(koroni_radio_img[i]);
// 			}
// 		}
// 	}
// });








//_________текст на на спине_____________________________
var glav_text = document.querySelector('.glav_text'),
		texture_center = document.querySelector('.texture-center');

glav_text.addEventListener('input', function(){
	texture_center.textContent = glav_text.value;
});


//__________левый продукт фиксед на скрол___________________________________
	var products = document.querySelector('.products');
	
	document.onscroll = function () {
		if(window.pageYOffset >= 130){
			products.classList.add('fixedWrap');
		} else {
			products.classList.remove('fixedWrap');
		}
	};




















//__________выбор цвета халата___________________________________

var products_img = document.querySelector('.products>img'),
		halat_color = document.querySelector('.halat_color'),
		halat_color_radio = document.querySelectorAll('.halat_color .radio-label');

halat_color.addEventListener('click', function(event) {
	if(event.target && event.target.classList.contains('radio-label')) {
		for(var i = 0; i < halat_color_radio.length; i++) {
			if(event.target == halat_color_radio[i]) {
				products_img.src = halat_color_radio[i].dataset.path;
			}
		}
	}
});



//__________выбор цвета текста___________________________________
var text_color = document.querySelector('.text_color'),
		text_color_radio = document.querySelectorAll('.text_color .radio-label');

text_color.addEventListener('click', function(event) {
	if(event.target && event.target.classList.contains('radio-label')) {
		for(var i = 0; i < text_color_radio.length; i++) {
			if(event.target == text_color_radio[i]) {
				texture_center.style.color = text_color_radio[i].dataset.color;
			}
		}
	}
});



//__________выбор Шрифта текста___________________________________
var text_fons = document.querySelector('.text_fons'),
		text_fons_radio = document.querySelectorAll('.text_fons .radio-label');

text_fons.addEventListener('click', function(event) {
	if(event.target && event.target.classList.contains('radio-label')) {
		for(var i = 0; i < text_fons_radio.length; i++) {
			if(event.target == text_fons_radio[i]) {
				texture_center.style.fontFamily = text_fons_radio[i].dataset.fons;
			}
		}
	}
});

//__________выбор размера текста___________________________________
var saiz_fons = document.querySelector('.saiz_fons input');

saiz_fons.addEventListener('input', function(){
	console.log(saiz_fons.value);
	texture_center.style.fontSize = saiz_fons.value + 'px';
});





var texture_top = document.querySelector('.texture-top'),
		texture_botton = document.querySelector('.texture-botton'),
		koroni = document.querySelector('.koroni'),
		koroni_radio = document.querySelectorAll('.koroni .radio-label'),
		koroni_radio_img = document.querySelectorAll('.koroni .radio-label img'),

		icon_color = document.querySelector('.icon_color'),
		icon_color_radio = document.querySelectorAll('.icon_color .radio-label'),
		stock_icon_color = "black",
		stock_koroni = koroni_radio[0].dataset.path,

		venzel = document.querySelector('.venzel'),
		venzel_radio = document.querySelectorAll('.venzel .radio-label'),
		venzel_radio_img = document.querySelectorAll('.venzel .radio-label img'),
		stock_venzel = venzel_radio[0].dataset.path;


//__________выбор цвета короны___________________________________
icon_color.addEventListener('click', function(event) {
	if(event.target && event.target.classList.contains('radio-label')) {
		for(var i = 0; i < icon_color_radio.length; i++) {
			if(event.target == icon_color_radio[i]) {
				stock_icon_color = icon_color_radio[i].dataset.color;
				texture_top.style.backgroundImage = 'url(' + stock_koroni + stock_icon_color + '.png)';
				texture_botton.style.backgroundImage = 'url(' + stock_venzel + stock_icon_color + '.png)';
			}
		}
	}
});


//__________выбор короны___________________________________
koroni.addEventListener('click', function(event) {
	if(event.target && event.target.tagName =='IMG' || event.target.classList.contains('radio-label')) {
		for(var i = 0; i < koroni_radio.length; i++) {
			if(event.target == koroni_radio[i] || event.target == koroni_radio_img[i]) {
				stock_koroni = koroni_radio[i].dataset.path;
				texture_top.style.backgroundImage = 'url(' + stock_koroni + stock_icon_color + '.png)';
			}
		}
	}
});




//__________выбор нижнего рисунка___________________________________
venzel.addEventListener('click', function(event) {
	if(event.target && event.target.tagName =='IMG' || event.target.classList.contains('radio-label')) {
		for(var i = 0; i < venzel_radio.length; i++) {
			if(event.target == venzel_radio[i] || event.target == venzel_radio_img[i]) {
				stock_venzel = venzel_radio[i].dataset.path;
				texture_botton.style.backgroundImage = 'url(' + stock_venzel + stock_icon_color + '.png)';
			}
		}
	}
});















var form = document.querySelector('.ajax-contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var http = new XMLHttpRequest(), f = this;
  http.open("POST", "../contact.php");
  http.onreadystatechange = function() {
	  if (http.readyState == 4 && http.status == 200) {
	    alert(http.responseText);
	    form.reset();
	  }
	}
	http.onerror = function() {
  	alert('Ошибка, попробуйте еще раз');
	}
	http.send(new FormData(f));
});


});
