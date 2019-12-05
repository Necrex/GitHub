$(document).ready(main);
function main(){
    $("a").click(abrir);
    $(".modal #cerrar").click(cerrar);

}
function abrir(){
    var a = $(this).attr("href");
    $(a).fadeIn();
}
function cerrar(){
    $(".modal").fadeOut();
}
