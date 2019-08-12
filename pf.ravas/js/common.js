$(document).ready(function() {


function Clock() {
	let time = new Date(),
			h = time.getHours().toString(),
			m = time.getMinutes().toString(),
			s = time.getSeconds().toString(),
			clock = document.querySelector('.clock');
			if(h.length < 2) {
				h = '0' + h;
			}
			if(m.length < 2) {
				m = '0' + m;
			}
			if(s.length < 2) {
				s = '0' + s;
			}
			clock.textContent = h + ':' + m + ':' + s;	
}
Clock();
setInterval(Clock, 1000);

function time() {
	let time = new Date(),
			h = time.getHours().toString(),
			header = document.querySelector('#top'),
			head_button_img = document.querySelector('.head_button_img');
			if (h > 20 || h < 6) {
				header.classList.add("but_active");
				head_button_img.classList.add("but_active");
			}
}
time()

 	$(".head_button").click(function() {
		$(".head_button img").toggleClass("but_active");
		$("header").toggleClass("but_active");
	});





$(".left_menu a, .top_nav a, .top").mPageScroll2id({
	offset : 0
});



	$(window).scroll(function(){
		var bo = $(this).scrollTop();
		if ( bo >= 250) {$("#hid").stop().animate({'left':'0'},150)};
		if ( bo < 250) {$("#hid").stop().animate({'left':'-50'},150)};
		if ( bo >= 250) {$("#hid2").stop().animate({'right':'20'},150)};
		if ( bo < 250) {$("#hid2").stop().animate({'right':'-60'},150)};
	})



	var percent1 = $('.pb1').attr('title');
	var percent2 = $('.pb2').attr('title');
	var percent3 = $('.pb3').attr('title');
	var percent4 = $('.pb4').attr('title');
	$(window).scroll(function(){
		var bo = $(this).scrollTop();
		if ( bo >= 1000) {$('.pb1').css({"width": percent1})};
		if ( bo >= 1000) {$('.pb2').css({"width": percent2})};
		if ( bo >= 1000) {$('.pb3').css({"width": percent3})};
		if ( bo >= 1000) {$('.pb4').css({"width": percent4})};
	})



	$(".slider").owlCarousel({
		items : 1,
		loop : true,
		center : true,
		nav : true,
		navText : "",
		margin : 400,
		stagePadding : 100,
	})


	$(".zad_vopr").magnificPopup();

	$(".sk_rp").magnificPopup({
		type : "image",
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});



	// E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});





});
