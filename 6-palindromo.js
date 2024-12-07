// 6 - Verifique se um número é palíndromo

function ehPalindromo(numero) {
    let numeroOriginal = numero;
    let numeroInvertido = 0;

    while (numero > 0) {
        let ultimoDigito = numero % 10;
        numeroInvertido = numeroInvertido * 10 + ultimoDigito;
        numero = Math.floor(numero / 10);
    }

    if (numeroOriginal === numeroInvertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

ehPalindromo(121);
ehPalindromo(123);

