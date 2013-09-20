$(document).ready(function(){

    function animate_der(numeroCarrusel, posicion, tiempo_transicion){
        var t = setInterval(function(){
            $("#carrusel_"+ numeroCarrusel+ " ul#lista_"+ numeroCarrusel + posicion).animate({marginLeft: '-200%'}, 1000, function(){
                $(this).append($("#carrusel_"+ numeroCarrusel+ " ul#lista_"+ numeroCarrusel + posicion + " li:first"));
                $(this).css({marginLeft: '-100%'});
            })
        },tiempo_transicion);
    }
    function animate_izq(numeroCarrusel, posicion, tiempo_transicion){
        var t = setInterval(function(){
            $("#carrusel_"+ numeroCarrusel+ " ul#lista_"+ numeroCarrusel + posicion).animate({marginLeft: '0%'}, 1000, function(){
                $(this).prepend($("#carrusel_"+ numeroCarrusel+ " ul#lista_"+ numeroCarrusel + posicion + " li:last"));
                $(this).css({marginLeft: '-100%'});
            })
        },tiempo_transicion);
    }
    animate_der(1, "_sup", 3000); animate_der(1, "_inf", 4000);
    animate_izq(2, "_sup", 3500);
    animate_der(3, "_sup", 4000);

    //inicia carrusel_1
    $("#carrusel_1 span.siguiente_sup").click(function(){
        $("#carrusel_1 ul#lista_1_sup").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_1 ul#lista_1_sup li:first"));
            $(this).css({marginLeft:'-100%'});
        });
    });
    $("#carrusel_1 span.anterior_sup").click(function(){
        $("#carrusel_1 ul#lista_1_sup").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_1 ul#lista_1_sup li:last"));
            $(this).css({marginLeft: '-100%'});
        });

    });

    $("#carrusel_1 span.siguiente_inf").click(function(){
        $("#carrusel_1 ul#lista_1_inf").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_1 ul#lista_1_inf li:first"));
            $(this).css({marginLeft:'-100%'});
        });
    });
    $("#carrusel_1 span.anterior_inf").click(function(){
        $("#carrusel_1 ul#lista_1_inf").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_1 ul#lista_1_inf li:last"));
            $(this).css({marginLeft: '-100%'});
        });

    });

    //termina carrusel_1

    //inicia carrusel_2
    $("#carrusel_2 span.siguiente_sup").click(function(){
        $("#carrusel_2 ul").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_2 ul li:first"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    $("#carrusel_2 span.anterior_sup").click(function(){
        $("#carrusel_2 ul").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_2 ul li:last"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    //termina carrusel_2

    //inicia carrusel_3
    $("#carrusel_3 span.siguiente_sup").click(function(){
        $("#carrusel_3 ul").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_3 ul li:first"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    $("#carrusel_3 span.anterior_sup").click(function(){
        $("#carrusel_3 ul").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_3 ul li:last"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    //termina carrusel_3

    $("#f1").hover(function(){
        $("#f1 div.cubre").toggleClass("cubre_show");
    });
    $("#f2").hover(function(){
        $("#f2 div.cubre").toggleClass("cubre_show");
    });
    $("#f3").hover(function(){
        $("#f3 div.cubre").toggleClass("cubre_show");
    });

    $("a[rel=terumo]").fancybox();
});