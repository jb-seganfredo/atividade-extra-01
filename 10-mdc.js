// 10 - Encontre o maior divisor comum (MDC) de dois números

function calcularMDC(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    do {
        if (a > b) {
            a = a - b; 
        } else {
            b = b - a; 
        }
    } while (a !== b);

    return a;
}

console.log(calcularMDC(30, 40));