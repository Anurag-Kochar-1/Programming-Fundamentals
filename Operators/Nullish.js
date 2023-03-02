// In javascript following values are considered falsy : false, 0, "", undefined, null, NaN

let value = 0

const myNumber1 = value || 10
const myNumber2 = value ?? 10

console.log(myNumber1)
console.log(myNumber2)