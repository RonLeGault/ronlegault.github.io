$(document).ready(function() {
	$('nav').addClass('active');
	$(window).load(function() {
		$('.centered').addClass('animate');
		setTimeout(function() {
			$('nav').removeClass('active');
		}, 2000);
	});

	$('nav').hover(function() {
		$(this).addClass('active');
	});
	
	$('nav').mouseleave(function() {
		$(this).removeClass('active');
	});
});