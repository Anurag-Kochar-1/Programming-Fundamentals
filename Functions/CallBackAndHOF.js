// CallBackAndHOF.js

const add = (a, b) => {
    return a + b
}

const calculatorHOF = (num1, num2, operator) => {
    return operator(num1, num2)
}


console.log(calculatorHOF(10, 200, add))