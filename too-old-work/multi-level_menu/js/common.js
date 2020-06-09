$(document).ready(function() {

	$(".search").click(function() {
		$(".search").toggleClass("but_active");
		$(".hsearch").toggleClass("hactive");
	});

	$('.top_menu ul li').hover(function () {
		$('ul:first', this).slideDown(0);
	},
		function () {$('ul:first', this).slideUp(0);
	}); 

	$(".pr_slaider .slaidi li:nth-child(1)").hover(function() {
		$(".pr_slaider .sl").hide(0);
		$(".pr_slaider .sl:nth-child(1)").show(0);
	});
	$(".pr_slaider .slaidi li:nth-child(2)").hover(function() {
		$(".pr_slaider .sl").hide(0);
		$(".pr_slaider .sl:nth-child(2)").show(0);
	});
	$(".pr_slaider .slaidi li:nth-child(3)").hover(function() {
		$(".pr_slaider .sl").hide(0);
		$(".pr_slaider .sl:nth-child(3)").show(0);
	});
	$(".pr_slaider .slaidi li:nth-child(4)").hover(function() {
		$(".pr_slaider .sl").hide(0);
		$(".pr_slaider .sl:nth-child(4)").show(0);
	});
	$(".pr_slaider .slaidi li:nth-child(5)").hover(function() {
		$(".pr_slaider .sl").hide(0);
		$(".pr_slaider .sl:nth-child(5)").show(0);
	});
	





});