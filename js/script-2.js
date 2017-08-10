let carro = {"modelo" : "Sw4", "combustivel" : "Hibrido", "consome": 12, "tanque": 40};
let range;
let quantidade;
let doc = document;
let submit;
let enviar;
let distancia;
let aceitaCombustivel;
let tipoCombustivel;

window.onload = function() {
	range = doc.getElementById("litro");
	quantidade = doc.getElementById("quantidade");
	enviar = doc.getElementById("enviar");	
	modelo = doc.getElementById("modelo");
	aceitaCombustivel = doc.getElementById("aceitaCombustivel");	
	distancia = doc.getElementById("distancia");
	tipoCombustivel = doc.getElementById("gasolina");
	doc.getElementById("alcool").addEventListener("click", alterouTipoCombustivel);

	aceitaCombustivel.innerHTML = carro.combustivel;
	modelo.innerHTML = carro.modelo;
	
	carro.combustivel = range.value;
	quantidade.value = carro.tanque;
	quantidade.max = carro.tanque;
	distancia.innerHTML = 480;

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
		distancia.innerHTML = quantidade.value * 7.5;
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