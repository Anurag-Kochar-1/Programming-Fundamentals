// MapFilterReduce.js

const nums = [1, 2, 3, 4, 5]



const onlyEven = nums.filter((num) => {
    return num % 2 === 0
})

const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)




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
