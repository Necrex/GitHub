$('.carousel').carousel({
    pause: "false"
});

	$( document ).ready(function() {
		$('#menu_on').click(function(){
		   $('body').toggleClass('visible_menu');
		 })
	});
	$( document ).ready(function() {
		$('.menu').click(function(){
		   $('body').toggleClass('visible_menu');
		 })
	});