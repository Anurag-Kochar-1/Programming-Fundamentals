// compareForEqual.js

var arr1 = [1, 2, 3]
var arr2 = [3, 2, 11]

const isArrayLengthSame = arr1.length === arr2.length &&
    arr1.every((elm) => {
        if (arr2.indexOf(elm) > -1) {
            return (elm = arr2[arr2.indexOf(elm)])
        }
    })


    