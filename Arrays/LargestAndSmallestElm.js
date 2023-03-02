const arr = [10, 20, 30, 55, 1, 5]


// const getSmallest = (arr) => {
//     let smallNum = Number.POSITIVE_INFINITY
//     for (const num of arr) {
//         if (num < smallNum) {
//             smallNum = num
//         }
//     }
//     return smallNum
// }

const getSmallest = (arr) => {
    return arr.reduce((smallNum, num) => Math.max(smallNum, num))
}


console.log(getSmallest(arr))
