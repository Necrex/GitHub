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

/*function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
    }
    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*
    muestra_oculta('ima3');/* "contenido_a_mostrar" es el nombre que le dimos al DIV 
    } */

/*$(document).ready(function(){
    $("#ima4").mouseenter(function imagen(){
        $(".ima1").css("opacity", "0");
    });
});*/
//


/*$(document).ready(function(){
    $("#ima1").mouseover(function(){
        $("#ima2").toggle();
    })
})
$(document).ready(function(){
    $("#ima1").mouseover(function(){
        $("#ima3").toggle();
    })
})
$(document).ready(function(){
    $("#ima1").mouseover(function(){
        $("#ima4").toggle();
    })
})
//
$(document).ready(function(){
    $("#ima2").mouseover(function(){
        $("#ima1").hide();
    })
})
$(document).ready(function(){
    $("#ima2").mouseover(function(){
        $("#ima3").hide();
    })
})
$(document).ready(function(){
    $("#ima2").mouseover(function(){
        $("#ima4").hide();
    })
})
//
$(document).ready(function(){
    $("#ima3").mouseover(function(){
        $("#ima1").hide();
    })
})
$(document).ready(function(){
    $("#ima3").mouseover(function(){
        $("#ima2").hide();
    })
})
$(document).ready(function(){
    $("#ima3").mouseover(function(){
        $("#ima4").hide();
    })
})
//
$(document).ready(function(){
    $("#ima4").mouseover(function(){
        $("#ima1").hide();
    })
})
$(document).ready(function(){
    $("#ima4").mouseover(function(){
        $("#ima2").hide();
    })
})
$(document).ready(function(){
    $("#ima4").mouseover(function(){
        $("#ima3").hide();
    })
})*/