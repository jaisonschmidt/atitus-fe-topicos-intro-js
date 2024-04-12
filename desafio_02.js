// Patrocinio: Gabriel Vanz

const numeros = [-20, -10];

// Dado um array de números, escreva um programa para encontrar o maior valor no array
// utilizando reduce

const maior = numeros.reduce((acumulador, valorAtual) => {
    return acumulador > valorAtual ? acumulador : valorAtual;
}, numeros[0]);

// ============================================================================

let resultado = numeros[0];

// Linguagem Imperativa
// Reduce é declarativo, e não imperativo
for (n = 1; n < numeros.length; n++) { // Complexidade de Algoritmo O(n)
    if (resultado < numeros[n]) {
        resultado = numeros[n];
    };
}

console.log(resultado);


