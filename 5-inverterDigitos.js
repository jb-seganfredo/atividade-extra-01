// 5 - Inverta os dígitos de um número

function inverterDigitos(numero) {
    let numeroInvertido = 0;

    while (numero > 0) {  
        let ultimoDigito = numero % 10;  
        numeroInvertido = numeroInvertido * 10 + ultimoDigito;  
        numero = Math.floor(numero / 10); 
    }

    return numeroInvertido;
}

console.log(inverterDigitos(12345));  

