// Patrocinado por: Henrique Wommer

const numeros = [3, 4, 5, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// acumulador = 0, valorAtual = 3, soma = 0 + 3 = 3 = 1ª iteração
// acumulador = 3, valorAtual = 4, soma = 3 + 4 = 7 = 2ª iteração

console.log(`Resultado = ${soma}`);