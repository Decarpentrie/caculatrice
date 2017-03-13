var equation = "";

function afficherequation(){

	$("#affichage").val(equation);

}

function ajouterstring(element){
	equation=equation + element;


}
ajouterstring("1");
ajouterstring("2");
ajouterstring("+");
ajouterstring("8");
ajouterstring("9");

afficherequation();



$("#boutonegale").on("click", function(ev){
	math.eval(equation);

});

$("#boutonsupr").on("click", function(ev){
	afficherequation();
	equation = equation.substr(0,equation.length-1);
	afficherequation();
});





