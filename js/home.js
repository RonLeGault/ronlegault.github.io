var pageState = false;

$(document).ready(function() {	
	$(window).load(function() {
		$('.centered').addClass('animate');
		setTimeout(function() {
			$('nav').removeClass('active');
		}, 2000);
	});
	
	$('body').click(function() {
		if (pageState) {
			$('#header').removeClass('swipe');
			$('#info').removeClass('swipe');
			$('#background-image').removeClass('blur');
			$('#right-arrow').fadeIn(300);
			$('#left-arrow').fadeOut(300);
		} else {
			$('#info').addClass('swipe');
			$('#header').addClass('swipe');
			$('#background-image').addClass('blur');
			$('#right-arrow').fadeOut(300);
			$('#left-arrow').fadeIn(300);
		}
		pageState = !pageState;
	});
});