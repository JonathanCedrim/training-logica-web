var carro = {"nome" : "ranger", "gasolina" : 10};
var range;
var quantidade;
var doc = document;

window.onload = function() {
	range = doc.getElementById("litro");
	quantidade = doc.getElementById("quantidade");
	carro.gasolina = range.value;
	quantidade.value = 10;

	range.addEventListener("input", alterar);
};


function alterar() {
	
	carro.gasolina = range.value;
	quantidade.innerHTML = carro.gasolina;
}