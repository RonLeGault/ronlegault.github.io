$(document).ready(function() {	
	$(window).load(function() {
		$('.centered').addClass('animate');
		$('nav').addClass('active');
		setTimeout(function() {
			$('nav').removeClass('active');
		}, 2000);
	});
	
	$('#header').click(function() {
		$(this).addClass('swipe');
		$('#info').addClass('swipe');
	});
	
	$('#info').click(function() {
		$('#header').removeClass('swipe');
		$('#info').removeClass('swipe');
	});

	$('nav').hover(function() {
		$(this).addClass('active');
	});
	
	$('nav').mouseleave(function() {
		$(this).removeClass('active');
	});
});