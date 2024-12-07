// 7 - Conte o número de dígitos de um número

function contarDigitos(numero) {
    let contador = 0;

    if (numero === 0) {
        return 1;
    }

    do {
        numero = Math.floor(numero / 10); 
        contador++; 
    } while (numero > 0);

    return contador;
}

console.log(contarDigitos(87987));