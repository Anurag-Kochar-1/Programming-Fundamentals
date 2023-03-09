// MapFilterReduce.js

const nums = [1, 2, 3, 4, 5]




// Polyfill for map
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp
}

const multipy = nums.myMap((num, i, arr) => {
    return num * 3
})
// console.log(multipy)



// Polyfill for filter
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(cb(this[i]))

    }
    return temp
}

const onlyEven = nums.myFilter((num) => {
    return num % 2 === 0
})

// console.log(onlyEven)



// Polyfills for Reduce
Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)

// console.log(sum)



// Q1
// const newStudentsArr = names.map((student) => student.name.toUpperCase())

// Q2 && Q3 
// const minMarks = students.filter((student) => student.marks > 60 && student.rollNumber > 15)

// Q4
// const sumOfMarks = students.reduce((acc, curr) => acc + curr.marks, 0)

// Q5
// const minMarksStudentNames = students.map(student => student.name).filter(student => student.marks > 60)


const students = [
    { name: "A", marks: 80 }, // 40
    { name: "B", marks: 69 }, // 50
    { name: "C", marks: 35 }, // 70
    { name: "D", marks: 55 }, // 70
]

// Q6 
const final = students.map((student) => {
    if (student.marks < 60) student.marks += 20
    return student
})
.filter((student) => student.marks > 60)
.reduce((acc, curr) => acc + curr.marks, 0)

console.log(final)














