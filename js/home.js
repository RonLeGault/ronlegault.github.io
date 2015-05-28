$(document).ready(function() {
	$('nav').addClass('active');
	setTimeout(function() {
		$('nav').removeClass('active');
	}, 1250);
	
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