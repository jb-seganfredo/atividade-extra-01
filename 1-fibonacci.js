// 1 - Imprima a sequência de Fibonacci até o 10º termo

let firstNumber;
let secondNumber;

function sequenciaFibonacci(firstNumber, secondNumber) {
    for(let i=0; i < 10; i++) {
        console.log(firstNumber);
        let nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
}

sequenciaFibonacci(1, 2);