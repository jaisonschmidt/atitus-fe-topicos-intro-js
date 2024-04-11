/**
 * Crie um programa em JS que solicita o nome e depois o sobrenome
 * do usuário. Ao final o programa deve imprimir o nome completo do usuário
 * usando a função alert()
 */

// Solicita o nome do usuário
let nome = prompt("Digite o seu nome: ");

// Solicita o sobrenome do usuário
let sobrenome = prompt("Digite o seu sobrenome: ");

// Imprime o nome completo do usuário
alert("O nome completo do usuário é: " + nome + " " + sobrenome);

// usando string interpolation
alert(`O nome completo do usuário é: ${nome} ${sobrenome}`);