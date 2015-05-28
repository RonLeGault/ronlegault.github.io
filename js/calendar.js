$(document).ready(function() {	
	$(window).load(function() {
		$('.centered').addClass('animate');
		setTimeout(function() {
			$('nav').removeClass('active');
		}, 2000);
	});
});