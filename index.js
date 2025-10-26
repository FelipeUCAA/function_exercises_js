/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}


function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = somar(somar(nota1, nota2), somar(nota3, nota4));
  return dividir(soma, 4);
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  const cateto1AoQuadrado = elevarPotencia(cateto1, 2);
  const cateto2AoQuadrado = elevarPotencia(cateto2, 2);
  const somaDosQuadrados = somar(cateto1AoQuadrado, cateto2AoQuadrado);
  return calcularRaizQuadrada(somaDosQuadrados);
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
