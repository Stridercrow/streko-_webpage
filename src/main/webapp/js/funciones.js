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
    /*animate_der(1, "_sup", 3000); animate_der(1, "_inf", 4000);
    animate_izq(2, "_sup", 3500);
    animate_der(3, "_sup", 4000);*/

    //inicia carrusel_1
    $("#carrusel_1 span.siguiente_sup").click(function(){
        $("#carrusel_1 ul#lista1_sup").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_1 ul#lista1_sup li:first"));
            $(this).css({marginLeft:'-100%'});
        });
    });
    $("#carrusel_1 span.anterior_sup").click(function(){
        $("#carrusel_1 ul#lista1_sup").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_1 ul#lista1_sup li:last"));
            $(this).css({marginLeft: '-100%'});
        });

    });

    $("#carrusel_1 span.siguiente_inf").click(function(){
        $("#carrusel_1 ul#lista1_inf").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_1 ul#lista1_inf li:first"));
            $(this).css({marginLeft:'-100%'});
        });
    });
    $("#carrusel_1 span.anterior_inf").click(function(){
        $("#carrusel_1 ul#lista1_inf").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_1 ul#lista1_inf li:last"));
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

    //inicia carrusel_4
    $("#carrusel_4 span.siguiente_sup").click(function(){
        $("#carrusel_4 ul#lista4_sup").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_4 ul#lista4_sup li:first"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    $("#carrusel_4 span.anterior_sup").click(function(){
        $("#carrusel_4 ul#lista4_sup").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_4 ul#lista4_sup li:last"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    $("#carrusel_4 span.siguiente_inf").click(function(){
        $("#carrusel_4 ul#lista4_inf").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_4 ul#lista4_inf li:first"));
            $(this).css({marginLeft: '-100%'});
        });    
    });
    $("#carrusel_4 span.anterior_inf").click(function(){
        $("#carrusel_4 ul#lista4_inf").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_4 ul#lista4_inf li:last"));
            $(this).css({marginLeft: '-100%'});
        });
    });    
    //termina carrusel_4

    //inicia carrusel_5
    $("#carrusel_5 span.siguiente_sup").click(function(){
        $("#carrusel_5 ul").animate({marginLeft: '-200%'}, 500, function(){
            $(this).append($("#carrusel_5 ul li:first"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    $("#carrusel_5 span.anterior_sup").click(function(){
        $("#carrusel_5 ul").animate({marginLeft: '0%'}, 500, function(){
            $(this).prepend($("#carrusel_5 ul li:last"));
            $(this).css({marginLeft: '-100%'});
        });
    });
    //termina carrusel_5

    //activando lightbox para cada carrusel
    $("a[rel=terumo]").fancybox();
    $("a[rel=terumo_real]").fancybox();
    $("a[rel=lobe]").fancybox();
    $("a[rel=hino]").fancybox();
    $("a[rel=hino_real]").fancybox();
    $("a[rel=kyb]").fancybox();
    $("a[rel=recamara_paty]").fancybox();
});