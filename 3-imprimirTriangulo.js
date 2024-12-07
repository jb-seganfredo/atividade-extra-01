// 3 - Imprima um triângulo de números

function imprimirTriangulo(n) {
    let numero = 1; 

    for (let i = 1; i <= n; i++) {  
        let linha = ''; 

        for (let j = 1; j <= i; j++) {
            linha += numero + ' '; 
            numero++;  
        }

        console.log(linha.trim());  
    }
}

imprimirTriangulo(7);
