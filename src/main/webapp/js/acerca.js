$(document).ready(function(){
	$("input[type='text'], textarea").focusout(function(){
		if($(this).val() == ""){
			$(this).css("border", "2px solid red");							
		}else{
			$(this).css("border", "");
		}			
	});
	$("button").click(function(){
		if(($("#nombre").val() == "") || ($("#email").val() == "") || ($("#asunto").val() == "") || ($("#textocomentario").val() == "")){
			alert("Llena los campos por favor!");
			return false;
		}				
	});
});