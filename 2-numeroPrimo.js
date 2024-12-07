// 2 - Verifique se um número é primo

function ehPrimo(numero) {
    if (numero <= 1) {
        return console.log("O número não é primo."); 
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return console.log("O número não é primo."); 
        }
    }

    return console.log("O número é primo.");
}

ehPrimo(234);
