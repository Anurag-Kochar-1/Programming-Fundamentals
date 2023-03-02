let printFullName = function (age) {
    console.log(this.firstName, this.lastName, age)
}

let name1 = {
    firstName: "Anurag",
    lastName: "Kochar",
}
let name2 = {
    firstName: "Poppy",
    lastName: "Kumari",
}

// Call
printFullName.call(name1, 19)
printFullName.call(name2, 20)

// Apply
printFullName.apply(name1, [19])
printFullName.apply(name2, [20])


// bind Method
let printMyName1 = printFullName.bind(name1, 21)
printMyName1()