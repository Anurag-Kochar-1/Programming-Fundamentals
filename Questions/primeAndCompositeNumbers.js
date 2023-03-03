// primeAndCompositeNumbers.js

let num = 10
var isPrimeNumber = true

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrimeNumber = false
    }
}

console.log(isPrimeNumber)