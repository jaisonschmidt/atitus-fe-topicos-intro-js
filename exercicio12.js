function verificarNumero(num) {
    if (num === 0) { 
        return "neutro";
    }

    if (num > 0) {
        return 'positivo';
    } else {
        return 'negativo';
    }
}

console.log(verificarNumero(1));     // positivo
console.log(verificarNumero(100));   // positivo
console.log(verificarNumero(-1000)); // negativo
console.log(verificarNumero(0));     // neutro