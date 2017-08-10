const prototipo = new Carro('protótipo', '1', 4);


console.log(prototipo.modelo);
console.log(prototipo.chassi);
console.log(prototipo.qtdPortas);


function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}

Carro.prototype.andar = function(on = "Aguardando Instrucoes") {
  console.log(on);
}

prototipo.andar();

const teslan = new Carro('Teslan', 2, 4);

console.log(teslan);
teslan.andar();

function Teslan(modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas);
}

Teslan.prototype = Object.create(Carro.prototype);
Teslan.prototype.constuctor = Teslan;

Teslan.prototype.abrirTetoSolar = function() {
  console.log('teto solar aberta.');
}
const model3 = new Teslan('Model-3', '3', 4);


console.log(model3.modelo);
model3.andar("Ativado");
model3.abrirTetoSolar();