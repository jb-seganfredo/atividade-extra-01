// 8 - Calcule a soma dos dígitos de um número

function somarDigitos(numero) {
    let somaTotal = 0;

    numero = Math.abs(numero);

    do {
        somaTotal += numero % 10; 
        numero = Math.floor(numero / 10); 
    } while (numero > 0);

    return somaTotal;
}

console.log(somarDigitos(23))