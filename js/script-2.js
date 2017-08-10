let carro = {"modelo" : "Sw4", "combustivel" : "Hibrido", "tanque": 40};
let range;
let quantidade;
let submit;
let enviar;
let distancia;
let aceitaCombustivel;
let tipoCombustivel;

window.onload = function() {
	range = document.getElementById("litro");
	quantidade = document.getElementById("quantidade");
	enviar = document.getElementById("enviar");	
	modelo = document.getElementById("modelo");
	aceitaCombustivel = document.getElementById("aceitaCombustivel");	
	distancia = document.getElementById("distancia");
	tipoCombustivel = document.getElementById("gasolina");	
	

	aceitaCombustivel.innerHTML = carro.combustivel;
	modelo.innerHTML = carro.modelo;
	
	carro.combustivel = range.value;
	quantidade.value = carro.tanque;
	quantidade.max = carro.tanque;
	distancia.innerHTML = 480;


	document.getElementById("alcool").addEventListener("click", alterouTipoCombustivel);
	range.addEventListener("input", alterar);
	enviar.addEventListener("click", windowLocation);
	tipoCombustivel.addEventListener("click", alterouTipoCombustivel);
};


function alterar() {
	carro.combustivel = range.value;
	quantidade.innerHTML = carro.combustivel;
	

	if(tipoCombustivel.checked) {
		distancia.innerHTML = quantidade.value * 12;	
	} else {
		distancia.innerHTML = Math.round(quantidade.value * 7.5);
	}
}

function windowLocation() {

	let url_string = window.location.href;
	let url = new URL(url_string);
	let quantidadee = url.searchParams.get("litro");


	console.log(quantidadee);
}

function alterouTipoCombustivel() {
	alterar();
}