
const reverseInt = (num) => {
    let myNum = num.toString().split("").reverse().join("")
    if (myNum.endsWith("-")) {
        myNum = '-' + myNum
        return parseInt(myNum)
    } else {
        return parseInt(myNum)
    }
    


}

console.log(reverseInt(-451))