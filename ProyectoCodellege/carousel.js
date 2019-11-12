$('.carousel').carousel({
    pause: "false"
});
<<<<<<< HEAD

	$( document ).ready(function() {
		$('#menu_on').click(function(){ // Al hacer click...
		   $('body').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
		 })
	});
=======
$(document).ready(function(){
    $("#imagen2").mouseenter(function imagen(){
        $(".imagen1").css("opacity", "0");
    });
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
>>>>>>> 2d35f691b284fc920ced56dc528d5df565bfa151
