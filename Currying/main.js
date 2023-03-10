function f(a) {
    return function (b) {
        console.log(`${a} ${b}`)
    }
}


// Q1
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
// console.log(sum(10)(20)(30)) 


// Q2
function evaluate(method) {
    return function (a) {
        return function (b) {
            switch (method) {
                case 'sum':
                    return a + b

                case "substract":
                    return a - b
                default:
                    break;
            }
        }
    }
}
// console.log(evaluate("sum")(10)(20))

// Q3 => Infinite Currying
function add(a) {
    return function (b) {
        if (b) return add(a + b)
        return a
    }
}
// console.log(add(5)(2)(4)(8)())


// Q4 => Currying vs Partial Application
function sum_2(a) {
    return function (b, c) {
        return a + b + c
    }
}

// Q5 => Manipulating DOM
function updateText(id) {
    return function (content) {
        document.getElementById(id).textContent = content
    }
}
const updateHeading = updateText("heading")
// updateHeading("Anurag")


// Q7 
function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next)
            }
        }
    }
}

const sum_3 = (a, b, c) => a + b + c
const totalSum = curry(sum_3)


console.log(totalSum(1)(2)(3))