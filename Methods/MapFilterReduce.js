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

console.log(sum)