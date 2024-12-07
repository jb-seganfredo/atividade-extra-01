// 4 - Calcule o fatorial de um número

function calcFatorial(n) {
    if (n < 0) {
        return "Fatorial não definido para números negativos"; 
    }

    let fatorial = 1;
    let i = 1;

    while(i <= n) {
        fatorial *= i;
        i++;
    }
    return fatorial;
}

console.log(calcFatorial(20));

