// primeAndCompositeNumbers.js

let num = 2
var isPrimeNumber = true

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrimeNumber = false
    }
}

console.log(isPrimeNumber)