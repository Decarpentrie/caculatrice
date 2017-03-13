var equation = "";


function afficherequation(){

	$("#affichage").val(equation);

}

function ajouterstring(element){
	equation=equation + element;


}


$(".boutonchiffre").on("click",function(ev) {
	ajouterstring(  $(this).html() );
	afficherequation();
});


$("#boutonegale").on("click", function(ev){
	equation = math.eval(equation);
	afficherequation();

});

$("#boutonsupr").on("click", function(ev){
	equation = equation.substr(0,equation.length-1);
	afficherequation();
});



$("#reset").on("click", function(ev){
	equation="";
	afficherequation();
});