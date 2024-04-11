/**
 * Crie um programa em JS que solicita o nome e depois o sobrenome
 * do usuário. Ao final o programa deve imprimir o nome completo do usuário
 * usando a função alert(), caso tanto o nome quanto sobrenome tenham sido preenchidos
 * caso nome ou sobrenome não tenham sido preenchidos, o programa deve exibir um alerta
 * Não aceitar somente espaços em branco!
 */

// Solicita o nome do usuário
let nome = prompt("Digite o seu nome: ");

// Solicita o sobrenome do usuário
let sobrenome = prompt("Digite o seu sobrenome: ");

if (nome.trim() === "" || sobrenome.trim() === "") {
    alert("Nome ou sobrenome não preenchido!");
} else {
    // Imprime o nome completo do usuário
    alert(`O nome completo do usuário é: ${nome} ${sobrenome}`);
}