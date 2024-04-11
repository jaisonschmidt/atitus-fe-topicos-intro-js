function calcularDesconto(valorTotal) {
    const desconto = valorTotal * 0.1; // 10% de desconto
    const valorComDesconto = valorTotal - desconto;

    // Garante que o valor com desconto não seja inferior a zero
    if (valorComDesconto < 0) {
        return 0;
    }

    return valorComDesconto;
}

const valorTotalCompra = parseFloat(prompt("Digite o valor total da compra:"));
const valorFinal = calcularDesconto(valorTotalCompra);

console.log(`O valor com desconto é: R$${valorFinal.toFixed(2)}`);
